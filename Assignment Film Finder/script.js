const filmPosterContainer = document.getElementById("film_poster_container");
let selectedMovies = movies;

const addMoviesToDom = function (movie) {
  const movieAdd = document.createElement("li");
  const poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = movie.poster;
  poster.id = movie.imdbID;
  poster.alt = movie.title;
  poster.addEventListener("click", openWebsite);
  movieAdd.appendChild(poster);
  filmPosterContainer.appendChild(movieAdd);
};

let openWebsite = function (e) {
  imdbID = "https://www.imdb.com/title/" + e.target.id;
  window.open(imdbID);
};

let showMovies = function () {
  selectedMovies.forEach((item) => {
    addMoviesToDom(item);
  });
};

let input = document.getElementById("id_input_text");

input.addEventListener("click", function () {
  document.getElementById("input").checked = true;
});

input.addEventListener("keyup", function (e) {
  let radioButton = document.getElementById("input");
  radioButton.value = input.value;
  if (e.keyCode === 13) {
    changeSelection();
  }
});

let changeSelection = function () {
  let nrOfChildren = selectedMovies.length;
  for (i = 0; i < nrOfChildren; i++) {
    let child = filmPosterContainer.children[0];
    filmPosterContainer.removeChild(child);
  }

  let filter = document.querySelector(
    'input[name="filter_button"]:checked'
  ).value;
  selectedMovies = movies.filter((movie) => {
    return movie.title.toUpperCase().includes(filter.toUpperCase());
  });

  selectedMovies.forEach((item) => {
    addMoviesToDom(item);
  });
};
