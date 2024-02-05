describe("Assertion", () => {
  it("should support type assertion", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }
    const person: any = {
      name: "Debian",
      basedOn: "independent",
    };

    const personAssertion: Person = person as Person;

    // this will return error, because person has no sayHello method
    // personAssertion.sayHello('Rick')

    // TS will return error, because person has no basedOn props on interface
    // but after compile, JS will leave it well lmao

    // console.info(personAssertion.basedOn);

    console.info(personAssertion);
  });
});
