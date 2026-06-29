export function UpdateButton({ phase, setPhase, count, setCount }) {
  let disabled = false;
  if (phase === "unmount") disabled = true;
  return (
    <button onClick={handleClick} disabled={disabled}>
      Update
    </button>
  );

  function handleClick(event) {
    event.preventDefault();
    setPhase("update");
    setCount(count + 1);
  }
}
