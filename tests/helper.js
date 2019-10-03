function verifyDiver(html, expected, id) {
  const testContainer = document.createElement("div");
  testContainer.setAttribute("id", "diver-test");
  testContainer.insertAdjacentHTML("afterbegin", html);

  expect(diver.traverse(id || testContainer, {})).toEqual(expected);
}
