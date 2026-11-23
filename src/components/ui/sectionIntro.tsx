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
  variant?: "hero" | "default";
};

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
