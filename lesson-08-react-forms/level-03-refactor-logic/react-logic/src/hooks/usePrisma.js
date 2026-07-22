import { useState, useEffect } from "react";
import { createWebClient } from "../../../web-client.js";
import schema from "../../../json-schema.json";

export function usePrisma(password, setData) {
  const [inputValue, setInputValue] = useState(false);
  const [prisma, setPrisma] = useState(null);

  useEffect(componentDidUpdate, [password]);

  function componentDidUpdate() {
    setInputValue(true);

    if (password && typeof password === "string" && password.trim() !== "") {
      handleData();
    }
  }

  async function handleData() {
    const client = await createWebClient({
      jsonSchema: schema,
      datasourceUrl: `postgresql://postgres.hkfdeoajhsjfiihskipj:${password}@aws-0-ca-central-1.pooler.supabase.com:5432/postgres`,
    });
    const results = await client.products.findMany();
    setData(results);
    setPrisma(client);
  }

  return prisma;
}
