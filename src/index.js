function displayPoems(response) {
  new Typewriter("#generate-poems", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function PoemGenerator(event) {
  event.preventDefault();

  let input = document.querySelector("#input-title");
  let apiKey = "2f93ebcd2o4334a22af8dt6e0784500a";
  let context =
    " i love to write short poem that soothes hearts and provides a sense of calm and hope and feel love.Your mission is to generate five line poem in basic html. Make sure to follow the user instructions.Make sure to always include the title of the poem and the title should be bold and black. always separate the poem with a br.Please make sure to include the signature at the bottom of the poem and the signature should be inside <strong>element:Dzhivhuho Netshedzo, at the end of the poem";
  let prompt = `user instructions:generate a poem ${input.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#generate-poems");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${input.value}</div>`;

  axios.get(apiUrl).then(displayPoems);
}

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", PoemGenerator);
