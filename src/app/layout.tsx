import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio de Gabriel Sales",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark" >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
