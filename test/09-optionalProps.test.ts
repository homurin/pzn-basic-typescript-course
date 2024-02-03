import { Product } from "@/src/09-optional-property/index";

describe("Optional Property", () => {
  it("should support in typescript", () => {
    const product: Product = {
      // id and name is mandatory
      id: 1,
      name: "Ubuntu",
      //   desc is optional
    };
    const laptop: { name: string; desc?: string } = {
      // name is mandatory
      name: "Lenovo v14 ADA",
      //   desc is optional
      desc: "My laptop",
    };

    console.info(product);
    console.info(laptop);
  });
});
