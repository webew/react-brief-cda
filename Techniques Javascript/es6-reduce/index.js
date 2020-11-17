const valeurInitiale = 0;

const tab = [0, 1, 2, 3, 4];

const reduced = tab.reduce(
    (accumulateur, valeurCourante) => accumulateur + valeurCourante,
    valeurInitiale
);

console.log(reduced);

const tab2 = [
    ["Toto", "Tata"],
    ["Titi", "Tutu"],
];

const tabReduced = tab2.reduce((prev, curr) => {
    return [...prev, ...curr];
}, []);

console.log(tabReduced);
