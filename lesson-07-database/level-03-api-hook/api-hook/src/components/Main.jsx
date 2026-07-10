import { useBooksApi } from "../hooks/useBooksApi.js";


export default function Main() {
    
  const [data, handleSubmit] = useBooksApi();


    return (
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="maxItems">
            Max Number of Items:
            <input type="number" name="maxItems" required />
          </label>
          <button type="submit">Submit</button>
        </form>
        <output>{data.map(toDetails)}</output>
        <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
          To create a custom hook for API responses, you extract the stateful
          logic (like <code>useState</code>) and asynchronous fetch handlers
          (like <code>handleSubmit</code>) out of your UI component and move
          them into a standalone JavaScript function. This new function must
          follow React's naming convention by prefixing its name with "
          <code>use</code>" (e.g., <code>useBooksApi</code>). Inside the custom
          hook, you manage the data cycle and final state transitions. Finally,
          the hook returns an array or object containing the raw response data
          and any required action handlers back to the component. This
          completely decouples your API network management from your layout
          rendering, making the code cleaner, testable, and reusable across
          different views.
        </p>
      </main>
    );

    

    function toDetails(item, index) {
      const key = `book-${item.index}`;
      // A reliable fallback image URL (using a placeholder service)
      const fallbackCover =
        "https://placehold.co/150x220?text=No+Cover+Available";

      const details = (
        <details key={key}>
          <summary>{item.title}</summary>
          <figure>
            <img
              src={item.cover}
              alt={item.title}
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loops if fallback fails
                e.target.src = fallbackCover;
              }}
            />
            <figcaption>{item.description}</figcaption>
          </figure>
        </details>
      );

      return details;
    }
}