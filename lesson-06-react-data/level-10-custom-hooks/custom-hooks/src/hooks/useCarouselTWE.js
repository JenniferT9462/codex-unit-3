import { Carousel, initTWE } from "tw-elements";
import { useState, useEffect, Component } from "react";

export function useCarouselTWE() { 
     const [didMount, setDidMount] = useState(false);
     useEffect(componentDidMount, []);

      function componentDidMount() {
        setDidMount(true);
        initTWE({ Carousel });
      }

}
