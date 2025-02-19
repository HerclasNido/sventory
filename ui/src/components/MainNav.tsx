'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    IconBuildingWarehouse,
    IconCirclesRelation,
    IconDashboard,
    IconNotes,
    IconPackages,
    IconPackage,
    IconCategory2,
    IconSettings,
} from "@tabler/icons-react";

const navLinks = [
    {
        href: "/",
        icon: IconDashboard,
        text: "Dashboard",
    },
    {
        href: "/items",
        icon: IconPackage,
        text: "Items",
    },
    {
        href: "/categories",
        icon: IconCategory2,
        text: "Categories",
    },
    {
        href: "/locations",
        icon: IconPackages,
        text: "Locations",
    },
    {
        href: "/places",
        icon: IconBuildingWarehouse,
        text: "Places",
    },
    {
        href: "/reports",
        icon: IconNotes,
        text: "Reports",
    },
    {
        href: "/integrations",
        icon: IconCirclesRelation,
        text: "Integrations",
    },
    {
        href: "/settings",
        icon: IconSettings,
        text: "Settings",
    },
];

export function MainNav() {
    const pathname = usePathname();
    return (
        <nav
            className="min-h-[calc(100vh-48px)]"
        >
            {navLinks.map((link) => {
                const isActive =
                    pathname === link.href ||
                    (pathname.startsWith(link.href) && link.href !== "/");
                return (
                    <Link
                        href={link.href}
                        key={link.href}
                        className={`flex gap-2 items-center px-6 py-4 cursor-pointer text-nowrap rounded ${
                            isActive ? "bg-accent" : ""
                        }`}
                    >
                        <link.icon />
                        {link.text}
                    </Link>
                );
            })}
        </nav>
    );
}
