import { Gpu } from "@/src/13-read-only-props/index";

describe("Read Only Property", () => {
  it("should support in typescript", () => {
    const gpu: Gpu = {
      id: "0001",
      name: "Amd Ryzen 3 3200U",
      speed: 2.2,
    };
    // now obj props cannot reassign
    // uncomment code below, then it will return error when compile or from vscode
    // gpu.id = 0001
    console.info(gpu);
  });
});
