import type { Question } from "./types";

/**
 * Extracts all unique image URLs from questions (prompt, choices, and explanation).
 */
export function extractQuestionImageUrls(questions: Question[]): string[] {
  const urls = new Set<string>();

  for (const question of questions) {
    const textSources = [
      question.prompt,
      question.explanation,
      ...question.choices.map((c) => c.label),
    ];

    for (const text of textSources) {
      if (!text) continue;

      // 1. Markdown images: ![alt](url)
      const mdRegex = /!\[.*?\]\((\/?[^\s'")]+)\)/g;
      let match: RegExpExecArray | null;
      while ((match = mdRegex.exec(text)) !== null) {
        if (match[1]) urls.add(match[1]);
      }

      // 2. [img] tags: [img]/path/to/img.png
      const imgTagRegex = /\[img\](\/?[^\s\n\r"']+)/g;
      while ((match = imgTagRegex.exec(text)) !== null) {
        if (match[1]) urls.add(match[1]);
      }

      // 3. Direct relative paths to /tryout/ or /images/
      const directRegex = /(\/(?:tryout|images)\/[^\s"')\],]+\.(?:png|jpg|jpeg|webp|svg|gif))/gi;
      while ((match = directRegex.exec(text)) !== null) {
        if (match[1]) urls.add(match[1]);
      }
    }
  }

  return Array.from(urls);
}

/**
 * Preloads a single image and resolves upon completion or error (never rejects).
 */
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }
    const img = new Image();
    img.src = url;
    if (img.complete) {
      resolve();
      return;
    }
    img.onload = () => resolve();
    img.onerror = () => resolve();
  });
}

/**
 * Preloads all images found in the question list with a safety timeout (default 15s).
 */
export async function preloadQuestionAssets(
  questions: Question[],
  timeoutMs = 15000
): Promise<void> {
  const urls = extractQuestionImageUrls(questions);
  if (urls.length === 0) return;

  const loadAll = Promise.all(urls.map(preloadImage));
  const timeout = new Promise<void>((resolve) => {
    setTimeout(resolve, timeoutMs);
  });

  await Promise.race([loadAll, timeout]);
}
