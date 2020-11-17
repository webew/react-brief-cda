const promise1 = new Promise((resolve, reject) => {
    resolve("foo");
});

promise1.then((value) => {
    console.log(value);
});

console.log(promise1);
console.log("Des promesses, toujours des promesses !..");

// expected output: [object Promise]

// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log("calling");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
// }

// asyncCall();
