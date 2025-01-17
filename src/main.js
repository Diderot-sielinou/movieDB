import {
  createCard,
  createCardUpcoming,
  fetchJson,
  fetchResults,
  fetchTvById,
} from "./assets/js/counter.js";

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".today", {
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

var swiper = new Swiper(".air", {
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

var swiper = new Swiper(".popular", {
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

var swiper = new Swiper(".rated", {
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
var swiper = new Swiper(".ciner", {
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

/* display menu */
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const API_KEY = "8adfd9df8bd6334c722f32cb9723de43";
const BASE_URL_Airing_Today =
  "https://api.themoviedb.org/3/tv/airing_today?api_key=";
const BASE_On_The_Air = "https://api.themoviedb.org/3/tv/on_the_air?api_key=";
const BASE_URL_Popular = "https://api.themoviedb.org/3/tv/popular?api_key=";
const BASE_URL_To_Rated = "https://api.themoviedb.org/3/tv/top_rated?api_key=";

/*  section to append element*/

const airinghtml = document.querySelector("#airing");
const the_aihtml = document.querySelector("#the-air");
const popularhtml = document.querySelector("#popular");
const top_ratedhtml = document.querySelector("#top-rated");
const upcominHtml = document.querySelector(".all");
const resultHtml = document.querySelector(".result");
const pop = document.querySelector(".pop-up");
const close = document.querySelector(".close");

try {
  const airing_today = await fetchJson(`${BASE_URL_Airing_Today}${API_KEY}`);
  const item1 = new createCard(airing_today.results, airinghtml);
  item1.createCardElement();

  const the_air = await fetchJson(`${BASE_On_The_Air}${API_KEY}`);
  const item2 = new createCard(the_air.results, the_aihtml);
  item2.createCardElement();

  const popular = await fetchJson(`${BASE_URL_Popular}${API_KEY}`);
  const item3 = new createCard(popular.results, popularhtml);
  item3.createCardElement();

  const topRate = await fetchJson(`${BASE_URL_To_Rated}${API_KEY}`);
  const item4 = new createCard(topRate.results, top_ratedhtml);
  item4.createCardElement();

  const upcomin = await fetchJson(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=8adfd9df8bd6334c722f32cb9723de43`
  );
  const item5 = new createCardUpcoming(upcomin.results, upcominHtml);
  item5.createCardElement();
} catch (e) {
  console.log(e);
}

/* search part */
const input = document.querySelector("#search-input");
const button = document.querySelector("#search-btn");

document.querySelector(".search-box").addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = document.querySelector("#search-input").value;
  fetchResults(searchValue).then((data) => {
    if (data.results.length > 0) {
      const item6 = new createCard(data.results, resultHtml);
      item6.createCardElement();
      pop.classList.toggle("active");
      console.log(resultHtml);
    } else {
      console.log("pas de resultat");
    }
  });
});

close.addEventListener("click", () => {
  pop.classList.toggle("active");
});

/* favoreis list */



const favoriesTab =[];
localStorage.setItem("favorieTab",JSON.stringify(favoriesTab))

let books = document.querySelectorAll(".add-list");
books.forEach((book) => {
  book.addEventListener("click", () => {
    const movieId = book.getAttribute("data_id")
    if (book.getAttribute("class") === "add-list") {
      book.classList.toggle("act");
      fetchTvById(movieId).then(response=>{
        favoriesTab.push(response);
        localStorage.setItem("favorieTab",JSON.stringify(favoriesTab));
        console.log("ajout")
      })
    } else if (book.getAttribute("class") === "add-list act") {
      book.classList.toggle("act");
      console.log(book.getAttribute("class"));
      console.log("retir")
      console.log(book.getAttribute("data_id"))
      const newFavoriesTab = JSON.parse(localStorage.getItem("favorieTab")).filter(item=>item.id != movieId)
      localStorage.setItem("favorieTab",newFavoriesTab)
      console.log(localStorage.getItem("favorieTab"))

    }
  });
});

document.querySelector(".favorie-btn").addEventListener("click",()=>{
  const favoreis = JSON.parse(localStorage.getItem("favorieTab"))
  const item8 = new createCard(favoreis,resultHtml);
  item8.createCardElement()
  pop.classList.toggle("active");
})

// document.getElementById('searchForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Empêche le rechargement de la page
//   const searchValue = document.getElementById('searchInput').value;
//   // Redirige vers resultats.html avec la valeur de l'input
//   window.location.href = resultats.html?query=${encodeURIComponent(searchValue)};
// // Obtenir l'URL actuelle
// // const currentUrl = window.location.href;
// // console.log(currentUrl)

// // Créer un objet URL à partir de l'URL actuelle
// // const url = new URL(currentUrl);
// // console.log(url)
// // const id = url.search.split('=')[1]
// // console.log(id)
