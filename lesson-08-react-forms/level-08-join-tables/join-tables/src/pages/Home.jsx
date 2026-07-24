export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Creating an SPA Template</h2>
      <p className="text-gray-700 leading-relaxed my-4">
  
        To join and render nested data using the Prisma web client in React, pass an{" "}
        <code>{"include"}</code> object within your query (for example,{" "}
        <code>{"prisma.products.findMany({ include: { reviews: { include: { users: true } } } })"}</code>
        ) to fetch related records across tables. Once the nested data is loaded into React state, map over the parent items and render child arrays by passing them as props to dedicated sub-components or mapping over them with standard <code>dl</code>, <code>dt</code>, and <code>dd</code> elements.
      </p>
    </main>
  );
}
