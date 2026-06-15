const encoded =
  "KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoKKiAgICAgICAgICAgICAgICAgICAgWW91IHJhbiBKYXZhU2NyaXB0IHdpdGhvdXQgYSBicm93c2VyISAgICAgICAgICAgICAgICAgICAgICoKKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoKKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioK";

console.log("\n");
decodeAndReveal();

function decodeAndReveal() {
  const text = Buffer.from(encoded, "base64").toString("utf8");
  const interval = setInterval(printChar, 6);

  let i = 0;
  function printChar() {
    if (i < text.length) {
      process.stdout.write(text[i]);
      i += 1;
    } else {
      clearInterval(interval);
      process.stdout.write("\n");
      process.exit(0);
    }
  }
}
