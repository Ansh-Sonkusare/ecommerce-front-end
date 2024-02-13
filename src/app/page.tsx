import Navbar from "./components/ui/navbar";
import Feature from "./components/ui/feature";
import Deliver from "./components/ui/support";
import Title from "./components/ui/title";
import Promo from "./components/ui/promo";
import Seo from "./components/ui/seo";
import Footer from "./components/ui/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Title />

      <Feature />

      <Promo />

      <Deliver />

      <Seo />

      <Footer />
    </>
  );
}
