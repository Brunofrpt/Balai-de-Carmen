import styles from "@/styles/pages/accueil.module.scss";
import Container from "@/components/layout/Container/Container";
import ButtonLink from "@/components/ui/buttonLink";
import SectionIntro from "@/components/ui/sectionIntro";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <Container className={styles.flex}>
          <SectionIntro
            label=" NETTOYAGE · COPROPRIÉTÉS & BUREAUX PARISIENS"
            headingTag="h1"
            title="Le nettoyage,"
            titleClassName={styles.title}
            titleSpan="un savoir faire familial"
            accentTitleClassName={styles.accentTitle}
            description="Depuis quinze ans, nous prenons soin des plus belles adresses
          parisiennes. Un entretien méticuleux, discret, pour que chaque
          immeuble respire la sérénité."
            descriptionClassName={styles.description}
          />
          <div className={styles.blocButtons}>
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
            <ButtonLink href="/services" variant="light">
              Découvrez nos services
            </ButtonLink>
          </div>
        </Container>
      </section>
      <section className={styles.services}>
        <Container className={styles.flex}>
          <SectionIntro
            label="NOS PRESTATIONS"
            title="Un service taillé pour"
            titleSpan="chaque lieu"
            description="De l'immeuble haussmannien aux bureaux modernes, un savoir-faire complet au service de votre quotidien."
          />
        </Container>
      </section>
      <section className={styles.aPropos}>
        <Container className={`${styles.flex} ${styles.aProposContainer}`}>
          <header className={styles.headerAPropos}>
            <SectionIntro
              label="À PROPOS"
              title="Depuis 2010 au service des"
              titleSpan="copropriétées et bureaux"
              description="Fondée par Carmen, notre équipe entièrement formée œuvre avec délicatesse 
            dans les plus belles copropriétés et bureaux de la capitale.
            Nous croyons qu'un lieu propre est un lieu qui inspire — et que chaque détail compte."
            />
            <ButtonLink href="/a-propos" variant="text">Découvrir notre histoire</ButtonLink>
          </header>
          <div className={styles.blocImage}>
            <Image
              className={styles.facadeImg}
              src="/copro2.webp"
              alt="façade immeuble Hausmanienne"
              width={1000}
              height={583}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
