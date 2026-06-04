import { Container } from "@/components/ui/Container";
import { CityGrid } from "@/components/sections/CityGrid";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

export function Zone() {
  return (
    <section
      id="zone"
      className="relative overflow-hidden bg-blacksoft py-14 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,113,227,0.24),transparent_34rem)]"
        aria-hidden="true"
      />
      <div
        className="soft-grid pointer-events-none absolute inset-0 opacity-[0.18] invert"
        aria-hidden="true"
      />
      <Container>
        <SectionMotion className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[48px]">
            Villes et villages du Haut-Rhin. Tous établissements à Strasbourg.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.5] text-white/64 md:text-[18px]">
            Vous habitez une petite commune du 68 ? Appelez-nous, le trajet se
            prépare ensemble.
          </p>
        </SectionMotion>

        <CityGrid cities={siteData.cities} />
      </Container>
    </section>
  );
}
