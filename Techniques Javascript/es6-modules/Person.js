export default class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log("I'm speaking");
    }
}

export function convertName(name) {
    return name.toUpperCase();
}
