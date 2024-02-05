describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Wazzup! ${name}`;
    }
    expect(sayHello("Squidward")).toBe("Wazzup! Squidward");

    // void is not return anything

    function printHello(name: string): void {
      console.info(`Wazzup ${name}`);
    }
    printHello("Patrick");
  });
  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Sandy")).toBe("Hello Sandy");
  });

  it("should support rest params", () => {
    function sum(...val: number[]): number {
      let total: number = 0;
      for (const i of val) {
        total += i;
      }
      return total;
    }

    expect(sum(1, 1, 1, 1, 1)).toBe(5);
  });
  it("should support optional paramater", () => {
    function sayHello(firstName: string, lastName?: string): string {
      return !lastName ? `Hello ${firstName}` : `Hello ${firstName} ${lastName}`;
    }

    expect(sayHello("Squidward")).toBe("Hello Squidward");
    expect(sayHello("Squidward", "Tortelini")).toBe("Hello Squidward Tortelini");
  });
  it("should support function overloading", () => {
    function callMe(val: number): number;
    function callMe(val: string): string;
    function callMe(val: any): any {
      if (typeof val === "string") {
        return val.toUpperCase();
      } else if (typeof val === "number") {
        return val * 10;
      } else {
        throw new Error("The hell are you doing");
      }
    }
    expect(callMe("Arch User")).toBe("ARCH USER");
    expect(callMe(10)).toBe(100);
  });
  it("should support function as parameter", () => {
    function sayHello(name: string, callback: (name: string) => string): string {
      return `Hello ${callback(name)}`;
    }
    function toUpperCase(name: string): string {
      return name.toUpperCase();
    }

    // using regular callback function

    expect(sayHello("Plankton", toUpperCase)).toBe("Hello PLANKTON");

    // using arrow function

    expect(sayHello("Krab", (name: string): string => name.toUpperCase())).toBe("Hello KRAB");
  });
});
