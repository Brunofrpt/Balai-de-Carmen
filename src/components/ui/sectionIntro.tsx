import styles from "@/styles/components/section-intro.module.scss";
import { createElement } from "react";

type SectionIntroProps = {
  label: string;
  title: string;
  titleSpan: string;
  description: string;
  labelClassName?: string;
  titleClassName?: string;
  accentTitleClassName?: string;
  descriptionClassName?: string;
  headingTag?: "h1" | "h2" | "h3";
  /**
   * Présentation typographique : "hero" agrandit le titre, sa partie accentuée
   * et la description, indépendamment du niveau de titre choisi.
   * @default "default"
   */
  variant?: "hero" | "default";
};

/**
 * Affiche une introduction composée d'un label, d'un titre en deux parties
 * et d'une description.
 *
 * Les éléments sont rendus dans un fragment React : un paragraphe, un titre
 * contenant un span accentué, puis un second paragraphe. Le parent fournit
 * l'enveloppe sémantique (par exemple un header) et les espacements entre eux.
 *
 * Choisir headingTag selon la hiérarchie des titres et variant selon la
 * présentation souhaitée. Ces deux props sont indépendantes.
 *
 * Les props de personnalisation CSS ajoutent leurs classes aux classes internes.
 * Leur priorité est déterminée par la cascade CSS.
 *
 * @example
 * Héros de page avec un titre de niveau 1 :
 * ```tsx
 * <SectionIntro
 *   label="NOS PRESTATIONS"
 *   title="Un service taillé pour"
 *   titleSpan="chaque lieu"
 *   description="Des prestations adaptées à votre immeuble ou à vos bureaux."
 *   headingTag="h1"
 *   variant="hero"
 * />
 * ```
 */
export default function SectionIntro({
  label,
  title,
  titleSpan,
  description,
  labelClassName = "",
  titleClassName = "",
  accentTitleClassName = "",
  descriptionClassName = "",
  headingTag = "h2",
  variant = "default",
}: SectionIntroProps) {
  return (
    <>
      <p className={`${styles.label} ${labelClassName}`}>{label}</p>
      {createElement(
        headingTag,
        {
          className: `${styles.title} ${titleClassName} ${
            variant === "hero" ? styles.heroTitle : ""
          }`,
        },
        title,
        " ",
        <span
          className={`${styles.accentTitle} ${accentTitleClassName} ${
            variant === "hero" ? styles.heroAccentTitle : ""
          }`}
        >
          {titleSpan}
        </span>,
      )}
      <p
        className={`${styles.description} ${descriptionClassName} ${
          variant === "hero" ? styles.heroDescription : ""
        }`}
      >
        {description}
      </p>
    </>
  );
}
