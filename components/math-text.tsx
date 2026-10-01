"use client";

import { memo, type ReactNode } from "react";
import katex from "katex";

type Token =
  | { type: "text"; content: string }
  | { type: "sqrt"; content: string }
  | { type: "sup"; content: string }
  | { type: "fraction"; num: string; den: string }
  | { type: "mixed-fraction"; whole: string; num: string; den: string };

const MATH_SYNTAX_REGEX = /[\$\^/]|sqrt\(|<=>|->|<=|>=|\*|\bpi\b/;

function hasMathSyntax(str: string): boolean {
  return MATH_SYNTAX_REGEX.test(str);
}

function preprocessMathString(text: string): string {
  if (!text) return "";
  return text
    .replace(/<=>/g, " ⇔ ")
    .replace(/->/g, " → ")
    .replace(/<=/g, " ≤ ")
    .replace(/>=/g, " ≥ ")
    .replace(/\bpi\b(?=\s*=\s*|\s*\*)/g, "π")
    .replace(/([0-9%\)])\s*\*\s*([0-9%(a-zA-Z])/g, "$1 × $2");
}

function parseMathTokens(rawText: string): Token[] {
  const text = preprocessMathString(rawText);
  const tokens: Token[] = [];
  let i = 0;

  while (i < text.length) {
    // 1. Detect square root: sqrt(...)
    if (text.startsWith("sqrt(", i)) {
      let open = 1;
      let j = i + 5;
      while (j < text.length && open > 0) {
        if (text[j] === "(") open++;
        else if (text[j] === ")") open--;
        j++;
      }
      tokens.push({ type: "sqrt", content: text.slice(i + 5, j - 1) });
      i = j;
      continue;
    }

    // 2. Detect exponent: ^(...) or ^[0-9a-zA-Z+-]+
    if (text[i] === "^") {
      if (text[i + 1] === "(") {
        const closeIdx = text.indexOf(")", i + 2);
        if (closeIdx !== -1) {
          tokens.push({ type: "sup", content: text.slice(i + 2, closeIdx) });
          i = closeIdx + 1;
          continue;
        }
      } else {
        const match = text.slice(i + 1).match(/^[0-9a-zA-Z+-]+/);
        if (match) {
          tokens.push({ type: "sup", content: match[0] });
          i += 1 + match[0].length;
          continue;
        }
      }
    }

    // 3. Detect mixed fraction: e.g. "2 1/3"
    const mixedMatch = text.slice(i).match(/^(\d+)\s+(\d+)\/(\d+)(?!\w)/);
    if (mixedMatch) {
      tokens.push({
        type: "mixed-fraction",
        whole: mixedMatch[1],
        num: mixedMatch[2],
        den: mixedMatch[3],
      });
      i += mixedMatch[0].length;
      continue;
    }

    // 4. Detect fraction with parenthesized numerator: e.g. "(3:2)/5" or "(3 : 2)/5"
    const parenFracMatch = text.slice(i).match(/^\(([^)]+)\)\s*\/\s*(\d+)(?!\w)/);
    if (parenFracMatch) {
      tokens.push({
        type: "fraction",
        num: `(${parenFracMatch[1]})`,
        den: parenFracMatch[2],
      });
      i += parenFracMatch[0].length;
      continue;
    }

    // 5. Detect standalone fraction: e.g. "13/16", "1/2"
    const fracMatch = text.slice(i).match(/^(\d+)\/(\d+)(?!\w)/);
    if (fracMatch) {
      tokens.push({
        type: "fraction",
        num: fracMatch[1],
        den: fracMatch[2],
      });
      i += fracMatch[0].length;
      continue;
    }

    // 5. Plain text segment
    const last = tokens[tokens.length - 1];
    if (!last || last.type !== "text") {
      tokens.push({ type: "text", content: text[i] });
    } else {
      last.content += text[i];
    }
    i++;
  }

  return tokens;
}

const tokenCache = new Map<string, Token[]>();

function parseMathTokensCached(rawText: string): Token[] {
  const cached = tokenCache.get(rawText);
  if (cached) return cached;
  const tokens = parseMathTokens(rawText);
  if (tokenCache.size < 1000) tokenCache.set(rawText, tokens);
  return tokens;
}

