function generateForm(event) {
  event.preventDefault();

  new Typewriter("#generated-response", {
    strings: "Placeholder",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let formElement = document.querySelector("#generate-form");
formElement.addEventListener("submit", generateForm);
