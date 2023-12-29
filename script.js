"use stric";

const genresContainer = document.querySelector(".container");

const request = new XMLHttpRequest();

request.open("GET", "https://binaryjazz.us/wp-json/genrenator/v1/genre/1");
request.send();
request.addEventListener("load", function () {
  const data = this.responseText;
  console.log(data);

  const html = `<p class = "genre">${data}</p>`;

  genresContainer.insertAdjacentHTML("beforeend", html);
});

function generate() {
  location.reload();
}
