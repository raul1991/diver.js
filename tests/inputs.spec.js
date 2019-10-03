describe("Text fields", () => {
  it("should create a key value pair from name and value", () => {
    verifyDiver(
      `<input type="text" name="first_name" placeholder="First Name" value="cafebabe">`,
      { first_name: "cafebabe" }
    );
  });
});

describe("Checkbox fields", () => {
  it("should create a key value pair from name and checked", () => {
    verifyDiver(`<input type="checkbox" name="isChecked" checked>`, {
      isChecked: true
    });
  });
});
