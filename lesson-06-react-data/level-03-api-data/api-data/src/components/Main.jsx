import { useState, useEffect } from "react";

export default function Main() {
  const [didMount, setDidMount] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(componentDidMount, []);

  return (
    <main>
      <p>Component has mounted: {didMount.toString()}</p>
      <section>{characters}</section>
      <p>
        To render an array of data from an API in React, you fetch the data
        inside a lifecycle hook like <code>useEffect</code> (acting as
        componentDidMount). Once the data array is received, you use the
        JavaScript <code>map()</code> method to loop through each item, passing
        a callback function that transforms the raw data object into a
        structured React element (like HTML <code>details</code> or{" "}
        <code>div</code> tags). Finally, you save this mapped array into a state
        variable, causing React to automatically render and update the items on
        the DOM tree.
      </p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }
  
  function toCharacters(dataItem) {
    const details = (
      <details key={dataItem.index}>
        <summary>{dataItem.fullName}</summary>
        <figure>
          <img src={dataItem.image} alt={dataItem.fullName} />
          <figcaption>{dataItem.interpretedBy}</figcaption>
        </figure>
      </details>
    );
    return details;
  }

  async function handleData() {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );

    const data = await response.json();
    console.log(data);

    const details = data.map(toCharacters);
    setCharacters(details);
  }
}
