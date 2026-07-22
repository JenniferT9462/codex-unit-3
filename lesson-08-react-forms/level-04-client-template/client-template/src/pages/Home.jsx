export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Creating an SPA Template</h2>
      <p className="text-gray-600 dark:text-gray-300">
        To create templates for the Prisma Client in Node.js and the Prisma web
        client in React, you set up the Prisma schema and client initialization
        in a dedicated template folder for Node.js backend logic, while in
        React, you encapsulate client instantiation inside custom hooks (like{" "}
        <code>usePrisma</code>) and manage credentials via separate form
        components. This cleanly separates data-fetching and connection logic
        from UI rendering.
      </p>
    </main>
  );
}
