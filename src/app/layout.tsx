import type { Metadata } from "next";
import '@fontsource-variable/nunito';
import "./globals.css";

export const metadata: Metadata = {
  title: "Conor Smyth",
  description: "A personal portfolio / resume site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
