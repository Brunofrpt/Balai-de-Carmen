import Link from "next/link";
import styles from "@/styles/layout/header.module.scss";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";

type MainNavigationProps = {
  onCloseMenu: () => void;
};

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/#devis", label: "Devis Gratuit" },
];

export default function MainNavigation({ onCloseMenu }: MainNavigationProps) {
  const pathName = usePathname();
  return (
    <nav aria-label="Navigation principale" className={styles.mainNavigation}>
      <Container>
        <ul className={styles.navigationList}>
          {navigationLinks.map(({ href, label }) => (
            <li key={href} className={styles.navigationItem}>
              <Link
                href={href}
                className={`${styles.navigationLink} ${href === pathName ? styles.navigationLinkActive : ""}`}
                aria-current={href === pathName ? "page" : undefined}
                onClick={onCloseMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
