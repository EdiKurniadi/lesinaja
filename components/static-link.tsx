import type { AnchorHTMLAttributes } from "react";
import { toStaticPath } from "@/lib/static-path";

type StaticLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export function StaticLink({ href, ...props }: StaticLinkProps) {
  return <a href={toStaticPath(href)} {...props} />;
}
