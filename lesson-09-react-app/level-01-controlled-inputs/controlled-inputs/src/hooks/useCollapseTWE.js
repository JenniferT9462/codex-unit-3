// Initialization for ES Users
import { Collapse, initTWE } from "tw-elements";
import { useEffect } from "react";

export function useCollapseTWE() {
  // Need useEffect for initTWE() to work. 
  useEffect(() => {
    // This runs AFTER the component mounts to the DOM
    initTWE({ Collapse });
  }, []); // E
}
