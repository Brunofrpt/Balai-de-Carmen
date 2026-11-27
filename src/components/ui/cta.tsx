import SectionIntro from "./sectionIntro";
import ButtonLink from "./buttonLink";

export default function Cta() {
  return (
    <>
      <SectionIntro
        title="Un projet, un immeuble,"
        titleSpan="un devis ?"
        description="Parlons ensemble de vos besoins nous vous répondons sous 48h"
      />
      <ButtonLink href="/contact">Demander un devis</ButtonLink>
    </>
  );
}
