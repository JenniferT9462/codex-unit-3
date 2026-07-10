import { useState } from "react";

export default function Main() {
  const [count, setCount] = useState(0);
  debugger;
  const explanationMessage =
    "useState is a React Hook that lets you add state to a component. It returns an array with two elements: the current state value and a function to update it. We use array destructuring (e.g., const [count, setCount]) to easily assign names to these two elements.";

  return (
    <main>
      <p>{explanationMessage}</p>
      <p>Current count: {count}</p>
      <button onClick={handleClick}>Click counter</button>
    </main>
  );

  // NOTE: If you put the function underneath the return then it cant see the count useState.
  function handleClick(event) {
    event.preventDefault();
    // debugger;
    setCount(count + 1);
  }
}