function renderTokens(tokens: Token[]): ReactNode[] {
  return tokens.map((token, index) => {
    switch (token.type) {
      case "sqrt":
        return (
          <span
            key={`sqrt-${index}`}
            className="inline-flex items-baseline font-mono text-[0.96em] whitespace-nowrap align-baseline"
          >
            <span className="text-[1.15em] font-sans font-normal leading-none select-none mr-0.5">
              √
            </span>
            <span className="border-t-[1.5px] border-current px-0.5 pt-px leading-tight">
              <MathText text={token.content} />
            </span>
          </span>
        );

      case "sup":
        return (
          <sup
            key={`sup-${index}`}
            className="text-[0.74em] font-medium leading-none ml-0.5"
          >
            <MathText text={token.content} />
          </sup>
        );

      case "fraction":
        return (
          <span
            key={`frac-${index}`}
            className="inline-flex flex-col items-center justify-center align-middle mx-0.5 text-[0.82em] leading-none font-sans select-text"
          >
            <span className="border-b-[1.5px] border-current px-0.5 pb-0.5 text-center">
              {token.num}
            </span>
            <span className="px-0.5 pt-0.5 text-center">{token.den}</span>
          </span>
        );

      case "mixed-fraction":
        return (
          <span
            key={`mixed-${index}`}
            className="inline-flex items-center align-middle mx-0.5 text-[0.98em]"
          >
            <span className="mr-0.5">{token.whole}</span>
            <span className="inline-flex flex-col items-center justify-center text-[0.82em] leading-none font-sans select-text">
              <span className="border-b-[1.5px] border-current px-0.5 pb-0.5 text-center">
                {token.num}
              </span>
              <span className="px-0.5 pt-0.5 text-center">{token.den}</span>
            </span>
          </span>
        );

      case "text":
      default:
        return <span key={`txt-${index}`}>{token.content}</span>;
    }
  });
}

function renderLatexOrText(textSegment: string, keyPrefix: string): ReactNode {
  // Check if string contains LaTeX delimiter: $$...$$ or $...$
  const latexRegex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = latexRegex.exec(textSegment)) !== null) {
    // Non-math text before match
    if (match.index > lastIndex) {
      const plain = textSegment.slice(lastIndex, match.index);
      parts.push(
        <span key={`${keyPrefix}-plain-${lastIndex}`}>
          {renderTokens(parseMathTokensCached(plain))}
        </span>
      );
    }

    const matchedRaw = match[0];
    const isBlock = matchedRaw.startsWith("$$") && matchedRaw.endsWith("$$");
    const formula = isBlock
      ? matchedRaw.slice(2, -2).trim()
      : matchedRaw.slice(1, -1).trim();

    try {
      const html = katex.renderToString(formula, {
        throwOnError: false,
        displayMode: isBlock,
      });

      parts.push(
        <span
          key={`${keyPrefix}-katex-${match.index}`}
          className={
            isBlock
              ? "block my-1.5 text-center overflow-x-auto py-0.5"
              : "inline-block align-baseline mx-0.5"
          }
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      // Fallback in case KaTeX fails unexpectedly
      parts.push(
        <span key={`${keyPrefix}-err-${match.index}`} className="font-mono text-xs">
          {matchedRaw}
        </span>
      );
    }

    lastIndex = match.index + matchedRaw.length;
  }

  // Remaining text after last match
  if (lastIndex < textSegment.length) {
    const trailing = textSegment.slice(lastIndex);
    parts.push(
      <span key={`${keyPrefix}-plain-end`}>
        {renderTokens(parseMathTokensCached(trailing))}
      </span>
    );
  }

  return parts.length > 0 ? parts : null;
}

