"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}`, label: tNav("home") },
    {
      href: `/${locale}/${locale === "fr" ? "a-propos" : "about"}`,
      label: tNav("about"),
    },
    {
      href: `/${locale}/${locale === "fr" ? "expertises" : "expertise"}`,
      label: tNav("expertise"),
    },
    {
      href: `/${locale}/${locale === "fr" ? "projets" : "projects"}`,
      label: tNav("projects"),
    },
    {
      href: `/${locale}/${locale === "fr" ? "publications" : "insights"}`,
      label: tNav("insights"),
    },
    { href: `/${locale}/contact`, label: tNav("contact") },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--color-dark)",
        color: "var(--color-background)",
      }}
    >
      <div className="container-tct py-12 md:py-16">
        <div
          className="w-16 h-0.5 mb-8"
          style={{ backgroundColor: "var(--color-accent)" }}
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Logo
              variant="mark"
              height={48}
              className="mb-4 invert brightness-0"
            />
            <p
              className="text-sm leading-relaxed max-w-sm"
              style={{ color: "var(--color-background)" }}
            >
              {t("tagline")}
            </p>
            
              href="https://www.linkedin.com/company/triple-capital-tchad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("linkedinLabel")}
              className="inline-flex items-center mt-6 p-2 -ml-2 rounded transition-opacity hover:opacity-70"
              style={{ color: "var(--color-background)" }}
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div>
            <h2
              className="text-xs font-medium uppercase tracking-wider mb-4"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {t("navTitle")}
            </h2>
            <nav aria-label={t("navTitle")}>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "var(--color-background)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2
              className="text-xs font-medium uppercase tracking-wider mb-4"
              style={{
                color: "var(--color-accent)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {t("contactTitle")}
            </h2>
            <address className="not-italic space-y-3 text-sm">
              <p style={{ color: "var(--color-background)" }}>{t("address")}</p>
              <p>
                
                  href="mailto:contact@triplecapitaltchad.com"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "var(--color-background)" }}
                >
                  contact@triplecapitaltchad.com
                </a>
              </p>
              <p>
                
                  href="tel:+23566320073"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "var(--color-background)" }}
                >
                  +235 66 32 00 73
                </a>
              </p>
            </address>
          </div>
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-xs"
          style={{ borderColor: "rgba(245, 241, 232, 0.15)" }}
        >
          <div style={{ color: "var(--color-background)", opacity: 0.7 }}>
            <p>{t("copyright")}</p>
            <p className="mt-1">{t("affiliation")}</p>
          </div>
          <p
            className="tracking-widest self-end md:self-auto"
            style={{ color: "var(--color-accent)" }}
          >
            {t("rccm")}
          </p>
        </div>
      </div>
    </footer>
  );
}