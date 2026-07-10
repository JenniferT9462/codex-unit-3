export default function Main() {
    return (
      <main>
        <p>
          Creating a custom React template involves setting up a clean, minimal
          foundation that you can duplicate whenever you start a new project.
          You begin by initializing a base build tool like Vite, purging all the
          default boilerplate styling and placeholder code, and installing your
          core packages. From there, you organize a standard folder structure
          with dedicated directories for things like assets, components, and
          hooks, and then wire up your essential global configurations. By
          saving this streamlined architecture to a boilerplate repository, you
          eliminate the tedious, repetitive setup work and can launch directly
          into building features next time.
        </p>
        <button onClick={handleClick}>Click event</button>
      </main>
    );
}

function handleClick(event) {
  event.preventDefault();
  debugger;
  console.log(
    "To use a click event handler in React, you define a function (like handleClick) " +
      "that contains the logic you want to execute when a user interacts with an element. " +
      "Then, instead of using HTML's lowercase 'onclick' attribute, you pass that function reference " +
      "directly to React's camelCase 'onClick' attribute on the desired element. " +
      "React automatically forwards a synthetic event object to your function, giving you access " +
      "to details about the click interaction if you need them!",
  );
}