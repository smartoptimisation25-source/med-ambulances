"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type CityGridProps = {
  cities: readonly string[];
};

export function CityGrid({ cities }: CityGridProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 md:mt-14 md:grid-cols-4"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.055
          }
        }
      }}
    >
      {cities.map((city, index) => (
        <motion.div
          key={city}
          className={cn(
            "group relative overflow-hidden rounded-full border border-white/12 bg-white/[0.055] px-4 py-3 text-center text-[15px] text-white/88 backdrop-blur-sm",
            "transition-colors duration-300 hover:border-white/28 hover:bg-white/[0.09] hover:text-white"
          )}
          variants={{
            hidden: { opacity: 0, y: 18, scale: 0.96 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.48, ease: "easeOut" }
            }
          }}
        >
          <motion.span
            className="absolute inset-y-0 left-0 w-px bg-white/30"
            initial={false}
            animate={{ opacity: [0.2, 0.65, 0.2] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: index * 0.12,
              ease: "easeInOut"
            }}
            aria-hidden="true"
          />
          <span className="relative inline-flex items-center gap-2">
            <MapPin
              aria-hidden="true"
              className="h-3.5 w-3.5 text-white/42 transition-colors group-hover:text-white/72"
              strokeWidth={1.8}
            />
            {city}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
