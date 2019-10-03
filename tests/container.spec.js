describe("Containers", () => {
  it("should create a key value pair from the innerHTML", () => {
    verifyDiver(
      `<div>
        <div name="div-name"></div>
        <span name="span-name"></span>
        <h1 name="h1-name"></h1>
        <h2 name="h2-name"></h2>
        <h3 name="h3-name"></h3>
        <h4 name="h4-name"></h4>
        <h5 name="h5-name"></h5>
        <h6 name="h6-name"></h6>
      </div>`,
      { 
        'div-name': '',
        'h1-name': '',
        'h2-name': '',
        'h3-name': '',
        'h4-name': '',
        'h5-name': '',
        'h6-name': '',
        'span-name': ''
      }
    );
  });
});