import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
 

  return (
    <>
      <Header title="React Props" />
      <Main message="Props (short for properties) are custom arguments passed into React components, much like arguments passed into a regular JavaScript function. They allow components to be dynamic and reusable by letting parent components share data, configuration values, or content down to their child components. Inside the receiving component, props arrive as a single consolidated object, and they are strictly read-only, ensuring that components don't accidentally mutate data up the stream." />
      <Footer />
    </>
  );
}

export default App
