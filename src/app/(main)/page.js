import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Audience from "@/components/Audience";
import Speakers from "@/components/Speakers";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Tickets from "@/components/Tickets";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Registration from "@/components/Registration";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <Benefits />
      <Audience />
      <Speakers />
      <Program />
      <Gallery />
      <Testimonials />
      <Tickets />
      <FAQ />
      <Location />
      <Registration />
      <Contacts />
    </main>
  );
}
