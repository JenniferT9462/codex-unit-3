import { useState, useEffect } from "react";

export function useSecret(secretKey) {
  const [didMount, setDidMount] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(componentDidMount, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements[secretKey].value;
    sessionStorage.setItem(secretKey, value);
    setPassword(value);
  }

  function componentDidMount() {
    setDidMount(true);
    const storedValue = sessionStorage.getItem(secretKey);
    setPassword(storedValue);
  }

  return [password, handleSubmit];
}
