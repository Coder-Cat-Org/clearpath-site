import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ValueProps from "../components/ValueProps";

function Home() {
  return (
    <section className="page page-home">
      <Hero />
      <ServicesGrid />
      <ValueProps />
    </section>
  );
}

export default Home;
