describe("Optional", () => {
  it("should support null and undefined", () => {
    // ?: will return undefined
    function sayHello(name?: string | null) {
      if (name) {
        return `Hello ${name}`;
      }
      return "Hello";
    }
    console.info(sayHello("Gary"));
    const name: string | undefined = undefined;
    console.info(sayHello(name));
    console.info(sayHello(null));
  });
});
