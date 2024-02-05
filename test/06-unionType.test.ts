describe("Union", () => {
  it("should support in typescript", () => {
    let sample: number | string | boolean = "Ubuntu";
    console.info(sample);
    sample = 100;
    console.log(sample);
    sample = true;
    console.log(sample);
    // this code below will return error
    // sample = ['Debian'];
    // console.log(sample);
  });
  it("should support typeof operator", () => {
    function process(val: number | string | boolean) {
      if (typeof val === "string") {
        return val.toUpperCase();
      } else if (typeof val === "number") {
        return val * 2;
      } else {
        return !val;
      }
    }
    expect(process("debian")).toBe("DEBIAN");
    expect(process(1)).toBe(2);
    expect(process(true)).toBe(false);
  });
});
