// app/page.tsx
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Offer from "@/components/Offer";
import Audience from "@/components/Audience";
import Difference from "@/components/Difference";
import Transformation from "@/components/Transformation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <main>
      <Hero />
      <Challenge />
      <Offer />
      <Audience />
      <Difference />
      <Transformation />
      <CTA />
      <Footer />
    </main>
  );
}