import { useState, useEffect } from "react";

export default function Main() {
    const [didMount, setDidMount] = useState(false);
    // debugger;
   useEffect(componentDidMount, []);
   
    return (
      <main>
        <p>Component has mounted: {didMount.toString()}</p>

        {/* Tasks 24, 25: Explanation message */}
        <p>
          The useEffect hook acts as a gateway to handle side effects outside
          the normal render flow. By passing an empty dependency array ([]) as
          the second argument, we tell React to trigger the callback exactly
          once—right after the component successfully injects into the DOM for
          the first time. This lets us reliably track or execute code
          specifically during the component's initial mount phase.
        </p>
      
      </main>
    );

    function componentDidMount() {
      setDidMount(true);
      debugger;
    }
}