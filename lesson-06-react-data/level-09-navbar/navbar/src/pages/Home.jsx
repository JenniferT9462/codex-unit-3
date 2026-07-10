export default function Home() {
    return (
      <main>
        <p className="m-6">
          <strong>Guide:</strong> To successfully use a TW Elements navbar
          within a React Router environment, raw HTML templates must first be
          sanitized into valid JSX syntax (converting classes and closing
          standalone tags). Interactive features like collapse menus require
          initializing the library components inside a React{" "}
          <code>useEffect</code> hook to tie into the DOM mount phase. Finally,
          replace native <code>&lt;a href="..."&gt;</code> tags with React
          Router's <code>&lt;NavLink to="..."&gt;</code> component. This
          prevents default browser reloads, preserving component state and
          enabling instant, seamless client-side page transitions.
        </p>
      </main>
    );
}