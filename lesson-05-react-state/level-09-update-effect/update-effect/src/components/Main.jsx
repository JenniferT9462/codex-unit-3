import { useState, useEffect } from "react";
export default function Main() {
  const [didMount, seDidMount] = useState(false);
  const [didUpdate, setDidUpdate] = useState(false);
  const [message, setMessage] = useState("The Main component hasn't updated.");
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [message]);
    return (
      <main>
        <p>Component has mounted: {didMount.toString()}</p>
        <p>Component has updated: {didUpdate.toString()}</p>
        <p>Component message: {message}</p>
        <button onClick={handleClick}>Click to update</button>
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
          }}
        >
          <h3>How to Track the Update Phase in React</h3>
          <p>
            To track the update phase (and isolate it from the initial mount
            phase), we use a piece of state like <strong>didMount</strong>{" "}
            initialized to <code>false</code>, which turns <code>true</code>{" "}
            inside an empty-dependency <code>useEffect</code>.
          </p>
          <p>
            An <strong>if condition</strong> checking <code>if (didMount)</code>{" "}
            is absolutely necessary inside the updating effect because React
            runs <em>all</em> <code>useEffect</code> hooks at least once
            immediately after the initial render. Without this conditional
            safeguard, the "update" logic would trigger prematurely during the
            mount phase, creating a false positive.
          </p>
        </div>
      </main>
    );

    function componentDidMount() {
      seDidMount(true);
      // debugger; 
    }

    function componentDidUpdate() {
      if (didMount) {
        setDidUpdate(true);
      }
    }

    function handleClick() {
      setMessage("The main component has updated.")
    }
}