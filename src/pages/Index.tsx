import { Helmet } from "react-helmet-async";
import Home from "./Home";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>TapReserve.AI — QR Self-Ordering & Pay-at-Table for Restaurants</title>
        <meta
          name="description"
          content="TapReserve.AI lets diners scan, order and pay from their phone. Faster tables, higher tips and 130+ POS integrations across the UAE."
        />
        <link rel="canonical" href="https://tapreserveai.lovable.app/" />
        <meta property="og:title" content="TapReserve.AI — QR Self-Ordering & Pay-at-Table" />
        <meta
          property="og:description"
          content="Scan, order, pay. Self-ordering and pay-at-table for UAE restaurants, integrated with 130+ POS systems."
        />
        <meta property="og:url" content="https://tapreserveai.lovable.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Home />
    </>
  );
}
