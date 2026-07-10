export default function Main() {
    return (
      <main>
        <p>
          To convert standard HTML webpage sections into React components, you
          slice up your monolithic HTML file into isolated, bite-sized files.
          Take a chunk of markup—like a standard &lt;section id="features"&gt;
          block—and wrap it inside its own JavaScript function that returns that
          exact JSX markup. Instead of managing one massive page, you create
          dedicated component files (like Features.jsx or Contact.jsx), export
          them, and then import them back into your main App layout. This makes
          your codebase incredibly clean, modular, and easy to scale.
        </p>
      </main>
    );
}