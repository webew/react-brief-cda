import Person from "./Person.js";

export default class Jedi extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    teach() {
        console.log(
            `My name is ${convertName(this.name)}. I'm teaching ${this.subject}`
        );
    }
}
