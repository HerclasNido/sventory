import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { MainNav } from "@/components/MainNav";
import { Toaster } from "@/components/ui/toaster";

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
        <>
            <Header />
            <div className="flex w-full h-full">
                <MainNav />
                <main className="w-full h-full py-6 px-12">{children}</main>
                <Toaster />
            </div>
        </>
    );
}
