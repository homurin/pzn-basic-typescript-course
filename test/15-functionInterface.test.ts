import { Person } from "@/src/15-function-interface/index";

describe("Function Interface", () => {
  it("should support in typescript", () => {
    const person: Person = {
      name: "Ryan Dhal",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.info(person.sayHello("James Gosling"));
  });
});
