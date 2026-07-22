export default function Home() {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-2">Creating an SPA Template</h2>
      <p className="text-gray-600 dark:text-gray-300">
        To refactor logic into a custom hook, isolate your stateful logic (like
        useState and useEffect) into a separate function that starts with 'use'
        so React recognizes it as a hook. Pass any dynamic variables your logic
        requires as arguments (parameters) to this custom hook function.
        Finally, return an array or object containing the specific state values
        and handler functions your components need so they can unpack and use
        them.
      </p>
    </main>
  );
}
