export function MountButton({ phase, setPhase }) {
  let disabled = true;
  if (phase === "unmount") disabled = false;
  return (
    <button onClick={handleClick} disabled={disabled}>
      Mount
    </button>
  );

  function handleClick(event) {
    event.preventDefault();
    setPhase("mount");
  }
}
