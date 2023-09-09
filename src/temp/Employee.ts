import { Person } from "./Person";

export class Employee extends Person {
    setAge(age: number) {
        if (age < 18) throw new Error("A pessoa deve ser maior de 18")
        super.setAge(age);
    }
}