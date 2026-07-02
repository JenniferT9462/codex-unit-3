import { useState, useEffect } from "react";

export default function Main() {
  const [values, setValues] = useState([]);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
          Full Name: 
          <input type="text" name="fullName" />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" />
        </label>

        <label htmlFor="password">
          Password: 
          <input type="password" name="password" />
        </label>

        <button type="submit">Submit</button>
      </form>

      <output>{values}</output>
      <p>
        To render form values after they are submitted, store the submitted data
        as an array of objects in your state. Then, use the <code>map()</code>
        method to iterate over that array and dynamically return JSX elements
        (like list items or cards) for each submitted entry, ensuring you
        provide a unique <code>key</code> attribute to each element.
      </p>
    </main>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInputs = [
      {
        label: "Full Name",
        value: form.elements.fullName.value,
      },
      {
        label: "Email",
        value: form.elements.email.value,
      },
      {
        label: "Password",
        value: form.elements.password.value,
      },
    ];
    const details = formInputs.map(toDetails);
    setValues(details);
  }

  function toDetails(formInput) {
    const details = (
      <details>
        <summary>{formInput.label}</summary>
        <p>{formInput.value}</p>
      </details>
    );
    return details;
  }
}
