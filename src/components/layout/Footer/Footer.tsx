import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import styles from "@/styles/layout/footer.module.scss";
import Contact from "./Contact";
import Link from "next/link";

const currentDate = new Date();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerTop}>
          <div className={styles.blocLogo}>
            <Logo className={styles.footerLogo} />
            <p className={styles.footerDescription}>
              L&apos;élégance du propre. Entretien de copropriétés et bureaux à
              Paris.
            </p>
          </div>
          <Contact />
        </div>
      </Container>
      <div className={styles.footerBottom}>
        <Container>
          <ul className={styles.footerBottomList} role="list">
            <li>
              <p>
                © {currentDate.getFullYear()} Le Balai de Carmen. Tous droits
                réservés.
              </p>
            </li>
            <li>
              <Link href="">Politique de confidentialité</Link>
            </li>
            <li>
              <Link href="">Mentions légales</Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
