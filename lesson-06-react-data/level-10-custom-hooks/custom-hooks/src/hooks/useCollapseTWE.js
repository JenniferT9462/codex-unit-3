import { Collapse, initTWE } from "tw-elements";
import { useState, useEffect } from "react";

export function useCollapseTWE() {
     const [didMount, setDidMount] = useState(false);

     useEffect(componentDidMount, []);

     function componentDidMount() {
       setDidMount(true);
       initTWE({ Collapse });
     }
}
