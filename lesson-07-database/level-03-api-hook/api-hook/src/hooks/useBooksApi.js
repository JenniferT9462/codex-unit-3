import { useState, useEffect } from "react";

export function useBooksApi() {
//   debugger;
  const [data, setData] = useState([]);

  async function handleSubmit(event) {
    // debugger;
    event.preventDefault();
    const form = event.target;
    const data = {
      max: form.elements.maxItems.value,
    };
    const dataString = new URLSearchParams(data);

    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/books" + "?" + dataString,
    );

    const result = await response.json();
    console.log(result);
    setData(result);
  }

  return [data, handleSubmit];
}
