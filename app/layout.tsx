import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mağaza",
  description: "Kalite tesadüf değildir.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          KALİTE TESADÜF DEĞİLDİR. Mağazamızda kaliteli ürünler bulunmaktadır.
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
