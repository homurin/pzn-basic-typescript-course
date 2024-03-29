describe("array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["kratos", "deimos", "zeus"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });
  it("support read only array", () => {
    // read only array

    const fourEmperor: ReadonlyArray<String> = [
      "Shirohige Edward Newgate",
      "Akagami no Shanks",
      "Hyakuju no Kaido",
      "Bigmom Charlotte Linlin",
    ];

    // uncomment for the example and run npx tsc

    // fourEmperor[0] = "Kurohige Marsall D Teach";

    console.info(fourEmperor);
  });
  it("should support tuple", () => {
    const person: readonly [string, string, number] = ["Sosuke", "Aizen", 100];
    console.info(person);
  });
});
