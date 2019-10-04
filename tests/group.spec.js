describe("Group", () => {
  it("should create a property by group attribute", () => {
    verifyDiver(`<input group="person" name="age" value="21"/>`, {
      person: {
        age: "21"
      }
    });
  });

  it("should create nested properties by group attribute", () => {
    verifyDiver(
      `<input group="contact.person.details" name="age" value="21"/>`,
      {
        contact: {
          person: {
            details: {
              age: "21"
            }
          }
        }
      }
    );
  });
});
