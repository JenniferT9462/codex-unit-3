import { useState } from "react";

export default function Main() {
    const result = useState(0);
    // debugger;
    let count = result[0];
    let setCount = result[1];

  
    return (
      <main>
        <p>
          Stateful variables allow React to remember data across renders. When
          the button is clicked, the <code>setCount</code> function updates the
          state and triggers React to re-render this component with the new
          value.
        </p>
        <p>Current count: {count}</p>
        <button onClick={handleClick}>Click counter</button>
      </main>
    );

      function handleClick(event) {
        event.preventDefault();
        setCount(count + 1);
        // This line doesn't work have to use setCount(count + 1)
        // setCount = count + 1;
      }
}
