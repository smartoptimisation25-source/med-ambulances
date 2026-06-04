"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Building2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteData } from "@/lib/site-data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[76vh] items-center overflow-hidden bg-white pb-14 pt-24 md:min-h-[90vh] md:pb-0 md:pt-20"
      aria-labelledby="hero-title"
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(circle_at_50%_12%,rgba(0,113,227,0.13),transparent_34rem)]"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      <motion.div
        className="soft-grid pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
      />
      <Container>
        <motion.div
          className="relative mx-auto flex max-w-5xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          <motion.h1
            id="hero-title"
            className="max-w-5xl text-balance text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[72px]"
            variants={fadeIn}
          >
            Du Haut-Rhin aux hôpitaux de Strasbourg, sans stress.
          </motion.h1>

          <motion.p
            className="mt-5 max-w-3xl text-balance text-[17px] font-normal leading-[1.5] text-muted sm:mt-6 sm:text-[19px]"
            variants={fadeIn}
          >
            Ambulance et VSL depuis votre ville ou village du 68 vers
            les hôpitaux, cliniques et centres spécialisés de Strasbourg.
          </motion.p>

          <motion.div
            className="mt-7 flex w-full max-w-sm flex-col items-start gap-3 rounded-2xl border border-border/70 bg-white/78 px-5 py-4 text-[14px] font-medium text-ink backdrop-blur-xl sm:mt-8 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:rounded-full sm:px-6 sm:py-3"
            variants={fadeIn}
            aria-label="Trajets du Haut-Rhin vers les hôpitaux de Strasbourg"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={2} />
              Villes et villages du 68
            </span>
            <ArrowRight
              aria-hidden="true"
              className="hidden h-4 w-4 text-muted sm:block"
              strokeWidth={2}
            />
            <span className="inline-flex items-center gap-2">
              <Building2 aria-hidden="true" className="h-4 w-4 text-accent" strokeWidth={2} />
              Établissements de Strasbourg
            </span>
          </motion.div>

          <motion.div
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row"
            variants={fadeIn}
          >
            <Button asChild size="lg" className="w-full text-center sm:w-auto">
              <a href={siteData.phoneHref}>
                <Phone aria-hidden="true" size={18} strokeWidth={2} />
                <span>Appeler maintenant</span>
                <span className="hidden sm:inline">— {siteData.phoneDisplay}</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto">
              <a href="#services">
                Découvrir nos services
                <ArrowDown aria-hidden="true" size={18} strokeWidth={2} />
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="mt-7 max-w-2xl text-balance text-[14px] font-normal leading-6 text-muted sm:text-[15px]"
            variants={fadeIn}
          >
            Petites communes desservies · Rendez-vous strasbourgeois · Retour
            organisé si nécessaire
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
