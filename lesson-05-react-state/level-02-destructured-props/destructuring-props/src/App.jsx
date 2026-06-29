import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
 

  return (
    <>
      <Header title="Destructured Props" />
      <Main message="To destructure props in a React component, you replace the generic 'props' parameter in your function definition with an object literal containing the exact keys you want to extract—for example, function MyComponent({ title, message }). This lets you pull properties out of the incoming props object immediately at the function signature level, meaning you can reference them directly as clean variables (like 'title') in your JSX markup instead of writing 'props.title' every single time."/>
      <Footer />
    </>
  );
}

export default App
