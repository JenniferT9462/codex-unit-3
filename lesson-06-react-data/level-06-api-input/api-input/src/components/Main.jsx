import { useState, useEffect } from "react";

export default function Main() {
  const [didMount, setDidMount] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(componentDidMount, []);

  return (
    <main>
      <p>Component has mounted: {didMount.toString()}</p>
      <form>
        <label htmlFor="maxChar">
          <input type="number" name="maxChar" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <section>{characters}</section>
      <p>
        To accept user input for an API request, capture the form submission
        using an
        <code>onSubmit</code> event handler and prevent the page from refreshing
        with
        <code>event.preventDefault()</code>. Extract the values using the{" "}
        <code>FormData</code> API, and convert them into a query string using{" "}
        <code>URLSearchParams</code> to append to your fetch URL. Once the API
        returns the JSON response, parse the array, transform the items into
        React elements using <code>.map()</code> (ensuring each item gets a
        unique <code>key</code>), and update your component state to render the
        results dynamically.
      </p>
      <p>
        When the component mounts, the <code>useEffect</code> hook triggers
        <code>componentDidMount()</code>, which calls the asynchronous{" "}
        <code>handleData()</code> function to fetch character data. Once the API
        returns the JSON array, the items are transformed into React elements
        using <code>.map()</code> with the <code>toCharacters</code> callback
        function (assigning a unique <code>key</code> combining the index and
        full name), and the
        <code>characters</code> state is updated to render the results
        dynamically inside the <code>&lt;section&gt;</code>.
      </p>
    </main>
  );

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }
  
  function toCharacters(dataItem, index) {
    const key = index + dataItem.fullName;
    const details = (
      <details key={key}>
        <summary>{dataItem.fullName}</summary>
        <figure>
          <img src={dataItem.image} alt={dataItem.fullName} />
          <figcaption>{dataItem.interpretedBy}</figcaption>
        </figure>
      </details>
    );
    return details;
  }

  async function handleData() {
    const response = await fetch(
      "https://potterapi-fedeperin.vercel.app/en/characters",
    );

    const data = await response.json();
    console.log(data);

    const details = data.map(toCharacters);
    setCharacters(details);
  }
}
