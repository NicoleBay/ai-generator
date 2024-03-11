function displayResponse(response) {
  let responseElement = document.querySelector("#generated-response");
  responseElement.innerHTML = response.data.answer;

  new Typewriter("#generated-response", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateForm(event) {
  event.preventDefault();

  let fieldInput = document.querySelector("#search-field");
  let apiKey = "b13b374bef64oac0e068e7t94aa7beef";
  let context =
    "You are a highly skilled chef that is celebrated for crafting easy and healthy recipes with the ingredients given by the user instruction. Provide the answer in basic HTML. Include a note at the end of the recipe to offer suggestions on how to savor this dish to the fullest, including ideal pairings or potential variations. Sign the recipe with `AI Chef` inside a <strong> element at the end of the recipe, keep this alinged to the centre.";
  let prompt = `User instructions: Create an easy recipe with ${fieldInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let responseElement = document.querySelector("#generated-response");
  responseElement.classList.remove("hidden");
  responseElement.innerHTML = `<div class="generating">⏳ Generating your recipe using ${fieldInput.value}, please wait...</div>`;

  axios.get(apiUrl).then(displayResponse);
}

let formElement = document.querySelector("#generate-form");
formElement.addEventListener("submit", generateForm);
