// function to get id in url
function getMovieIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("detail_id");
}

// function fetch movie by id
async function fetchMovieDetails(movieId) {
  const API_KEY = "8adfd9df8bd6334c722f32cb9723de43";
  const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=fr-FR`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des détails du film");
    }
    const movieDetails = await response.json();
    console.log(movieDetails);
    displayMovieDetails(movieDetails);
  } catch (error) {
    console.error(error);
    document.querySelector(".detail").innerText =
      "Erreur lors de la récupération des détails du film.";
  }
}

//Fonction pour afficher les détails du film sur la page
function displayMovieDetails(movie) {
  const movieDetailsDiv = document.querySelector(".detail");
  console.log(movieDetailsDiv)
  movieDetailsDiv.innerHTML = `
    <div class="dettaile-img">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      </div>
      <div class="bx-detail-info">
        <h3 class="name">${movie.name}</h3>
        <p class="genre">Genre : ${movie.genres[0].name} <span class="lang"> lanaue : ${movie.spoken_languages[0].name} </span></p>
        <p class="date"> <span class="create">create by : ${movie.created_by.length>0?`${movie.created_by[0].name}`:`no name`} </span> <span class="date-first"> first-aire-date : ${movie.first_air_date} </span></p>
        <p class="episode">number episode : ${movie.number_of_episodes} </p>
        <p class="overwiew">
          ${movie.overview?`${movie.overview}`:"no description"}
        </p>
        <div class="detail-btn">
          <div class="first-btn">
            <button class="btn"><box-icon name='play'></box-icon> play now </button>
            <button class="btn"><box-icon type='solid' name='bookmark-star'></box-icon> add watchlist </button>
          </div>
          <div class="second-btn">
            <button class="btn"><box-icon name='down-arrow-alt'></box-icon> download</button>
            <button class="btn"><box-icon name='share-alt'></box-icon> shard</button>
            <button class="btn"><box-icon name='like'></box-icon> like</button>
          </div>
        </div>
      </div>
  `;
}

window.onload = function () {
  const movieId = getMovieIdFromUrl();
  console.log(movieId);
  if (movieId) {
    fetchMovieDetails(movieId);
  } else {
    r;
    console.log("erreur");
    // document.getElementById('movie-details').innerText = 'Aucun ID de film trouvé dans lURL.';
  }
};

