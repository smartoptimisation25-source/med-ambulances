"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/site-data";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Zone", href: "#zone" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const zoneSection = document.getElementById("zone");
      if (!zoneSection) {
        setIsOverDarkSection(false);
        return;
      }

      const headerHeight = window.innerWidth >= 768 ? 64 : 56;
      const zoneRect = zoneSection.getBoundingClientRect();
      setIsOverDarkSection(zoneRect.top <= headerHeight && zoneRect.bottom > headerHeight);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isOverDarkSection
          ? "border-white/10 bg-blacksoft/78 text-white backdrop-blur-xl"
          : isScrolled
          ? "border-border/70 bg-white/82 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-14 items-center justify-between md:h-16">
        <a
          href="#top"
          className={cn(
            "rounded-full text-[20px] font-semibold leading-none tracking-[-0.04em] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-[24px]",
            isOverDarkSection ? "text-white" : "text-ink"
          )}
          aria-label="Retour en haut de page Med Ambulances"
        >
          Med Ambulances
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-[14px] font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                isOverDarkSection
                  ? "text-white/68 hover:text-white"
                  : "text-muted hover:text-ink"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href={siteData.phoneHref}>{siteData.phoneDisplay}</a>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden",
            isOverDarkSection
              ? "text-white hover:bg-white/10"
              : "text-ink hover:bg-blacksoft/[0.04]"
          )}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-border bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-2 py-3 text-[17px] text-ink"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-3 w-full">
              <a href={siteData.phoneHref}>{siteData.phoneDisplay}</a>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
