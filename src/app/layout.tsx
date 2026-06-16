import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rerunsset - Produtos digitais que geram resultados",
  description: "Portfolio de Davi Mattos, desenvolvedor web focado em design, performance, IA e produtos digitais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
