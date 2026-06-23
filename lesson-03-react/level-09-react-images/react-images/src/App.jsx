import HeroImage from './assets/hero.png';
import ReactImage from './assets/react.svg';
import ViteImage from './assets/vite.svg';
import './App.css'

function App() {
 

  return (
    <main>
      <h1>React Images</h1>
      <p>
        - In React, curly braces `{}` embedded in HTML can contain JavaScript
        code. - In this exercise, the curly braces contain JavaScript variables.
        - With React, local images can be imported as variables, then inserted
        into HTML.
      </p>

      <div id="images2">
        <img src={HeroImage} alt="Hero" />
        <img src={ReactImage} alt="React" />
        <img src={ViteImage} alt="Vite" />
      </div>
    </main>
  );
}

export default App
