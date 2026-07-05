import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Triple Capital Tchad — Conseil en finance climatique",
    template: "%s | Triple Capital Tchad",
  },
  description:
    "Cabinet de conseil stratégique et d'ingénierie de projets à N'Djamena. Structuration et financement de projets climatiques et de développement durable au Sahel.",
  keywords: [
    "finance climatique",
    "développement durable",
    "Tchad",
    "Sahel",
    "conseil stratégique",
    "ingénierie de projets",
    "bailleurs internationaux",
  ],
  authors: [{ name: "Triple Capital Tchad SARL" }],
  metadataBase: new URL("https://triplecapitaltchad.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}