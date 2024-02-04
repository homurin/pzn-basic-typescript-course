import { Employee, Manager } from "@/src/14-extending-interface/index";

describe("Extending Interface", () => {
  it("should support in typescript", () => {
    const employee: Employee = {
      id: "0001",
      name: "Spongebob Squarepants",
      division: "chef",
    };

    const manager: Manager = {
      id: "0000",
      name: "Eugine Crab",
      division: "Owner",
      numberOfEmployee: 2,
    };

    console.info(employee);
    console.info(manager);
  });
});
