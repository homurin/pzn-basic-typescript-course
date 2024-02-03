import { Category, Product } from "../src/07-alias-type/index";

describe("Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: "1",
      name: "Rolling Release",
    };
    const product: Product = {
      id: 1,
      name: "Open Suse Tumbleweed",
      price: 0,
      category,
    };

    // this will return error
    // product.basedOn = "independent";

    console.info(category);
    console.info(product);
  });
});
