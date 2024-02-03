describe("Any", () => {
  it("should support any in typescript", () => {
    const distro: any = {
      id: 1,
      name: "Ubuntu",
      releaseDate: 2004,
    };
    distro.basedOn = "debian";
    console.info(distro);
  });
});
