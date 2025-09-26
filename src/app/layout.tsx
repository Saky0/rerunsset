import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/organisms/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rerunsset • Portfólio",
  description: "Portfólio de Davi Mattos (Rerunsset)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 25%, #ECF7FF 51%, #F9FBFF 76%, #EAEFFF 100%)",
        }}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
