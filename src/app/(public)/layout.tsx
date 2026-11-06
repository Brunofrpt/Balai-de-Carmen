import type { ReactNode } from "react";
import Container from "@/components/layout/Container/Container";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
