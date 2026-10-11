import Link from "next/link";
import styles from "@/styles/layout/header.module.scss";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/#devis", label: "Devis Gratuit" },
];

export default function MainNavigation() {
  const pathName = usePathname();
  return (
    <nav aria-label="Navigation principale" className={styles.mainNavigation}>
      <ul className={styles.navigationList}>
        {navigationLinks.map(({ href, label }) => (
          <li key={href} className={styles.navigationItem}>
            <Link
              href={href}
              className={`${styles.navigationLink} ${href === pathName ? styles.navigationLinkActive : ""}`}
              aria-current={href === pathName ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
