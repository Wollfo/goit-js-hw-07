const form = document.querySelector(".login-form");
form.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const emailValue = elements.email.value.trim();
  const passwordValue = elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({ email: emailValue, password: passwordValue });
  }

  event.currentTarget.reset();
}
