import "./layout/globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Container>
        <About />
        
        
        <footer>OUTRA SESSÃO</footer>
      </Container>
    </>
  );
}

export default App;
