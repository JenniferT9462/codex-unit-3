import { useSecret } from "../hooks/useSecret.js";
import { useInputTWE } from "../hooks/useInputTWE.js";
import { useState, useEffect, Fragment } from "react";
import { createWebClient } from "../../../web-client.js";
import schema from "../../../json-schema.json";


export default function WebClient() {
  const [password, handleSubmit] = useSecret("password");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(false);
  const [prisma, setPrisma] = useState(null);

  useInputTWE();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  useEffect(componentDidUpdate, [password]);

  return (
    <main>
      <form onSubmit={handleSubmit} className="relative flex">
        <input
          type="password"
          className="relative m-0 -me-0.5 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Database Password"
          aria-label="Search"
          id="exampleFormControlInput3"
          aria-describedby="button-addon3"
          name="password"
        />
        <button
          className="z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
          data-twe-ripple-init
          data-twe-ripple-color="white"
          type="submit"
          id="button-addon3"
        >
          Submit
        </button>
      </form>
      <form onSubmit={handleCreate}>
        <fieldset>
          <legend>Create Product Data</legend>
          {/* Product Name */}
          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="productName"
              placeholder="Enter Product Name"
            />
            <label
              htmlFor="productName"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Product Name:
            </label>
          </div>
          {/* Product Price */}
          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="number"
              step={0.01}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="productPrice"
              placeholder="Enter Product Price"
            />
            <label
              htmlFor="productPrice"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Product Price:
            </label>
          </div>
          {/* Product Image */}
          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="productImage"
              placeholder="Enter Image Source"
            />
            <label
              htmlFor="productImage"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Product Image URL:
            </label>
          </div>
        </fieldset>
        <button
          type="submit"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          Create Product
        </button>
      </form>
      <output>
        <dl>{data.map(toDetails)}</dl>
      </output>
    </main>
  );
  //4LXplghghL7u5w0s
  async function handleData() {
    const client = await createWebClient({
      jsonSchema: schema,
      datasourceUrl: `postgresql://postgres.hkfdeoajhsjfiihskipj:${password}@aws-0-ca-central-1.pooler.supabase.com:5432/postgres`,
    });
    const results = await client.products.findMany();
    setData(results);
    setPrisma(client);
  }

  function componentDidUpdate() {
    setInputValue(true);
    
    if (password && typeof password === "string" && password.trim() !== "") {
      handleData();
    }
  }

  async function handleCreate(event) {
    event.preventDefault();
    if(prisma) {
      const form = event.target;
      const data = {
        name: form.elements.productName.value,
        price: form.elements.productPrice.value,
        src: form.elements.productImage.value
      }
      await prisma.products.create({ data });
      const results = await prisma.products.findMany();
      setData(results);
      form.reset();

    }
  }
}

function toDetails(item, index) {
  const key = `${index}-${item.name}`;
  const details = (
    <Fragment key={key}>
      <dt>{item.name}</dt>
      <dd>
        <img src={item.src} alt={item.name} />
        <p>{item.price}</p>
      </dd>
    </Fragment>
  );

  return details;
}
