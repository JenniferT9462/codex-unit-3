export function LifecycleMessage({ phase, count }) {
  let message = "";
  if (phase === "mount")
    message =
      "The Footer component has mounted. Inspect the DOM to see that the footer is there.";
  if (phase === "update")
    message = `The Footer component has updated ${count} time(s). Inspect the DOM to see that the footer has changed.`;
  if (phase === "unmount")
    message =
      "The Footer component is not mounted. Inspect the DOM to see that the footer is not there.";
  return (
    <section id="lifecycle">
      <p>{message}</p>
    </section>
  );
}
