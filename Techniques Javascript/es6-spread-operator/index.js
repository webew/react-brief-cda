const colors = ["red", "green", "blue"];

const moreColors = ["white", "black", "grey"];

const allColors = [...colors, ...moreColors, "orange"];

console.log(allColors);

const first = { firstName: "John" };
const last = { lastName: "Doe" };

const johnDoe = { ...first, ...last, location: "United-States" };

console.log(johnDoe);
