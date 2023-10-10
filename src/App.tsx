import "./layout/globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import About from "./components/About";
import Service from "./components/Service";
import FAQSection from "./components/FAQSection";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { CTA } from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Container>
        <About />
        <Service />
      </Container>
      <CTA />
      <Container>
        <FAQSection />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
