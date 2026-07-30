import { useInputTWE } from "../hooks/useInputTWE.js";
import { useControlledInputs } from "../hooks/useControlledInputs.js";
import { useEffect } from 'react';


export default function Search({ setData }) {
  useInputTWE();

  const [name, handleName] = useControlledInputs();

  useEffect(componentDidUpdate, [name]);

  return (
    <form>
      <input
        onChange={handleName}
        type="text"
        className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
        placeholder="Product Name"
        aria-label="Search"
        id="productName"
        aria-describedby="button-addon3"
        name="productName"
      />
    </form>
  );

  function componentDidUpdate() {
    const data = { name };
    setData( [data] )
  }
}
