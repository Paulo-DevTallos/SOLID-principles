export class Person {
    age: number;

    constructor() {
        this.age = 0;
    }

    setAge(age: number) {
        if (age < 0) throw new Error("Idade invalida, deve ser maior que zero")
        this.age = age;
    }
}