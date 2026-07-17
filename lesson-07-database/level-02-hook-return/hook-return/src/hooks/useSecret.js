import { useState, useEffect } from "react";

export function useSecret(secretKey) {
      const [secretValue, setSecretValue] = useState("");
      const [didMount, setDidMount] = useState(false);

      useEffect(componentDidMount, []);

      function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const value = form.elements[secretKey].value;
        sessionStorage.setItem(secretKey, value);
        setSecretValue(value);
      }

      function componentDidMount() {
        setDidMount(true);
        const storedValue = sessionStorage.getItem(secretKey);
        setSecretValue(storedValue);
      }

      return [secretValue, handleSubmit, didMount]
}
