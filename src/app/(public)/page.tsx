import styles from "@/styles/pages/accueil.module.scss";
import sectionStyles from "@/styles/layout/sections.module.scss";
import Container from "@/components/layout/Container/Container";
import ButtonLink from "@/components/ui/buttonLink";
import SectionIntro from "@/components/ui/sectionIntro";
import Image from "next/image";
import ServiceCards from "@/components/ui/servicesCards";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <Container className={sectionStyles.sectionContent}>
          <header className={sectionStyles.sectionHeader}>
            <SectionIntro
              label=" NETTOYAGE · COPROPRIÉTÉS & BUREAUX PARISIENS"
              headingTag="h1"
              title="Le nettoyage,"
              titleSpan="un savoir-faire familial"
              variant="hero"
              description="Depuis quinze ans, nous prenons soin des plus belles adresses
                parisiennes. Un entretien méticuleux, discret, pour que chaque
                immeuble respire la sérénité."
            />
          </header>

          <div className={styles.blocButtons}>
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
            <ButtonLink href="/services" variant="light">
              Découvrez nos services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className={`${styles.services} ${sectionStyles.section}`}>
        <Container
          className={`${sectionStyles.sectionContent} ${styles.servicesContent}`}
        >
          <header className={sectionStyles.sectionHeader}>
            <SectionIntro
              label="NOS PRESTATIONS"
              title="Un service taillé pour"
              titleSpan="chaque lieu"
              description="De l'immeuble haussmannien aux bureaux modernes, un savoir-faire complet au service de votre quotidien."
            />
          </header>
          <ul className={sectionStyles.servicesList} role="list">
            <ServiceCards
              href="/services/entretien-immeubles-&-coproprietees"
              src="/etages.webp"
              alt="vue en hauteur de cages d'escaliers parisiennes"
              width={750}
              height={1000}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Entretien d'immeubles et de copropriétés"
              descriptionCard="Un hall impeccable, des escaliers qui respirent la propreté : c'est la 
                première impression qu'offre votre immeuble à ses résidents et visiteurs."
            />
            <ServiceCards
              href="/services/bureaux-et-locaux-professionnels"
              src="/salon.webp"
              alt="Intérieur d'un de nos salons de coiffure que nous nettoyons"
              width={700}
              height={525}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Nettoyage de bureaux et locaux professionnels"
              descriptionCard="Avoir un local professionnel impeccable est primordial,
                que ce soit parce que vous y recevez des clients ou pour travailler dans de bonnes conditions."
            />
            <ServiceCards
              href="/services/sortie-de-poubelles"
              src="/poubelles.webp"
              alt="des conteneurs poubelles sortis sur la voie publique"
              width={700}
              height={336}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Sortie et rentrée de vos containers à ordures"
              descriptionCard="Nos équipes s'occupent de sortir et rentrer les poubelles de votre
                copropriété aux horaires prévus par la municipalité. Et vous, qui sort vos poubelles ?"
            />
          </ul>
          <ButtonLink href="/services" variant="text">
            Découvrir tous nos services
          </ButtonLink>
        </Container>
      </section>

      <section className={`${styles.aPropos} ${sectionStyles.section}`}>
        <Container
          className={`${sectionStyles.sectionContent} ${styles.aProposContainer}`}
        >
          <header className={sectionStyles.sectionHeader}>
            <SectionIntro
              label="À PROPOS"
              title="Depuis 2010 au service des"
              titleSpan="copropriétés et bureaux"
              description="Fondée par Carmen, notre équipe entièrement formée œuvre avec délicatesse 
            dans les plus belles copropriétés et bureaux de la capitale.
            Nous croyons qu'un lieu propre est un lieu qui inspire — et que chaque détail compte."
            />
            <ButtonLink href="/a-propos" variant="text">
              Découvrir notre histoire
            </ButtonLink>
          </header>

          <div className={styles.blocImage}>
            <Image
              className={styles.facadeImg}
              src="/copro2.webp"
              alt="façade d'immeuble haussmannien"
              width={1000}
              height={563}
              sizes="(min-width: 1300px) 594px, (min-width: 768px) calc(50vw - 56px), calc(100vw - 48px)"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
