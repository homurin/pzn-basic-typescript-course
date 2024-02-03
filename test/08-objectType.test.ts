describe("Object", () => {
  it("should support in typescript", () => {
    const distro: { id: string; name: string } = {
      id: "1",
      name: "Ubuntu",
    };

    console.info(distro);
    // this will return error
    // distro.id = 1
    distro.id = "1111";
    distro.name = "Mint";
  });
});
