import Slides from "./Slides";
export default function Main() {
    return (
      <main>
        <Slides />
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Understanding Custom Hooks
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To create a custom hook, extract component logic (like useState and
            useEffect) into a JavaScript function whose name starts with "use".
            Custom hooks allow you to reuse stateful logic across multiple
            components without duplicating code. To use them, simply call the
            hook function at the top level of your functional component,
            grabbing any returned values or states needed for rendering.
          </p>
        </div>
      </main>
    );
}