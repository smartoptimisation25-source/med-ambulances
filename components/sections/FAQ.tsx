"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-alternate py-14 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionMotion>
            <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-accent">
              Questions fréquentes
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
              Avant d'appeler, les réponses essentielles.
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-[1.5] text-muted md:mt-6 md:text-[18px]">
              Prescription, remboursement, attente sur place, retour à domicile :
              voici ce que les patients demandent le plus souvent.
            </p>
          </SectionMotion>

          <SectionMotion className="rounded-2xl border border-border/70 bg-white">
            {siteData.faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={cn(index > 0 && "border-t border-border/70")}
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent md:gap-5 md:px-7 md:py-6"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-[17px] font-medium leading-[1.35] tracking-[-0.01em] text-ink md:text-[18px]">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-180 text-accent"
                      )}
                      strokeWidth={1.8}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 px-5 pb-6 text-[15px] leading-[1.6] text-muted md:px-7 md:text-[16px]">
                          {item.answer.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </SectionMotion>
        </div>
      </Container>
    </section>
  );
}
