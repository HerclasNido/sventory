import Link from "next/link";
import Image from "next/image";
import { Audiowide } from "next/font/google";
import { IconBuilding, IconUser, IconLogout } from "@tabler/icons-react";
import { getActiveUser } from "@/server/actions/auth/getActiveUser";
import { getActiveOrganization } from "@/server/actions/auth/getActiveOrganization";
import { logout } from "@/server/actions/auth/logout";
import { Button } from "@/components/ui/button";

const titleFont = Audiowide({
    subsets: ["latin"],
    weight: "400",
});

export async function Header() {
    const activeUser = await getActiveUser();
    const activeOrganization = await getActiveOrganization();
    const navLinks = [
        {
            href: "/organization",
            icon: IconBuilding,
            text: activeOrganization?.name,
        },
        {
            href: "/user",
            icon: IconUser,
            text: `${activeUser?.firstName} ${activeUser?.lastName}`,
        },
    ];
    return (
        <header className="w-full h-16 flex justify-between items-center shadow-md">
            <Link
                href="/"
                className={`flex items-center text-xl h-16 px-6 gap-4 text-orange-500 ${titleFont.className}`}
            >
                <Image
                    alt="Sventory Logo"
                    src="/sventory-logo.svg"
                    width={60}
                    height={0}
                />
                SVENTORY
            </Link>
            <div className="h-full flex justify-end items-center">
                {navLinks.map((link) => {
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={"flex items-center gap-2 h-full px-6 cursor-pointer"}
                        >
                            <link.icon />
                            {link.text}
                        </Link>
                    );
                })}
                <Button onClick={logout} variant="ghost" className="h-full px-6 [&_svg]:size-6">
                    <IconLogout size={24} />
                    <span className="hidden">Logout</span>
                </Button>
            </div>
        </header>
    );
}
