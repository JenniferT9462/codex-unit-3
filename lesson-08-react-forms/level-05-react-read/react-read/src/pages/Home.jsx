export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Creating an SPA Template</h2>
      <p className="text-gray-700 leading-relaxed my-4">
        To read database records that match user input using the Prisma web
        client in React, capture input values from a form and construct a
        dynamic <code>where</code> filter object. Pass this object to the{" "}
        <code>prisma.products.findMany({where})</code> method within a form
        submission handler or custom hook. Once Prisma fetches the matching
        results, update your component state (using <code>setData</code>) to
        trigger a re-render and display only the filtered database items to the
        user.
      </p>
    </main>
  );
}
