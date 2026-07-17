import { useSecret } from "../hooks/useSecret";

export default function Main() {
    const [secretValue, handleSubmit, didMount] = useSecret("secretKey");

    return (
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="secretValue">
            Secret Value:
            <input type="password" name="secretKey" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <output>{"Secret Value: " + secretValue}</output>
        <p>
          how give and receive values from custom hooks, and how to use bracket
          notation for objects.
        </p>
      </main>

    
    );
      
}