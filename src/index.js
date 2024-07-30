function PoemGenerator(event) {
  event.preventDefault();

  new Typewriter("#generate-poems", {
    strings: "How do I love thee? Let me count the ways",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator");
formElement.addEventListener("submit", PoemGenerator);
