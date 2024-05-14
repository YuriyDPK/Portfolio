import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Y.P. | Главная",
  description: "Главная страница сайта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white min-h-screen">{children}</div>
      </body>
    </html>
  );
}
