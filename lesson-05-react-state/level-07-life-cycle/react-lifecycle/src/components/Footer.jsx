export function Footer({ count }) {
  let content = "CodeX Academy Level 3";
  for (let copy = 0; copy < count; copy++) {
    content = content + " • CodeX Academy Level 3";
  }
  return <footer>{content}</footer>;
}
