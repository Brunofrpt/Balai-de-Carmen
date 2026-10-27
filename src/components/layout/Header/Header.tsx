"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import Container from "@/components/layout/Container/Container";
import MainNavigation from "./MainNavigation";
import styles from "@/styles/layout/header.module.scss";

const getTabletSnapshot = () => window.matchMedia("(min-width: 768px)").matches; // Garder ce seuil identique au breakpoint tablette défini en Sass.
const subscribeToTablet = (onChange: () => void) => {
  const tabletQuery = window.matchMedia("(min-width:768px)");
  tabletQuery.addEventListener("change", onChange);
  return () => {
    // React appellera cette fonction pour nettoyer l'abonnement.
    tabletQuery.removeEventListener("change", onChange);
  };
};
const getServerSnapshot = () => false; // Le serveur ignore la largeur : ce repli est partagé avec l'hydratation.

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTabletOrLarger = useSyncExternalStore(
    subscribeToTablet,
    getTabletSnapshot,
    getServerSnapshot,
  );
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setIsMenuOpen(false);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
      // Après Échap, rend le focus au burger pour poursuivre au clavier.
      menuButtonRef.current?.focus();
    }
  };
  return (
    <header className={styles.header} onKeyDown={handleKeyDown}>
      <Container className={styles.headerBarContainer}>
        <div className={styles.headerBar}>
          <Link
            onClick={closeMenu}
            href="/"
            className={styles.logoLink}
            aria-label="Le Balai de Carmen - Accueil"
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
            ref={menuButtonRef}
          >
            <span className={styles.menuIcon} aria-hidden="true"></span>
          </button>
        </div>
      </Container>
      {/* Bloque les liens uniquement lorsque le menu mobile est fermé. */}
      <div
        className={`${styles.menuPanel} ${isMenuOpen ? styles.menuPanelOpen : ""}`}
        inert={!isMenuOpen && !isTabletOrLarger}
        id="main-navigation"
      >
        <MainNavigation onCloseMenu={closeMenu} />
      </div>
    </header>
  );
}
