import { Helmet } from "react-helmet-async";
import Presentation from "@/components/Presentation";

export default function PresentationPage() {
  return (
    <>
      <Helmet>
        <title>TapReserve.AI Pitch Deck — Product Presentation</title>
        <meta
          name="description"
          content="Slide-by-slide walkthrough of TapReserve.AI: the problem, the QR ordering solution, key features, Mobile POS and UAE POS integrations."
        />
        <link rel="canonical" href="https://tapreserveai.lovable.app/presentation" />
        <meta property="og:title" content="TapReserve.AI Pitch Deck" />
        <meta
          property="og:description"
          content="Explore the TapReserve.AI presentation: self-ordering, pay-at-table, Mobile POS and 130+ UAE POS integrations."
        />
        <meta property="og:url" content="https://tapreserveai.lovable.app/presentation" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Presentation />
    </>
  );
}
