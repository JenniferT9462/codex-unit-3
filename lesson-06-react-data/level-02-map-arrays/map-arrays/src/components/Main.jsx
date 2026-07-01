import { useState, useEffect } from "react";
import data from "../data/data.js";

export default function Main() {
  //Debugger at the start of Main rendering phase
  debugger;

  // Track the mount phase
  const [didMount, setDidMount] = useState(false);

  //Stateful array to hold JSX elements
  const [subjects, setSubjects] = useState([]);

  // useEffect simulating componentDidMount
  useEffect(componentDidMount, []);

  return (
    <main>
      <p>Component has mounted: {didMount.toString()}</p>
      <section>{subjects}</section>
      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        To render a data array with HTML in React, you pass a callback function
        to the <code>.map()</code> method. This callback transforms each data
        object into a JSX element. The resulting array of JSX elements can then
        be stored in state or directly embedded into the component's return
        block, where React automatically iterates and renders them into the DOM
        tree.
      </p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);

    // Map the data using the callback function
    const details = data.map(toDetails);
    // Update state with the newly created JSX array
    setSubjects(details);
  }

  function toDetails(dataItem) {
    // Debugger inside the mapping function to watch each item transform
    debugger;

    // Create the details structure
    const details = (
      <details key={dataItem.name}>
        <summary>{dataItem.name}</summary>
        <p>{dataItem.description}</p>
      </details>
    );

    //Return the React element
    return details;
  }
}