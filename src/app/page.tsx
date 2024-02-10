import Link from "next/link";
import Navbar from "./components/ui/navbar";
import Feature from "./components/ui/feature";
import Deliver from "./components/ui/support";
import Title from "./components/ui/title";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Title />

      <Feature />

      <Deliver />
    </>
  );
}
