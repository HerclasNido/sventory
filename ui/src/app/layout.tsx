import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const mainFont = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Sventory",
    description: "Open source inventory management system",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${mainFont.className} antialiased bg-background text-foreground dark`}
            >
                {children}
            </body>
        </html>
    );
}
