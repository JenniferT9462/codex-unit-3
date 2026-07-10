import { useState, useEffect } from "react";
import data from "../data/data.js";

export default function Main() {
  const [didMount, setDidMount] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(componentDidMount, []);

  // debugger;
  return (
    <main>
      <p>Component has mounted: {didMount.toString()}</p>
      <p>
        To render a data array with HTML in React, you can traverse the array
        using a loop or mapping method, wrap each data item's properties in JSX
        tags, push them into a stateful array, and then render that array inside
        your component template.
      </p>
      <section>{images}</section>
    </main>
  );
    function componentDidMount() {
      const figures = [];
      data.forEach((item, index) => {
        const figure = 
        <figure key={index}>
            <img src={item.src} />
            <figcaption>{item.caption}</figcaption>
        </figure>;
        figures.push(figure);
      })

      setImages(figures);
      // debugger;
    }
}