function renderLine(line: string, lineKey: string, isMultiline: boolean): ReactNode {
  const trimmed = line.trim();
  if (!trimmed) {
    return isMultiline ? <span key={lineKey} className="block h-2" /> : null;
  }

  // Markdown image syntax: ![alt](url)
  const mdImgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
  if (mdImgMatch) {
    const alt = mdImgMatch[1] || "Gambar Soal";
    const src = mdImgMatch[2];
    return (
      <span key={lineKey} className="block my-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-h-52 sm:max-h-60 w-auto max-w-full object-contain rounded border border-neutral-200 bg-white p-2 shadow-sm"
          loading="lazy"
        />
      </span>
    );
  }

  // [img] prefix on a line
  if (trimmed.startsWith("[img]")) {
    const src = trimmed.slice(5).trim();
    return (
      <span key={lineKey} className={isMultiline ? "block my-2.5" : "inline-flex items-center justify-center p-0.5"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Gambar"
          className={
            isMultiline
              ? "max-h-52 sm:max-h-60 w-auto max-w-full object-contain rounded border border-neutral-200 bg-white p-2 shadow-sm"
              : "max-h-16 sm:max-h-20 w-auto object-contain rounded bg-white p-0.5"
          }
          loading="lazy"
        />
      </span>
    );
  }

  if (!hasMathSyntax(line)) {
    return isMultiline ? (
      <span key={lineKey} className="block">
        {line}
      </span>
    ) : (
      line
    );
  }

  const rendered = renderLatexOrText(line, lineKey);
  return isMultiline ? (
    <span key={lineKey} className="block">
      {rendered}
    </span>
  ) : (
    rendered
  );
}

type TextBlock =
  | { type: "table"; lines: string[] }
  | { type: "line"; line: string };

function isSeparatorRow(line: string): boolean {
  return /^\|(\s*:?-+:?\s*\|)+$/.test(line.trim());
}

function parseRowCells(row: string): string[] {
  return row
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function parseBlocks(text: string): TextBlock[] {
  const rawLines = text.split("\n");
  const blocks: TextBlock[] = [];
  let tableLines: string[] = [];

  for (let i = 0; i < rawLines.length; i++) {
    const trimmed = rawLines[i].trim();
    const isTableRow = trimmed.startsWith("|") && trimmed.endsWith("|") && trimmed.length > 2;

    if (isTableRow) {
      tableLines.push(trimmed);
    } else {
      if (tableLines.length > 0) {
        blocks.push({ type: "table", lines: tableLines });
        tableLines = [];
      }
      blocks.push({ type: "line", line: rawLines[i] });
    }
  }

  if (tableLines.length > 0) {
    blocks.push({ type: "table", lines: tableLines });
  }

  return blocks;
}

function renderTable(tableLines: string[], blockKey: string): ReactNode {
  if (tableLines.length === 0) return null;

  const hasHeader = tableLines.length > 1 && isSeparatorRow(tableLines[1]);
  const headerCells = hasHeader ? parseRowCells(tableLines[0]) : [];
  const bodyRows = (hasHeader ? tableLines.slice(2) : tableLines)
    .filter((line) => !isSeparatorRow(line))
    .map(parseRowCells);

  if (hasHeader) {
    return (
      <div key={blockKey} className="my-3 overflow-x-auto">
        <table
          className="border-collapse border-2 border-solid border-black text-center text-sm sm:text-base min-w-[220px]"
          style={{ border: "2px solid #000000", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              {headerCells.map((cell, idx) => (
                <th
                  key={idx}
                  className="border-2 border-solid border-black px-6 py-2.5 font-sans font-bold text-sm sm:text-base tracking-wide text-black whitespace-nowrap"
                  style={{ border: "2px solid #000000" }}
                >
                  {renderLine(cell, `th-${idx}`, false)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="border-2 border-solid border-black px-6 py-2.5 font-sans font-bold text-base sm:text-lg text-black"
                    style={{ border: "2px solid #000000" }}
                  >
                    {renderLine(cell, `td-${rIdx}-${cIdx}`, false)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div key={blockKey} className="my-3 overflow-x-auto">
      <table
        className="border-collapse border-2 border-solid border-black text-center"
        style={{ border: "2px solid #000000", borderCollapse: "collapse" }}
      >
        <tbody>
          {bodyRows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className="border-2 border-solid border-black px-6 py-3 min-w-[60px] text-center font-sans font-bold text-base sm:text-lg text-black"
                  style={{ border: "2px solid #000000" }}
                >
                  {renderLine(cell, `mtrx-${rIdx}-${cIdx}`, false)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MathTextComponent({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  if (!text) return null;

  // Inline SVG: prefix [svg] bypasses all text parsing and renders the SVG directly
  if (text.startsWith("[svg]")) {
    const svgContent = text.slice(5);
    return (
      <span
        className={`block w-full overflow-x-auto ${className}`}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    );
  }

  // Standalone Image: prefix [img]
  if (text.startsWith("[img]")) {
    const src = text.slice(5).trim();
    return (
      <span className={`inline-flex items-center justify-center p-0.5 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Pilihan Jawaban"
          className="max-h-16 sm:max-h-20 w-auto object-contain rounded bg-white p-0.5"
          loading="lazy"
        />
      </span>
    );
  }

  if (!text.includes("\n")) {
    return (
      <span className={className}>
        {renderLine(text, "l0", false)}
      </span>
    );
  }

  const blocks = parseBlocks(text);
  return (
    <div className={className}>
      {blocks.map((block, blockIndex) => {
        if (block.type === "table") {
          return renderTable(block.lines, `tbl-${blockIndex}`);
        }
        return renderLine(block.line, `l-${blockIndex}`, true);
      })}
    </div>
  );
}

export const MathText = memo(MathTextComponent);
