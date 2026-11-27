import styles from "@/styles/pages/services.module.scss";
import sectionStyles from "@/styles/layout/sections.module.scss";
import Container from "@/components/layout/Container/Container";
import SectionIntro from "@/components/ui/sectionIntro";
import ServiceCards from "@/components/ui/servicesCards";
import Cta from "@/components/ui/cta";

export default function Prestations() {
  return (
    <>
      <section
        className={`${sectionStyles.section} ${styles.sectionPrestations}`}
      >
        <Container
          className={`${sectionStyles.sectionContent} ${styles.prestationsContent}`}
        >
          <header className={sectionStyles.sectionHeader}>
            <SectionIntro
              label="NOS PRESTATIONS DE NETTOYAGE"
              headingTag="h1"
              variant="hero"
              title="La qualitée de notre expérience"
              titleClassName={styles.title}
              titleSpan="à votre service"
              accentTitleClassName={styles.accentTitle}
              description="Chaque prestation est le coeur de notre metier. Et comme chaque lieu est différent,
          nous l'adaptons sur mesure à vos besoins"
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
        </Container>
      </section>
      <section className={`${styles.sectionAutres} ${sectionStyles.section}`}>
        <Container
          className={`${sectionStyles.sectionContent} ${styles.autresContent}`}
        >
          <header className={sectionStyles.sectionHeader}>
            <SectionIntro
              label="AUTRES SERVICES"
              title="Et aussi"
              titleSpan="à la demande"
              description="Des interventions ponctuelles ou régulières, à la carte, pour entretenir chaque détail de vos espaces."
            />
          </header>
          <ul className={sectionStyles.servicesList} role="list">
            <ServiceCards
              src="/karcher.webp"
              alt="nettoyage de d'une cour au Karcher"
              width={600}
              height={450}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Karcher haute pression"
              descriptionCard="Décapage et nettoyage pression de vos cours, parking et autres surfaces"
            />
            <ServiceCards
              src="/marbre.webp"
              alt="Cristalisation d'une entrée en marbre par un de nos agents"
              width={600}
              height={450}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Cristalisation de marbre"
              descriptionCard="Cristalisation de vos halls, marches, palliers, locaux professionnels en marbre"
            />
            <ServiceCards
              src="/remise-en-etat.webp"
              alt="Remise en état d'une copropriétée par nos agens, après travaux"
              width={600}
              height={450}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Remise en ếtat"
              descriptionCard="Nettoyage complet des parties communes, après travaux, incendies, ou autres"
            />
            <ServiceCards
              src="/shampouinage.webp"
              alt="shampouinage d'une moquette a la monobrosse"
              width={600}
              height={450}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Shampouinage moquette"
              descriptionCard="Nos équipes s'occupent de champouiner en profondeur les moquettes de vos locaux"
            />
            <ServiceCards
              src="/debarras.webp"
              alt="Débarras d'une cave d'immeuble par nos équipes"
              width={600}
              height={500}
              sizes="(min-width: 1300px) 401px, (min-width: 768px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
              title="Débarras"
              descriptionCard="Nos équipes s'occupent de retirer les débarras, et tous types d'encombrants"
            />
          </ul>
        </Container>
      </section>
      <section className={`${sectionStyles.section} ${styles.sectionCta}`}>
        <Container
          className={`${sectionStyles.sectionContent} ${styles.ctaContent}`}
        >
          <Cta />
        </Container>
      </section>
    </>
  );
}
