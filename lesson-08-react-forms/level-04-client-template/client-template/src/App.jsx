import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import WebCLient from "./pages/WebClient.jsx";
import Pokemon from "./pages/Pokemon.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webclient" element={<WebCLient />} />
        <Route path="/pokemon" element={ <Pokemon/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
