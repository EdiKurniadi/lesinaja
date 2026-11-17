export type Literal = { kind: "literal"; symbol: string; negative: boolean };
export type Expression = Literal | { kind: "implies"; from: Expression; to: Expression }
  | { kind: "and" | "or"; items: Expression[] }
  | { kind: "some"; terms: Literal[] };

export const literal = (symbol: string, negative = false): Literal => ({ kind: "literal", symbol, negative });
export const implies = (from: Expression, to: Expression): Expression => ({ kind: "implies", from, to });
export const and = (...items: Expression[]): Expression => ({ kind: "and", items });
export const or = (...items: Expression[]): Expression => ({ kind: "or", items });
export const some = (...terms: Literal[]): Expression => ({ kind: "some", terms });

export function format(expression: Expression): string {
  const part = (e: Expression) => e.kind === "literal" ? format(e) : `(${format(e)})`;
  switch (expression.kind) {
    case "literal": return `${expression.negative ? "~" : ""}${expression.symbol}`;
    case "implies": return `${part(expression.from)} → ${part(expression.to)}`;
    case "and": case "or": return expression.items.map(part).join(expression.kind === "and" ? " ∧ " : " ∨ ");
    case "some": return `${format(expression.terms[0])} — ${expression.terms.length > 2 ? "(" : ""}${expression.terms.slice(1).map(format).join(" ∧ ")}${expression.terms.length > 2 ? ")" : ""}`;
  }
}

export function negate(e: Expression): Expression {
  switch (e.kind) {
    case "literal": return literal(e.symbol, !e.negative);
    case "implies": return and(e.from, negate(e.to));
    case "and": return or(...e.items.map(negate));
    case "or": return and(...e.items.map(negate));
    case "some": throw new Error("Negasi keberadaan membutuhkan kuantor universal, bukan pembalikan garis.");
  }
}

export function symbols(e: Expression): string[] {
  if (e.kind === "literal") return [e.symbol];
  if (e.kind === "some") return [...new Set(e.terms.map(t => t.symbol))];
  const parts = e.kind === "implies" ? [e.from, e.to] : e.items;
  return [...new Set(parts.flatMap(symbols))];
}

export function evaluate(e: Expression, values: Record<string, boolean>): boolean {
  switch (e.kind) {
    case "literal": return e.negative ? !values[e.symbol] : values[e.symbol];
    case "implies": return !evaluate(e.from, values) || evaluate(e.to, values);
    case "and": return e.items.every(t => evaluate(t, values));
    case "or": return e.items.some(t => evaluate(t, values));
    case "some": throw new Error("Keberadaan tidak boleh dinilai sebagai fakta proposisional global.");
  }
}

export function equivalent(a: Expression, b: Expression): boolean {
  if (a.kind === "some" || b.kind === "some") {
    if (a.kind !== "some" || b.kind !== "some") return false;
    return [...new Set(a.terms.map(format))].sort().join("|") === [...new Set(b.terms.map(format))].sort().join("|");
  }
  const names = [...new Set([...symbols(a), ...symbols(b)])];
  if (names.length > 8) return false;
  for (let mask = 0; mask < 2 ** names.length; mask++) {
    const values = Object.fromEntries(names.map((n, i) => [n, Boolean(mask & (1 << i))]));
    if (evaluate(a, values) !== evaluate(b, values)) return false;
  }
  return true;
}

export function equivalentForms(e: Expression): Expression[] {
  let forms: Expression[] = [e];
  if (e.kind === "implies") forms = [e, implies(negate(e.to), negate(e.from)), or(negate(e.from), e.to)];
  if (e.kind === "or" && e.items.length === 2) forms = [e, implies(negate(e.items[0]), e.items[1]), implies(negate(e.items[1]), e.items[0])];
  if (e.kind === "and") forms.push(and(...[...e.items].reverse()));
  if (e.kind === "some") forms.push(some(...[...e.terms].reverse()));
  return forms.filter((f, i) => forms.findIndex(t => format(t) === format(f)) === i);
}

