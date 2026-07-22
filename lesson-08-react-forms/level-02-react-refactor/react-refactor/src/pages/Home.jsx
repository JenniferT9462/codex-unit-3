export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Creating an SPA Template</h2>
      <p className="text-gray-600 dark:text-gray-300">
        To separate larger components into smaller, more manageable pieces,
        identify logical sections of your UI (like a header, a list, or a form)
        and extract them into their own functions or files. Data flows downward
        from parent to child components as attributes called{" "}
        <strong>props</strong> (e.g., &lt;ChildComponent myData=
        {parentValue} /&gt;). Conversely, for a child to send information or
        trigger state changes back up, the parent passes a{" "}
        <strong>callback function</strong> down as a prop (e.g.,
        &lt;ChildComponent updateParent={handleChildUpdate} /&gt;).
      </p>
    </main>
  );
}
