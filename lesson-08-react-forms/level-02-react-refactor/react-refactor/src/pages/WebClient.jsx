import { useInputTWE } from "../hooks/useInputTWE.js";
import { useState, useEffect, Fragment } from "react";
import { createWebClient } from "../../../web-client.js";
import schema from "../../../json-schema.json";
import DbPassword from "../components/DbPassword.jsx";
import Create from "../components/Create.jsx";

export default function WebClient() {
  const [password, setPassword] = useState();
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
      <DbPassword setPassword={setPassword} />
      <Create prisma={prisma} setData={setData}/>
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
