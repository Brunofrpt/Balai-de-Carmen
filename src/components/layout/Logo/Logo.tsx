import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/logo.module.scss";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export default function Logo({ className = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Le Balai de Carmen - Accueil"
      className={`${styles.logoLink} ${className}`}
      onClick={onClick}
    >
      <Image
        className={styles.logo}
        src="/logo_balai.webp"
        alt=""
        width={80}
        height={120}
      />
      <span>Le Balai de Carmen</span>
    </Link>
  );
}
