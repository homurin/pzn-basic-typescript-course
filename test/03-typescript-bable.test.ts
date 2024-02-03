describe("data types", () => {
  it("should must declare", () => {
    let name: String = "Mochammad Fajrin";
    let balance: Number = 10000;
    let isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    // uncomment this code below

    // name = 100; // error
    // balance = "true"; //error
    // isVip = 0; // error

    // JEST will return passed
    // because babel will compile this code to regular js
  });
});
