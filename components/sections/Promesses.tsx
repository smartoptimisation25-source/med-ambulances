import { Building2, Home, Route } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

const icons = [Home, Route, Building2];

export function Promesses() {
  return (
    <section id="promesses" className="overflow-hidden bg-alternate py-14 md:py-28">
      <Container>
        <SectionMotion className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-accent">
              Trajets spécialisés 68 → Strasbourg
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
              Un trajet médical longue distance, pensé comme un itinéraire.
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-[1.5] text-muted md:mt-6 md:text-[18px]">
              L'essentiel n'est pas seulement de rouler. C'est de partir au bon
              moment, avec le bon véhicule, puis d'être accompagné jusqu'au bon
              service à Strasbourg.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-[1.38rem] top-8 h-[calc(100%-4rem)] w-px bg-border md:left-8 md:right-8 md:top-[3.15rem] md:h-px md:w-auto"
              aria-hidden="true"
            />
            <div className="grid gap-7 md:grid-cols-3 md:gap-6">
          {siteData.promises.map((promise, index) => {
            const Icon = icons[index];

            return (
              <SectionMotion
                key={promise.title}
                delay={index * 0.08}
                    className="group relative grid grid-cols-[3.25rem_1fr] gap-4 md:block"
              >
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent md:h-16 md:w-16">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 md:h-6 md:w-6"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="pt-1 md:pt-8">
                      <p className="text-[13px] font-medium text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-[22px] font-semibold tracking-[-0.02em] text-ink md:mt-3 md:text-[24px]">
                        {promise.title}
                      </h3>
                      <p className="mt-2 text-[16px] leading-[1.5] text-muted md:mt-3 md:text-[17px]">{promise.text}</p>
                    </div>
              </SectionMotion>
            );
          })}
            </div>
          </div>
        </SectionMotion>
        <SectionMotion className="mt-10 border-t border-border/70 pt-6 text-left text-[15px] leading-6 text-muted md:mt-14 md:text-center">
          De Mulhouse, Colmar, Saint-Louis, Altkirch, Thann ou d'une petite
          commune du 68, l'objectif reste le même : rejoindre Strasbourg dans
          les meilleures conditions.
        </SectionMotion>
      </Container>
    </section>
  );
}
