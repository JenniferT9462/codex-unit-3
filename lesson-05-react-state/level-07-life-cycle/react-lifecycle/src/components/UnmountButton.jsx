export function UnmountButton({ phase, setPhase, setCount }) {
  let disabled = false;
  if (phase === "unmount") disabled = true;
  return (
    <button onClick={handleClick} disabled={disabled}>
      Unmount
    </button>
  );

  function handleClick(event) {
    event.preventDefault();
    setPhase("unmount");
    setCount(0);
  }
}
