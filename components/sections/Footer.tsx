import { Container } from "@/components/ui/Container";
import { siteData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-white py-10">
      <Container>
        <div className="grid gap-8 text-[13px] leading-6 text-muted md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="font-medium text-ink">Med Ambulances</p>
            <p className="mt-3">
              {siteData.address.streetAddress}, {siteData.address.postalCode}{" "}
              {siteData.address.addressLocality}
            </p>
            <p>
              <a className="transition-colors hover:text-ink" href={siteData.phoneHref}>
                {siteData.phoneDisplay}
              </a>
            </p>
            <p>SIRET : {siteData.legal.siret}</p>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <a className="transition-colors hover:text-ink" href="/mentions-legales">
              Mentions légales
            </a>
            <a className="transition-colors hover:text-ink" href="/confidentialite">
              Politique de confidentialité
            </a>
            <a className="transition-colors hover:text-ink" href="/cookies">
              Politique cookies
            </a>
            <p>© {new Date().getFullYear()} Med Ambulances. Tous droits réservés.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
