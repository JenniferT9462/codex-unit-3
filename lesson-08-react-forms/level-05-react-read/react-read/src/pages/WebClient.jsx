import { useState, Fragment } from "react";
import DbPassword from "../components/DbPassword";
import { usePrisma } from "../hooks/usePrisma";
import Read from "../components/Read";


export default function WebCLient() {
  // console.log("WebClient rendered");
   const [password, setPassword] = useState();
   const [data, setData] = useState([]);

   const prisma = usePrisma(password);

   

    return (
      <main>
        <DbPassword setPassword={setPassword}/>
        <Read prisma={prisma} setData={setData}/>
        <output>
          <dl>{data.map(toDetails)}</dl>
        </output>
      
      </main>
    );
}

function toDetails(item, index) {
  const key = `${index}-${item.name}`;
 
  const details = (
    <Fragment key={key}>
      <dt className="font-bold">
        {item.name} (ID: {item.id})
      </dt>
      <dd className="mb-2">
        <p>Price: ${item.price}</p>
        {item.imageUrl && (
          <img
            src={item.src}
            alt={item.name}
            className="w-32 h-32 object-cover my-2 rounded"
          />
        )}
      </dd>
    </Fragment>
  );

  return details;
}
