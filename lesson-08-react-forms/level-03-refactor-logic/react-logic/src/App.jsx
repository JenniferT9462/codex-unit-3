import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import WebClient from "./pages/WebClient.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webclient" element={<WebClient />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
