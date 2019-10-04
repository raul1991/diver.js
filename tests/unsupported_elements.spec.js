describe("Unsupported Elements", () => {
  // TODO: List elements to ignore.
  it("should not create any properties for these elements", () => {
    verifyDiver(`
      <div>
      </div>
      `,
      {}
    );
  });
});
