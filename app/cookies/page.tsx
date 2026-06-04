import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/ui/LegalPage";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique cookies | Med Ambulances",
  description:
    "Informations sur l'utilisation des cookies et traceurs sur le site Med Ambulances.",
  alternates: {
    canonical: `${siteUrl}/cookies`
  }
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique cookies"
      description="Cette page précise les cookies et traceurs susceptibles d'être utilisés lors de votre navigation sur le site."
    >
      <LegalSection title="Utilisation actuelle des cookies">
        <p>
          Le site Med Ambulances ne dépose actuellement pas de cookies
          publicitaires, de cookies de mesure d'audience non essentiels ou de
          traceurs destinés au ciblage commercial.
        </p>
        <p>
          Aucun bandeau de consentement n'est donc affiché tant qu'aucun cookie
          non essentiel n'est utilisé.
        </p>
      </LegalSection>

      <LegalSection title="Cookies techniques">
        <p>
          Des éléments techniques strictement nécessaires peuvent être utilisés
          par l'hébergeur ou le navigateur pour assurer l'affichage du site, la
          sécurité, la performance et le bon fonctionnement des pages. Ces
          éléments ne nécessitent pas de consentement lorsqu'ils sont
          strictement indispensables au service demandé.
        </p>
      </LegalSection>

      <LegalSection title="Évolutions possibles">
        <p>
          Si des outils de mesure d'audience, de publicité, de suivi ou de
          contenu tiers nécessitant un consentement sont ajoutés ultérieurement,
          cette politique sera mise à jour et un mécanisme de consentement sera
          mis en place lorsque la réglementation l'exige.
        </p>
      </LegalSection>

      <LegalSection title="Paramétrage du navigateur">
        <p>
          Vous pouvez configurer votre navigateur pour bloquer ou supprimer les
          cookies. Le blocage de certains éléments techniques peut toutefois
          altérer le bon fonctionnement de certains sites.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

