import { useEffect, useState } from "react";
import  {createWebClient}  from '../../../prisma-template/web-client.js';
import schema from '../../../prisma-template/json-schema.json';

export function usePrisma(password) {
  const [prisma, setPrisma] = useState();

  useEffect(componentDidUpdate, [password]);

  //4LXplghghL7u5w0s
  return prisma;

  function componentDidUpdate() {
    handlePrisma();
  }

  async function handlePrisma() {
    if (password) {
      const connectionString = `postgresql://postgres.hkfdeoajhsjfiihskipj:${password}@aws-0-ca-central-1.pooler.supabase.com:5432/postgres`;
      const prisma = await createWebClient({
        datasourceUrl: connectionString,
        jsonSchema: schema,
      });
      setPrisma(prisma);
    }
  }
}
