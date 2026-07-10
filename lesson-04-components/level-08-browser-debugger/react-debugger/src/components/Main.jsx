export default function Main() {
  const message = 
    "To start the debugger for a React project, you first need to open your browser's " +
    "Developer Tools by pressing F12 or right-clicking the page and selecting 'Inspect'. " +
    "Once DevTools is open, refresh your page. If you have a 'debugger;' statement written " +
    "directly in your code, the browser will automatically pause execution right on that exact " +
    "line, allowing you to peek inside variables, step through execution line by line, and " +
    "examine the current state of your application in real-time.";

    return (
      <main>
        <p>
          {message}
        </p>
      </main>
    );
}