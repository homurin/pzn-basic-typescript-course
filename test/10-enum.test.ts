import { Distro, ReleaseType, Type } from "../src/10-enum/index";

describe("Enum", () => {
  it("should support int typescript", () => {
    const distro: Distro = {
      id: "0001",
      name: "Ubuntu",
      desc: "Best debian based distro :)",
      type: Type.SERVER,
      releaseType: ReleaseType.LTS,
    };
    console.info(distro);
  });
});
