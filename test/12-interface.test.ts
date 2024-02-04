import { Laptop } from "@/src/12-interface/index";

describe("interface", () => {
  it("should support in typescript", () => {
    const laptop: Laptop = {
      id: "0001",
      name: "Lenovo Ideapad 3",
      ram: 500,
      diskStorage: 1000,
    };
    console.info(laptop);
  });
  it("should support function interface", () => {
    interface AddFunction {
      (a: number, b: number): number;
    }
    const add: AddFunction = (a: number, b: number): number => {
      return a + b;
    };
    expect(add(1, 1)).toBe(2);
  });
  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }
    const distros: StringArray = ["Debian", "Ubuntu", "Zorin"];
    console.info(distros);
  });
  it("should suppoer indexable interface for non number index", () => {
    interface StringDictionary {
      name: string;
      basedOn: string;
    }

    const distro: StringDictionary = {
      name: "Ubuntu",
      basedOn: "Debian",
    };
    console.info(distro["name"]);
    console.info(distro["basedOn"]);
  });
});
