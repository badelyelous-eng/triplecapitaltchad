"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale = locale === "fr" ? "en" : "fr";

  const switchLocale = () => {
    const segments = pathname.split("/");
    segments[1] = otherLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      disabled={isPending}
      aria-label={t("label")}
      className="text-sm font-medium transition-opacity hover:opacity-70 cursor-pointer disabled:opacity-50"
      style={{ color: "var(--color-text-secondary)" }}
    >
      <span
        style={{
          color:
            locale === "fr" ? "var(--color-primary)" : "var(--color-text-secondary)",
          fontWeight: locale === "fr" ? 600 : 400,
        }}
      >
        FR
      </span>
      <span className="mx-2" style={{ color: "var(--color-border)" }}>
        |
      </span>
      <span
        style={{
          color:
            locale === "en" ? "var(--color-primary)" : "var(--color-text-secondary)",
          fontWeight: locale === "en" ? 600 : 400,
        }}
      >
        EN
      </span>
    </button>
  );
}