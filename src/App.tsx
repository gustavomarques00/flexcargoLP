import "./layout/globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import About from "./components/About";
import Service from "./components/Service";
import FAQSection from "./components/FAQSection";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Container>
        <About />
        <Service />
        <FAQSection />
        <Contact />
        
        
        <footer>OUTRA SESSÃO</footer>
      </Container>
    </>
  );
}

export default App;
