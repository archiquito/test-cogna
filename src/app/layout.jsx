import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Teste Cogna",
  description: "Teste Cogna - 2025",
  keywords: ["Next.js", "React", "JavaScript"],
  publisher: "Cogna",
  creator: "André Chiquito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
