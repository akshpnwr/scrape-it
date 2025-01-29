"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "/credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

export function DesktopSidebar() {
  const pathname = usePathname();
  return (
    <div className="relative hidden h-screen w-full min-w-[280px] max-w-[280px] border-separate overflow-hidden border-r-2 bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground md:block">
      <div className="flex border-separate items-center justify-center gap-2 border-b-[1px] p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col gap-1 p-2">
        {routes.map((route) => (
          <Link
            className={buttonVariants({
              variant:
                pathname === route.href ? "sidebarActiveItem" : "sidebarItem",
            })}
            key={route.href}
            href={route.href}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[400px] space-y-4 sm:w-[540px]"
          >
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  className={buttonVariants({
                    variant:
                      pathname === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setOpen((prev) => !prev)}
                  key={route.href}
                  href={route.href}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
