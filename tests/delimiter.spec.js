describe("Delimiter", () => {
  it("should create a property with an array value", () => {
    verifyDiver(`<input name="ages" delimiter="," value="21,25,30,39"/>`, {
      ages: ["21", "25", "30", "39"]
    });
  });

  it("should not make an array if a delimiter is not defined", () => {
    verifyDiver(`<input name="ages" value="21,25,30,39"/>`, {
      ages: "21,25,30,39"
    }); 
  })
});
