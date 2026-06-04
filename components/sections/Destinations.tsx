import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

export function Destinations() {
  return (
    <section id="destinations" className="bg-white py-14 md:py-32">
      <Container>
        <SectionMotion className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
            Strasbourg sans hésitation, quel que soit l'établissement.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[17px] leading-[1.5] text-muted md:text-[18px]">
            Hautepierre, NHC, Rhéna, Sainte-Anne et les autres structures de
            soins strasbourgeoises : ces cartes sont des repères, pas une limite.
          </p>
        </SectionMotion>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {siteData.hospitals.map((hospital, index) => (
            <SectionMotion key={hospital.name} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-border/70 bg-white transition-colors duration-300 hover:border-accent/25">
                <div className="relative aspect-[4/3] bg-alternate sm:aspect-[16/10]">
                  <Image
                    src={hospital.image}
                    alt={hospital.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover saturate-[0.82] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-ink">
                    {hospital.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-muted">{hospital.specialties}</p>
                </div>
              </article>
            </SectionMotion>
          ))}
        </div>
      </Container>
    </section>
  );
}
