const animals = [
  "lion",
  "bear",
  "cat",
  "dog",
  "hamster",
  "bird",
  "giraffe",
  "goat",
  "fish",
  "turtle",
];
for (let i = 0; i < animals.length; i++) {
  console.log(`animal #${i + 1}: ${animals[i]}`);
}

function showItems(array) {
  for (let j = 0; j < array.length; j++) {
    console.log(`item #${j + 1}: ${array[j]}`);
  }
}

const grades = [67.8, 90, 89, 78, 87, 98, 100, 89.6, 91.3, 94.5];
showItems(grades);