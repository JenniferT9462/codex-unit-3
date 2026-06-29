export default function Main() {
    let count = 0;
    function handleClick(event) {
      event.preventDefault();
      count = count + 1;
      console.log("The count is now: ", count);
    }
    return (
      <main>
        <p>
          A stateless variable is a standard JavaScript variable (like one
          declared with let or const) that React does not keep track of. When
          the button is clicked, the variable's value does successfully update
          behind the scenes in memory, but nothing changes on the screen. This
          happens because React requires special "state" triggers (like the
          useState hook) to know it needs to re-render the component. Without
          state, React won't rebuild the HTML UI, meaning your webpage will look
          exactly the same even though your variable is changing in the
          background.
        </p>
        <p>Current Count: {count}</p>
        <button onClick={handleClick}>Click counter</button>
      </main>
    );
}