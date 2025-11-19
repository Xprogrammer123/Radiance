"use client";
import React from "react";
import { createPortal } from "react-dom";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Image from "next/image";
export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed left-1/2 top-8 -translate-x-1/2 w-1/2 z-50 rounded-2xl border border-white/20 shadow-lg",
        "bg-white/10 backdrop-blur-lg transition-all duration-300",
        scrolled && "shadow-xl bg-white/20"
      )}
    >
      <nav className="flex h-14 items-center justify-between px-6">
        <a className="rounded-md p-2 hover:bg-accent/20" href="#">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </a>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#signin"
            className="text-sm font-bold text-white hover:text-accent transition-colors"
          >
            Home
          </a>
          <a
            href="#get-started"
            className="text-sm font-bold text-white hover:text-accent transition-colors"
          >
           Newsroom
          </a>
        </div> 

        <Button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="outline"
        >
          <MenuToggleIcon className="size-5" duration={300} open={open} />
        </Button>
      </nav>

      <MobileMenu className="flex flex-col justify-between gap-2" open={open}>
        <div className="grid gap-y-2">{/* Add mobile links here */}</div>
        <div className="flex flex-col gap-2">
          <Button className="w-full bg-transparent" variant="outline">
            Sign In
          </Button>
          <Button className="w-full">Get Started</Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/50",
        "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden"
      )}
      id="mobile-menu"
    >
      <div
        className={cn(
          "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
          "size-full p-4",
          className
        )}
        data-slot={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
