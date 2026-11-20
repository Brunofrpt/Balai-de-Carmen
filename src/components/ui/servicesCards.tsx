import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/services-cards.module.scss";

type ServiceCardsProps = {
  href?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  title: string;
  descriptionCard: string;
};

export default function ServiceCards({
  href,
  src,
  alt,
  width,
  height,
  title,
  descriptionCard,
  sizes,
}: ServiceCardsProps) {
  const cardContent = (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={styles.cardImage}
      />
      <div className={styles.blocDescription}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.descriptionCard}>{descriptionCard}</p>
        {href ? (
          <p className={styles.fakeLink}>
            En savoir plus
            <span aria-hidden="true" className={styles.arrow}>
              →
            </span>
          </p>
        ) : null}
      </div>
    </>
  );

  return (
    <li className={`${styles.card} ${href ? styles.cardInteractive : ""}`}>
      {href ? (
        <Link href={href} className={styles.linkClassName}>
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </li>
  );
}
