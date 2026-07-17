import {useState, useEffect} from 'react';

export default function Main() {
  const [apiKey, setApiKey] = useState("");
  const [didMount, setDidMount] = useState(false)

  useEffect(componentDidMount, []);

    return (
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">
            Password:
            <input type="password" name="password"/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <output>{"API Key: " + apiKey}</output>
        <p>
          how to save an API key with a handler function and restore the API
          when the component mounts.
        </p>
      </main>
    );

    function handleSubmit(event){
      event.preventDefault();
      const form = event.target;
      const value = form.elements.password.value;
      sessionStorage.setItem("apiKey", value);
      setApiKey(value);
    }

    function componentDidMount() {
      setDidMount(true)
      const storedValue = sessionStorage.getItem("apiKey");
      setApiKey(storedValue);
    }
}