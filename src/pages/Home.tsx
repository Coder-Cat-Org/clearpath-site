import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ValueProps from "../components/ValueProps";
import CaseStudies from "../components/CaseStudies";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <section className="page page-home">
      <Hero />
      <ServicesGrid />
      <ValueProps />
      <CaseStudies />
      <CallToAction />
    </section>
  );
}

export default Home;
