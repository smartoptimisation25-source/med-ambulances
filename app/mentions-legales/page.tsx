import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/ui/LegalPage";
import { siteData, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mentions légales | Med Ambulances",
  description:
    "Mentions légales du site Med Ambulances exploité par SINNE AMBULANCE, société de transport médical dans le Haut-Rhin.",
  alternates: {
    canonical: `${siteUrl}/mentions-legales`
  }
};

export default function MentionsLegalesPage() {
  const { legal, address } = siteData;

  return (
    <LegalPage
      title="Mentions légales"
      description="Informations relatives à l'éditeur du site, à l'hébergement, à la propriété intellectuelle et aux responsabilités."
    >
      <LegalSection title="Éditeur du site">
        <p>
          Le site Med Ambulances est édité par {legal.corporateName}, exploitant
          la marque commerciale {legal.brandName}.
        </p>
        <ul className="space-y-2">
          <li>Dénomination sociale : {legal.corporateName}</li>
          <li>Forme juridique : {legal.legalForm}</li>
          <li>Capital social : {legal.shareCapital}</li>
          <li>SIREN : {legal.siren}</li>
          <li>SIRET du siège : {legal.siret}</li>
          <li>RCS : {legal.rcs}</li>
          <li>Numéro de TVA intracommunautaire : {legal.vat}</li>
          <li>Code APE : {legal.apeCode} ({legal.apeLabel})</li>
          <li>
            Adresse : {address.streetAddress}, {address.postalCode}{" "}
            {address.addressLocality}
          </li>
          <li>
            Téléphone :{" "}
            <a className="text-accent" href={siteData.phoneHref}>
              {siteData.phoneDisplay}
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Directeur de la publication">
        <p>{legal.publisher}.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>
        <p>
          Site de l'hébergeur :{" "}
          <a className="text-accent" href="https://vercel.com">
            https://vercel.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur ce site, incluant notamment les
          textes, images, éléments graphiques, interfaces, composants et
          structure générale, est protégé par le droit de la propriété
          intellectuelle. Toute reproduction, représentation, modification ou
          diffusion non autorisée est interdite.
        </p>
      </LegalSection>

      <LegalSection title="Responsabilité">
        <p>
          Les informations publiées sur ce site sont fournies à titre
          informatif. Elles ne remplacent pas une prescription médicale ni les
          indications données par les professionnels de santé. Pour toute
          situation urgente, contactez les services d'urgence compétents.
        </p>
      </LegalSection>

      <LegalSection title="Source des informations légales">
        <p>
          Les informations d'identification de l'entreprise ont été vérifiées
          via la fiche Pappers de SINNE AMBULANCE. Certaines données peuvent
          évoluer ; en cas de divergence, les registres officiels prévalent.
        </p>
        <p>
          Source :{" "}
          <a className="text-accent" href={legal.sourceUrl}>
            fiche Pappers SINNE AMBULANCE
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}

