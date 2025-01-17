import { createCard, fetchJson } from "./counter";

// function to get id in url
function getMovieIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("detail_id");
}

const API_KEY = "8adfd9df8bd6334c722f32cb9723de43";

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
  const movieDetailsDiv = document.querySelector(".view");
  console.log(movieDetailsDiv)
  movieDetailsDiv.innerHTML = `
  <section class=" swiper" id="home">
        <!-- Swiper -->
        <div class="swiper-wrapper">
          <div class="swiper-slide container relatif">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="detail-text">
              <span>${movie.genres[0].name}</span>
              <h2>${movie.name}</h2>
              <p class="episode"> ${movie.number_of_episodes} episode.  ${movie.first_air_date}.fantastique.${movie.genres[0].name}</p>
              <div class="detail-button">
                <div class="sec1">
                  <button class="btn continu"><i class="fa-solid fa-play"></i> continue watching</button>
                  <button class="btn add"><i class="fa-regular fa-bookmark"></i> add watchlist</button>
                </div>
                <div class="sec2">
                  <button class="btn dow"><i class="fa-solid fa-download"></i> download</button>
                  <button class="btn share"><i class="fa-solid fa-share-nodes"></i> share</button>
                  <button class="btn like"><i class="fa-solid fa-thumbs-up"></i> like</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="overview">
        <span>story line</span>
        <p class="descr">${movie.overview?`${movie.overview}`:"no description"}</p>
      </div>
  `;
}

function fetct(simlar_url,similarHtmlElemnt){
  fetchJson(simlar_url).then(data=>{
    console.log(data)
    console.log(data.results)
    if(data.results.length>0){
      console.log(data.results)
      const item7 = new createCard(data.results,similarHtmlElemnt)
      item7.createCardElement();
    }else{
      console.log("no movies")
      similarHtmlElemnt.innerText="no similar for this movie"

    }
  })
}

window.onload = function () {
  const similarHtmlElemnt = document.querySelector("#similar")
  const movieId = getMovieIdFromUrl();
  console.log(movieId);
  if (movieId) {
    fetchMovieDetails(movieId);
  } else {
    console.log("erreur");
    // document.getElementById('movie-details').innerText = 'Aucun ID de film trouvé dans lURL.';
  }
  const simlar_url = `https://api.themoviedb.org/3/tv/${movieId}/similar?api_key=${API_KEY}`

  fetct(simlar_url,similarHtmlElemnt);
};

/* similar slider */

var swiper = new Swiper(".simila", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});