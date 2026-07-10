import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [unmount, setUnmount] = useState(false);
  let mainComponent = <Main setUnmount={setUnmount} />;
  if (unmount) {
    mainComponent = <></>;
  }

  return (
    <>
      <Header />
      {/* <Main /> */}
      {mainComponent}
      <Footer />
    </>
  );
}

export default App;
