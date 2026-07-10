import { greet } from "./greet.js";
import { stats } from "./stats.js";
import { showNames } from "./showNames.js";
import names from "./names.js";

greet("Frontend Developer");
stats(3, 7);
showNames(names);
console.log(
  "Exports and imports are a way to split code into separate files or modules so parts of a program can be reused.",
);
