import Link from "next/link";
import Navbar from "./components/ui/navbar";
import Feature from "./components/ui/feature";
import Deliver from "./components/ui/support";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Feature />

      <Deliver />
    </>
  );
}
