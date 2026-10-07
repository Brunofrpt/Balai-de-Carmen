import Link from "next/link";
import styles from "@/styles/layout/header.module.scss";

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/#devis", label: "Devis Gratuit" },
];

export default function MainNavigation() {
  return (
    <nav aria-label="Navigation principale" className={styles.mainNavigation}>
      <ul>
        {navigationLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
