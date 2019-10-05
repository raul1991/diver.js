describe("Examples", () => {
  it("should work with the initial example", () => {
    verifyDiver(
      `<div id="container-top" style="margin:10%">
       <div class="hide">
          <div class="form-horizontal control-group"  style="margin-left: -118px">
              <label class="control-label" for="inputName">Name</label>
              <div class="controls">
                  <input class="input_fat span2" type="text"  name="first_name" group="personal_details" placeholder="First"
                  value="cafebabe">
                  <input class="input_fat span2" type="text"  name="last_name"  group="personal_details" placeholder="Last"
                  value="1991">
              </div>
          </div>
          <div class="form-horizontal control-group"  style="margin-left: -118px">
              <label class="control-label" for="inputAge">Age</label>
              <div class="controls">
                  <input class="input_fat span2" type="text"  name="age" group="personal_details.age" placeholder="Age" value="21">
              </div>
          </div>
          <div class="form-horizontal control-group"  style="margin-left: -118px">
              <label class="control-label" for="inputEmail">Email</label>
              <div class="controls">
                  <input class="input_fat span3" type="text" group="personal_details.email" name="email_id"  placeholder="Email" value="bugville@nowhere.com">
                  <input class="input_fat span3" type="checkbox" group="personal_details" name="isChecked">
                  <input class="input_fat span3" type="text" name="values" delimiter="," placeholder="delimited values" value="foo,bar,john-doe">
                  <select name="cars">
                      <option>Lamborghini</option>
                      <option>Porsche</option>
                      <option>Maybach</option>
                  </select>
              </div>
          </div>
      </div>
  </div>`,
      {
        values: ["foo", "bar", "john-doe"],
        cars: "Lamborghini",
        personal_details: {
          age: { age: "21" },
          email: { email_id: "bugville@nowhere.com" },
          first_name: "cafebabe",
          last_name: "1991"
        }
      },
      "container-top"
    );
  });
});
