"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import type { KeyboardEvent } from "react";
import Container from "@/components/layout/Container/Container";
import MainNavigation from "./MainNavigation";
import styles from "@/styles/layout/header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setIsMenuOpen(false);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isMenuOpen) {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  };
  return (
    <header className={styles.header} onKeyDown={handleKeyDown}>
      <Container>
        <div className={styles.headerBar}>
          <Link
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
      <div
        className={`${styles.menuPanel} ${isMenuOpen ? styles.menuPanelOpen : ""}`}
        inert={!isMenuOpen}
        id="main-navigation"
      >
        <MainNavigation onCloseMenu={closeMenu} />
      </div>
    </header>
  );
}
