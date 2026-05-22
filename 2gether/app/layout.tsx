import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Watch Party",
  description: "Watch movies together online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
