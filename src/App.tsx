import "./layout/globals.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import MainBanner from "./components/MainBanner";

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Container>
        {/* Todo o seu conteúdo aqui será limitado e centralizado */}
        
        
        <footer>OUTRA SESSÃO</footer>
      </Container>
    </>
  );
}

export default App;
