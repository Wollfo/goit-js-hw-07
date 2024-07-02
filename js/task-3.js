const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", nameUpdate);

function nameUpdate(event) {
  const newNameValue = nameInput.value.trim();
  nameOutput.textContent = newNameValue === "" ? Anonymous : newNameValue;
}
