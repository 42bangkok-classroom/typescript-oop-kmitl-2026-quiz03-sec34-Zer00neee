export class User {
    private firstname: string;
    private lastname: string;
    private age: number;
    public static BIRTH_YEAR: number = 2000;

    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    }

    setFirstname(name: string): void {
        this.firstname = name;
    }

    setLastname(name: string): void {
        this.lastname = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }

    getFullName(): string {
        return this.firstname + " " + this.lastname;
    }
}