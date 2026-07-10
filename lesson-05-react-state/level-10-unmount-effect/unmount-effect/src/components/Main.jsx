import { useEffect } from 'react'; 

export default function Main({ setUnmount }) {
  useEffect(componentDidUnmount, []);
  return (
    <main>
      <p>
        To run code during the unmount phase in React, you return a cleanup
        function from a <code>useEffect</code> hook with an empty dependency
        array (<code>[]</code>). React automatically invokes this returned
        function right before the component is removed from the DOM.
      </p>
      <button onClick={handleClick}>Click to unmount</button>
    </main>
  );

  function componentDidUnmount() {
    return () =>  {
      alert("The Main component has unmounted.");
    }
  }

  function handleClick() {
    // debugger;
    setUnmount(true);
  }

  
}
