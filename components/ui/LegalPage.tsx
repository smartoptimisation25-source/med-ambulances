import type { ReactNode } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt?: string;
  children: ReactNode;
};

export function LegalPage({
  title,
  description,
  updatedAt = "4 juin 2026",
  children
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main className="bg-white pt-24 md:pt-28">
        <Container>
          <div className="mx-auto max-w-4xl pb-16 pt-8 md:pb-24 md:pt-14">
            <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-accent">
              Informations légales
            </p>
            <h1 className="mt-4 text-balance text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-ink md:text-[56px]">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-[18px] leading-[1.55] text-muted">
              {description}
            </p>
            <p className="mt-4 text-[14px] leading-6 text-muted">
              Dernière mise à jour : {updatedAt}
            </p>

            <div className="mt-12 space-y-10 border-t border-border pt-10 text-[16px] leading-[1.65] text-muted">
              {children}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

