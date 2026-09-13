export function toStaticPath(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const suffixIndex = href.search(/[?#]/);
  const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : href.slice(suffixIndex);

  if (pathname === "/" || pathname.endsWith("/") || /\.[^/]+$/.test(pathname)) {
    return href;
  }

  return `${pathname}/${suffix}`;
}
