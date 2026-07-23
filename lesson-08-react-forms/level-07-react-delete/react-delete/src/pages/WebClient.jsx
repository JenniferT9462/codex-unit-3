import { useState, Fragment } from "react";
import DbPassword from "../components/DbPassword";
import { usePrisma } from "../hooks/usePrisma";
import Delete from "../components/Delete";


export default function WebCLient() {
   const [password, setPassword] = useState();
   const [data, setData] = useState([]);

   const prisma = usePrisma(password);

   

    return (
      <main>
        <DbPassword setPassword={setPassword}/>
        <Delete prisma={prisma} setData={setData}/>
        <output>
          <dl>{data.map(toDetails)}</dl>
        </output>
      
      </main>
    );
}

function toDetails(item, index) {
  const key = `${index}-${item.name}`;
 
  // const details = (
  //   <Fragment key={item.id}>
  //     <dt className="font-bold">{item.name || `Item #${item.id}`}</dt>
  //     <dd className="ml-4 mb-2">{JSON.stringify(item)}</dd>
  //   </Fragment>
  // );

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
