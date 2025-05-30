import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import QueryProvider from "@/components/QueryProvider";
import { Toaster } from "../components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yogesh Arya",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <main className="text-lg text-gray-600 dark:text-gray-300 p-5 md:px-20 mt-8 mx-auto max-w-4xl">
            <QueryProvider>
              {children}
              <Toaster position="bottom-center" richColors />
            </QueryProvider>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
