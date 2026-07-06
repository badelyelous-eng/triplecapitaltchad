import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container-tct text-center">
        <span className="label-tct block mb-6">{t("label")}</span>

        <h1 className="mb-6">{t("title")}</h1>

        <p
          className="max-w-2xl mx-auto mb-8"
          style={{ color: "var(--color-text)" }}
        >
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-surface)",
            }}
          >
            {t("ctaPrimary")}
          </button>

          <button
            className="px-8 py-4 rounded-lg font-semibold transition-opacity hover:opacity-90 cursor-pointer"
            style={{
              border: "1.5px solid var(--color-primary)",
              color: "var(--color-primary)",
              backgroundColor: "transparent",
            }}
          >
            {t("ctaSecondary")}
          </button>
        </div>
      </div>
    </main>
  );
}