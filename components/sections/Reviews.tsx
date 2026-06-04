import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionMotion } from "@/components/sections/SectionMotion";
import { siteData } from "@/lib/site-data";

const avatarColors = [
  "bg-[#4285F4]",
  "bg-[#DB4437]",
  "bg-[#F4B400]",
  "bg-[#0F9D58]"
];

export function Reviews() {
  return (
    <section id="avis" className="bg-white py-16 md:py-32">
      <Container>
        <SectionMotion className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink md:text-[48px]">
            Des patients du Haut-Rhin accompagnés jusqu'à Strasbourg.
          </h2>
          <p className="mt-5 text-[18px] leading-[1.5] text-muted">
            Des retours simples sur les trajets longue distance vers les hôpitaux
            strasbourgeois.
          </p>
        </SectionMotion>

        <div className="mt-14 flex snap-x gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {siteData.reviews.map((review, index) => (
            <SectionMotion
              key={`${review.name}-${review.city}`}
              delay={(index % 3) * 0.06}
              className="group min-w-[calc(100vw-2.5rem)] snap-start rounded-2xl border border-border/70 bg-white p-6 transition-colors duration-300 hover:border-accent/25 sm:min-w-[310px] lg:min-w-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`${avatarColors[index % avatarColors.length]} flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[17px] font-medium text-white`}
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-medium text-ink">{review.name}</p>
                    <p className="truncate text-[13px] leading-5 text-muted">{review.city}</p>
                  </div>
                </div>

                <div className="shrink-0 rounded-full border border-border/70 px-3 py-1 text-[12px] font-medium text-muted">
                  Avis Google
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1" aria-label="Note 5 sur 5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    aria-hidden="true"
                    className="h-4 w-4 fill-[#F4B400] text-[#F4B400]"
                    strokeWidth={1.8}
                  />
                ))}
              </div>

              <blockquote className="mt-5 text-[18px] font-normal leading-[1.45] tracking-[-0.01em] text-ink">
                “{review.quote}”
              </blockquote>

              <p className="mt-6 border-t border-border/60 pt-4 text-[13px] leading-5 text-muted">
                Trajet : {review.route}
              </p>
            </SectionMotion>
          ))}
        </div>
      </Container>
    </section>
  );
}
