import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valtech Front Challenge",
  description: "Valtech react front challenge",
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
          <h1>Valtech</h1>
        </header>
        {children}
        <footer>
          <p>The experience innovation company</p>
        </footer>
      </body>
    </html>
  );
}
