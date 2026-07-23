export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Creating an SPA Template</h2>
      <p className="text-gray-700">
        To delete data matching user input using the Prisma web client in React,
        pass the input value (such as a product ID) to a Prisma delete query
        using shorthand syntax inside a form submission handler. Using a custom
        hook like <code>useDelete</code>, you can execute{" "}
        <code>prisma.products.delete "where"</code> and return the deleted
        result or error state back to the UI component.
      </p>
    </main>
  );
}
