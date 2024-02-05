describe("Intersection type", () => {
  it("should support in typescript", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }
    // if new interface has no new props, better using intersection type
    // interface domain extends HasName, HasId { no new props }

    // this is better
    type Domain = HasName & HasId;

    const domain: Domain = {
      id: "0001",
      name: "EndeavourOS",
    };

    console.info(domain);
  });
});
