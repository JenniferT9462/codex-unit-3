import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>React Fragment</h1>
      </header>
      <main>
        <p>
          A React Fragment is a built-in tool that lets you group a list of
          multiple elements together without forcing you to wrap them in an
          extra, unnecessary HTML tag like a div. This is incredibly useful
          because React components are required to return a single root element.
          By using fragments, you can satisfy this rule without cluttering your
          browser's DOM tree with useless markup, which keeps your page layout
          cleaner and avoids breaking CSS styles like Flexbox or Grid.
        </p>
      </main>
      <footer>&copy; Created @ CodeX Academy by Jennifer Tarleton</footer>
    </>
  );
}

export default App;
