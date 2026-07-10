import "./App.css";

function App() {
  const message1 =
    "In React, and JavaScript in general, local variables can be created within functions.";
  const message2 =
    "In React, variables can be inserted into HTML with curly braces. Example: `<h1>{myTitle}</h1>`";
  return (
    <main>
      <h1>React Variables</h1>
      <p>{message1}</p>
      <p>{message2}</p>
    </main>
  );
}

export default App;
