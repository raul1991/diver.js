describe("Select boxes", () => {
  it("should create a key value pair from the name and default option", () => {
    verifyDiver(
      `<select name="cars">
        <option>Lamborghini</option>
        <option>Porsche</option>
        <option>Maybach</option>
      </select>`,
      { cars: 'Lamborghini' }
    );
  });

  it("should create a key value pair from the name and the selected option", () => {
    verifyDiver(
      `<select name="cars">
        <option>Lamborghini</option>
        <option selected="selected">Porsche</option>
        <option>Maybach</option>
      </select>`,
      { cars: 'Porsche' }
    );
  });
});