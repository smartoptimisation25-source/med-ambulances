import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-alternate py-14 md:py-32">
      <Container>
        <SectionMotion className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="pointer-events-none absolute inset-x-10 -top-10 h-40 rounded-full bg-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
            Un rendez-vous à Strasbourg depuis le Haut-Rhin ?
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.5] text-muted md:text-[18px]">
            Appelez-nous pour organiser le départ, l'arrivée au bon service et le
            retour si besoin.
          </p>
          <Button asChild size="lg" className="mt-8 h-[52px] w-full px-8 text-[17px] sm:w-auto md:mt-9 md:h-14 md:text-[18px]">
            <a href={siteData.phoneHref}>
              <Phone aria-hidden="true" size={20} />
              {siteData.phoneDisplay}
            </a>
          </Button>
          <p className="mt-5 text-[14px] leading-6 text-muted">
            7j/7 — 24h/24 · Un humain vous répond.
          </p>
        </SectionMotion>
      </Container>
    </section>
  );
}
