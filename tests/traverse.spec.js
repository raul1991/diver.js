describe("Traverse", () => {
  it("should throw an error with bad id", () => {
    setTestHTML(`
    <div id='container'>
      <input group="person" name="age" value="21"/>
    </div>`)

    // TODO: Should handle not finding an element
    // instead of using an invalid an element
    expect(() => diver.traverse('bad-id')).toThrow(new TypeError("Cannot read property 'toLowerCase' of undefined"));
  });
});
