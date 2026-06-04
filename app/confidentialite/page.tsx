import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/ui/LegalPage";
import { siteData, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Politique de confidentialité RGPD | Med Ambulances",
  description:
    "Politique de confidentialité et informations RGPD du site Med Ambulances.",
  alternates: {
    canonical: `${siteUrl}/confidentialite`
  }
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      description="Cette page explique comment les données personnelles peuvent être traitées lors de votre navigation ou lorsque vous contactez Med Ambulances."
    >
      <LegalSection title="Responsable du traitement">
        <p>
          Le responsable du traitement est {siteData.legal.corporateName},{" "}
          {siteData.legal.legalForm}, dont le siège est situé{" "}
          {siteData.address.streetAddress}, {siteData.address.postalCode}{" "}
          {siteData.address.addressLocality}.
        </p>
      </LegalSection>

      <LegalSection title="Données susceptibles d'être traitées">
        <p>
          Le site ne comporte actuellement pas de formulaire de contact. Lorsque
          vous appelez Med Ambulances, les informations nécessaires à
          l'organisation du transport peuvent être demandées directement par
          téléphone : identité, coordonnées, lieu de prise en charge,
          établissement de destination, horaire du rendez-vous et éléments utiles
          à la bonne exécution du transport.
        </p>
        <p>
          Les données de santé ou informations médicales ne doivent être
          communiquées que lorsqu'elles sont nécessaires à l'organisation du
          transport et à votre sécurité.
        </p>
      </LegalSection>

      <LegalSection title="Finalités">
        <p>Les données peuvent être utilisées pour :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>répondre à votre demande par téléphone ;</li>
          <li>organiser un transport médical en ambulance ou VSL ;</li>
          <li>préparer la prise en charge et le retour éventuel ;</li>
          <li>assurer les formalités liées à la Sécurité Sociale ;</li>
          <li>respecter les obligations légales, réglementaires et comptables.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Base légale">
        <p>
          Les traitements peuvent reposer, selon les cas, sur l'exécution de
          mesures précontractuelles ou contractuelles, le respect d'obligations
          légales, l'intérêt légitime de l'entreprise à organiser et sécuriser
          les transports, ainsi que, lorsque nécessaire, votre consentement.
        </p>
      </LegalSection>

      <LegalSection title="Destinataires">
        <p>
          Les données peuvent être transmises uniquement aux personnes et
          organismes habilités lorsque cela est nécessaire : équipes de Med
          Ambulances, établissements de santé, professionnels de santé, caisses
          d'assurance maladie, prestataires techniques strictement nécessaires au
          fonctionnement du service.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>
          Les données sont conservées pendant la durée nécessaire à la finalité
          poursuivie, puis archivées ou supprimées conformément aux obligations
          légales applicables aux transports sanitaires, à la facturation et aux
          formalités administratives.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez
          demander l'accès, la rectification, l'effacement, la limitation ou
          l'opposition au traitement de vos données, lorsque ces droits sont
          applicables.
        </p>
        <p>
          Pour exercer vos droits, contactez Med Ambulances par téléphone au{" "}
          <a className="text-accent" href={siteData.phoneHref}>
            {siteData.phoneDisplay}
          </a>{" "}
          ou par courrier à l'adresse du siège.
        </p>
        <p>
          Vous disposez également du droit d'introduire une réclamation auprès
          de la CNIL :{" "}
          <a className="text-accent" href="https://www.cnil.fr">
            https://www.cnil.fr
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Sécurité">
        <p>
          Med Ambulances met en œuvre des mesures organisationnelles et
          techniques raisonnables pour protéger les données contre l'accès non
          autorisé, la perte, l'altération ou la divulgation.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

