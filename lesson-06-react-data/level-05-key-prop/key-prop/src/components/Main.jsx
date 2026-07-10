export default function Main() {
    return (
      <main>
        <p style={{ marginTop: "20px", fontStyle: "italic", color: "#555" }}>
          The <strong>key</strong> prop is a special string attribute you need
          to include when creating lists of elements in React. It helps React
          identify which items have changed, are added, or are removed, giving
          elements a stable identity. The second parameter of
          <code>toDetails</code> is the <code>index</code>, which represents the
          current item's position in the array. Combined with the input label,
          it creates a unique identifier for React's reconciliation process,
          though it remains invisible in the final browser DOM.
        </p>
      </main>
    );
}