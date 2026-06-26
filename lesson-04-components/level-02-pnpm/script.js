console.log(
  "PNPM saves time and disk space by using a content-addressable store. " +
    "Instead of duplicating packages across projects, all files are saved in a single global store " +
    "on your machine, and hard links are created in your project's node_modules. " +
    "This means a package is only ever downloaded once, drastically speeding up installations " +
    "and reclaiming massive amounts of gigabytes across your development environment!",
);
