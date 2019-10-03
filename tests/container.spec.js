describe("Containers", () => {
  it("should create a key value pair from the innerHTML", () => {
    verifyDiver(
      `<div>
        <div name="div_name"></div>
        <span name="span_name"></span>
        <h1 name="h1_name"></h1>
        <h2 name="h2_name"></h2>
        <h3 name="h3_name"></h3>
        <h4 name="h4_name"></h4>
        <h5 name="h5_name"></h5>
        <h6 name="h6_name"></h6>
      </div>`,
      { 
        div_name: '',
        h1_name: '',
        h2_name: '',
        h3_name: '',
        h4_name: '',
        h5_name: '',
        h6_name: '',
        span_name: ''
      }
    );
  });
});