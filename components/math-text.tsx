"use client";

import { type ReactNode } from "react";
import katex from "katex";


type Token =
  | { type: "text"; content: string }
  | { type: "sqrt"; content: string }
  | { type: "sup"; content: string }
  | { type: "fraction"; num: string; den: string }
  | { type: "mixed-fraction"; whole: string; num: string; den: string };

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

    // 4. Detect standalone fraction: e.g. "13/16", "1/2"
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
          {renderTokens(parseMathTokens(plain))}
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
        {renderTokens(parseMathTokens(trailing))}
      </span>
    );
  }

  return parts.length > 0 ? parts : null;
}

export function MathText({
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

  const lines = text.split("\n");
  if (lines.length === 1) {
    return (
      <span className={className}>
        {renderLatexOrText(text, "l0")}
      </span>
    );
  }

  return (
    <span className={className}>
      {lines.map((line, lineIndex) => (
        <span key={`line-${lineIndex}`} className="block">
          {renderLatexOrText(line, `l${lineIndex}`)}
        </span>
      ))}
    </span>
  );
}
