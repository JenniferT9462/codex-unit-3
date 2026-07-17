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
        The <strong>key</strong> attribute provides a unique identity to
        elements in a list, helping the framework efficiently identify which
        items have changed, been added, or been removed. The second parameter of
        the <strong>toDetails</strong> function typically passes additional
        state or context—such as an ID or an options object—to safely navigate
        or route the user to that specific item's details view.
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
    const key = index + formInput.label;
    const details = (
      <details key={key}>
        <summary>{formInput.label}</summary>
        <p>{formInput.value}</p>
      </details>
    );
    return details;
  }
}
