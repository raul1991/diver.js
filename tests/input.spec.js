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

  it("should create a key value pair from name and empty value for unchecked", () => {
    verifyDiver(`<input type="checkbox" name="isChecked" >`, {
      isChecked: '' // TODO: Shouldn't this be false?
    });
  });
});

describe("Radio fields", () => {
  // TODO: Should return the value and not true/false if an item is checked.
  xit("should create a key value pair from name and checked", () => {
    verifyDiver(`
      <div>
        <input type="radio" name="color" value='blue'>
        <input type="radio" name="color" value='red' checked>
        <input type="radio" name="color" value='green'>
      </div>`, {
      color:  'red'
    });
  });

  it("should create a key value pair from name and empty value for unchecked", () => {
    verifyDiver(`
      <div>
        <input type="radio" name="color" value='blue'>
        <input type="radio" name="color" value='red'>
        <input type="radio" name="color" value='green'>
      </div>`, {
      color:  ''
    });
  });
});

