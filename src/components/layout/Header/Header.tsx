"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container/Container";
import MainNavigation from "./MainNavigation";
import styles from "@/styles/layout/header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <Container>
        <div>
          <Link href="/" aria-label="Le Balai de Carmen - Accueil">
            Le Balai de Carmen
          </Link>

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Fermer le menu de navigation"
                : "Ouvrir le menu de navigation"
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.menuIcon} aria-hidden="true"></span>
          </button>
        </div>
        <div
          className={`${styles.menuPanel} ${isMenuOpen ? styles.menuPanelOpen : ""}`}
          inert={!isMenuOpen}
          id="main-navigation"
        >
          <MainNavigation />
        </div>
      </Container>
    </header>
  );
}
