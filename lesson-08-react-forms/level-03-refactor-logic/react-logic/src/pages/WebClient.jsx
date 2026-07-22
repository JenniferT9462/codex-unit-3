import { useState, useEffect, Fragment } from "react";
import DbPassword from "../components/DbPassword.jsx";
import Create from "../components/Create.jsx";
import { usePrisma } from "../hooks/usePrisma.js";

export default function WebClient() {
  const [password, setPassword] = useState();
  const [data, setData] = useState([]);

  const prisma = usePrisma(password, setData);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <main>
      <DbPassword setPassword={setPassword} />
      <Create prisma={prisma} setData={setData} />
      <output>
        <dl>{data.map(toDetails)}</dl>
      </output>
    </main>
  );
  //4LXplghghL7u5w0s
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
