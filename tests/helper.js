
function verifyDiver(html, expected, id) {
  let existingTestContainer = document.getElementById("diver-test");
  if (existingTestContainer) {
    document.body.removeChild(existingTestContainer);
  }

  const testContainer = document.createElement("div");
  testContainer.setAttribute("id", "diver-test");
  testContainer.insertAdjacentHTML("afterbegin", html);
  document.body.appendChild(testContainer);
  
  expect(diver.traverse(id || testContainer, {})).toEqual(expected);
}
