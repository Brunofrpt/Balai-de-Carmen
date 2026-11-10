import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/styles/components/button-link.module.scss";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "dark",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.buttonLink} ${styles[variant]} ${className}`}
    >
      {children}
      {variant === "dark" ? (
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      ) : (
        ""
      )}
    </Link>
  );
}
