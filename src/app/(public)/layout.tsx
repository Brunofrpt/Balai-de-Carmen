import type { ReactNode } from "react";
import Container from "@/components/layout/Container/Container";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <header></header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer></footer>
    </>
  );
}
