// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 300);
// });

// promise1.then((value) => {
//     console.log(value);
//     // expected output: "foo"
// });

// console.log(promise1);
// expected output: [object Promise]

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 2000);
    });
}

async function asyncCall() {
    console.log("calling");
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

asyncCall();
