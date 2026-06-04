import { Container } from "@/components/ui/Container";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="bg-alternate py-14 md:py-32">
      <Container>
        <SectionMotion className="max-w-3xl">
          <h2 className="text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
            Un rendez-vous à Strasbourg. Une prise en charge dans le Haut-Rhin.
          </h2>
        </SectionMotion>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {siteData.steps.map((step, index) => (
            <SectionMotion
              key={step.title}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-6 transition-colors duration-300 hover:border-accent/25 md:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-4 top-2 text-[76px] font-semibold leading-none tracking-[-0.04em] text-ink/[0.06] md:right-5 md:text-[92px]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative mt-10 text-[22px] font-semibold tracking-[-0.02em] text-ink transition-transform duration-300 group-hover:translate-x-1 md:mt-14 md:text-[24px]">
                {step.title}
              </h3>
              <p className="relative mt-3 text-[16px] leading-[1.5] text-muted md:text-[17px]">{step.text}</p>
            </SectionMotion>
          ))}
        </div>
      </Container>
    </section>
  );
}
