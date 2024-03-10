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
    "You are an AI Assistant with lots of imagination and creativity for story telling. You love to create exciting stories, with the main character either being a hero or villian. You love to create beautiful settings, include fastinating small details, and add interesting side characters. Write a description, in basic HTML format, of a new story, the story can be any genre. Make the story concise and relevant to the defined keywords. Don't start the story with 'once upon a time', don't end the story on 'the end', and don't include images.";
  let prompt = `Generate a new short story that is based on the defined input ${fieldInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let responseElement = document.querySelector("#generated-response");
  responseElement.innerHTML =
    "Generating a short story for you, please wait...";

  axios.get(apiUrl).then(displayResponse);
}

let formElement = document.querySelector("#generate-form");
formElement.addEventListener("submit", generateForm);
