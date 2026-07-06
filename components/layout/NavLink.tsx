"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export function NavLink({ href, children, onClick, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-colors ${className}`}
      style={{
        color: isActive ? "var(--color-primary)" : "var(--color-text)",
        fontWeight: isActive ? 600 : 500,
      }}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}