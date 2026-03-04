import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ValueProps from "../components/ValueProps";
import CaseStudies from "../components/CaseStudies";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <section className="page page-home">
      <Helmet>
        <title>ClearPath Systems | AI & Data Solutions for Australian Businesses</title>
        <meta name="description" content="ClearPath Systems helps Australian small and medium businesses reduce manual work, improve decisions, and lower operating costs with practical AI automation, data analytics, and custom software." />
        <link rel="canonical" href="https://clearpathsystems.com.au/" />
      </Helmet>
      <Hero />
      <ServicesGrid />
      <ValueProps />
      <CaseStudies />
      <CallToAction />
    </section>
  );
}

export default Home;
