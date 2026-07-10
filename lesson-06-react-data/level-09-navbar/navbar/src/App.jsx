import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router';

import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App
