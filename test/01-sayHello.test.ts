import { sayHello } from "../src/01-function-sayhello";

describe("sayHello", (): void => {
  it("should return Hello madoka", (): void => {
    expect(sayHello("madoka")).toBe("Hello madoka");
  });
});
