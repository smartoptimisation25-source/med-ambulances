import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="bg-white py-14 md:py-32">
      <Container>
        <SectionMotion className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
            Le bon véhicule pour votre trajet vers Strasbourg.
          </h2>
        </SectionMotion>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {siteData.services.map((service, index) => (
            <SectionMotion key={service.title} delay={index * 0.08}>
              <Card className="group overflow-hidden transition-colors duration-300 hover:border-accent/25">
                <div className="relative aspect-[4/3] overflow-hidden bg-alternate sm:aspect-[16/9]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover saturate-[0.82] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-6 md:p-9">
                  <h3 className="text-[28px] font-semibold tracking-[-0.02em] text-ink md:text-[30px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.5] text-muted md:mt-4 md:text-[18px]">
                    {service.text}
                  </p>
                </div>
              </Card>
            </SectionMotion>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-[14px] leading-6 text-muted">
          Remboursement 65 % ou 100 % (ALD, maternité) sur prescription médicale.
        </p>
      </Container>
    </section>
  );
}
