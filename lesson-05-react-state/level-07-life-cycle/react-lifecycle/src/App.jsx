import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const [phase, setPhase] = useState("unmount");
  const [count, setCount] = useState(0);

  let footer = <Footer count={count} />;
  if (phase === "unmount") footer = <></>;

  return (
    <>
      <Header />
      <Main
        phase={phase}
        setPhase={setPhase}
        count={count}
        setCount={setCount}
      />
      {footer}
    </>
  );
}

export default App;
