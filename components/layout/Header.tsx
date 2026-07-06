"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "./NavLink";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const tHeader = useTranslations("header");
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fermer le menu au changement de route ou touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/${locale === "fr" ? "a-propos" : "about"}`, label: t("about") },
    { href: `/${locale}/${locale === "fr" ? "expertises" : "expertise"}`, label: t("expertise") },
    { href: `/${locale}/${locale === "fr" ? "projets" : "projects"}`, label: t("projects") },
    { href: `/${locale}/${locale === "fr" ? "publications" : "insights"}`, label: t("insights") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container-tct flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          aria-label="Triple Capital Tchad — Accueil"
          className="flex items-center"
        >
          <Logo variant="mark" height={40} />
        </Link>

        {/* Navigation desktop */}
        <nav
          aria-label={t("home")}
          className="hidden lg:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} className="text-sm">
              {item.label}
            </NavLink>
          ))}
          <div className="pl-4 border-l" style={{ borderColor: "var(--color-border)" }}>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Bouton burger mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? tHeader("closeMenu") : tHeader("toggleMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 -mr-2 cursor-pointer"
          style={{ color: "var(--color-text)" }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute inset-x-0 top-full border-t"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <nav
            aria-label={t("home")}
            className="container-tct flex flex-col py-6 gap-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg py-2"
              >
                {item.label}
              </NavLink>
            ))}
            <div
              className="pt-4 mt-2 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}