export function conversionCandidates(e: Expression): Expression[] {
  let forms: Expression[];
  if (e.kind === "literal") forms = [e, negate(e)];
  else if (e.kind === "some") {
    const [a, b] = e.terms;
    forms = [e, implies(a, b), some(a, negate(b) as Literal), some(b, negate(a) as Literal)];
  } else if (e.kind === "implies") {
    forms = [e, implies(e.to, e.from), implies(negate(e.from), e.to), implies(e.from, negate(e.to))];
  } else {
    forms = [e, e.kind === "and" ? or(...e.items) : and(...e.items), negate(e), implies(e.items[0], e.items[1])];
  }
  return forms.filter((f, i) => forms.findIndex(t => format(t) === format(f)) === i);
}

const facts = (e: Expression): Expression[] => e.kind === "and" ? e.items.flatMap(facts) : [e];
const isFact = (e: Expression): boolean => e.kind === "literal" || (e.kind === "and" && e.items.every(isFact));
function containsFact(source: Expression, target: Expression): boolean {
  return facts(target).every(t => facts(source).some(s => equivalent(s, t)));
}

export function achieves(source: Expression, goal: Expression): boolean {
  if (source.kind === "some" && goal.kind === "some") {
    return goal.terms.every(t => source.terms.some(s => format(t) === format(s)));
  }
  return equivalent(source, goal) || (isFact(source) && isFact(goal) && containsFact(source, goal));
}

export function category(e: Expression): "Fakta" | "Aturan" | "Campuran" {
  if (e.kind === "some" || isFact(e)) return "Fakta";
  if (e.kind === "and" && e.items.some(t => category(t) === "Fakta")) return "Campuran";
  return "Aturan";
}

export type Operation = { ok: true; expression: Expression; title: string; detail: string; match: string }
  | { ok: false; detail: string };

export function operate(a: Expression, b: Expression): Operation {
  for (const [fact, rule] of [[a, b], [b, a]]) {
    // An inclusive OR can be used directly as either conditional form.
    const rules = rule.kind === "or" ? equivalentForms(rule).filter(t => t.kind === "implies") : [rule];
    for (const candidate of rules) {
      if (candidate.kind !== "implies") continue;
      if (isFact(fact) && isFact(candidate.from) && containsFact(fact, candidate.from)) {
        return { ok: true, expression: candidate.to, title: "Fakta * aturan", match: format(candidate.from), detail: `Fakta ${format(candidate.from)} tersedia. Ikuti aturan ${format(candidate)} untuk memperoleh ${format(candidate.to)}.` };
      }
      if (fact.kind === "some" && isFact(candidate.from) && isFact(candidate.to)) {
        const required = facts(candidate.from) as Literal[];
        if (required.every(t => fact.terms.some(s => format(t) === format(s)))) {
          const terms = [...fact.terms];
          for (const item of facts(candidate.to) as Literal[]) if (!terms.some(t => format(t) === format(item))) terms.push(item);
          return { ok: true, expression: some(...terms), title: "Fakta sebagian * aturan umum", match: format(candidate.from), detail: `Anggota dalam satu fakta sebagian memiliki ${format(candidate.from)}. Aturan menambahkan ${format(candidate.to)} pada anggota yang sama; sifat sebelumnya tetap diketahui.` };
        }
      }
    }
  }
  if (a.kind === "implies" && b.kind === "implies") {
    for (const [first, second] of [[a, b], [b, a]]) {
      if (equivalent(first.to, second.from)) return { ok: true, expression: implies(first.from, second.to), title: "Aturan * aturan", match: format(first.to), detail: `Penghubung ${format(first.to)} cocok. Sambungkan ${format(first.from)} langsung ke ${format(second.to)}. Hasilnya aturan baru, bukan fakta bahwa pangkalnya terjadi.` };
    }
  }
  if (isFact(a) && isFact(b)) {
    const merged: Expression[] = [];
    for (const e of [...facts(a), ...facts(b)]) if (!merged.some(t => equivalent(t, e))) merged.push(e);
    return { ok: true, expression: and(...merged), title: "Fakta * fakta", match: "dan", detail: "Gabungkan kedua fakta dengan dan (∧). Penggabungan ini tidak membalik panah atau menciptakan aturan umum baru." };
  }
  if (a.kind === "some" || b.kind === "some") return { ok: false, detail: "Fakta sebagian membutuhkan aturan umum yang cocok. Dua fakta sebagian bisa membahas anggota berbeda; keduanya tidak boleh langsung disambungkan." };
  return { ok: false, detail: "Belum ada sambungan yang cocok. Cocokkan fakta dengan pangkal panah, atau ujung aturan pertama dengan pangkal aturan kedua. Coba ≡ untuk membuat kontraposisi." };
}
