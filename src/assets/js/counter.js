import { createElement } from "./dom.js";

export async function fetchJson(url) {
  // const headers = { Acept: "application/json", ...options.headers };
  const r = await fetch(url);
  if (r.ok) {
    return r.json();
  }
  throw new Error("Errreur serveur", { cause: r });
}

  // function user to fetch movies by key word enter in input
 export async function fetchResults(keyWord) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=8adfd9df8bd6334c722f32cb9723de43&language=en-US&query=${keyWord}&include_adult=false`
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des résultats');
        }
        return response.json()
    } catch (error) {
        console.error(error);
    }
}

export class createCard {
  /**
   * @property result} []table of fetch element
   */
  result = [];
  element
  constructor(tabResult,hTMLElementToAppend) {
    this.result = tabResult;
    this.element = hTMLElementToAppend
  }

  createCardElement(){
    for(let item of this.result){
      const card = new cardItem(item)
      if(this.element){
        card.appendTo(this.element)
      }
    }
  }
}

class cardItem {
  /**
   *
   * @param {HTMLElement} item is the singular item card create
   */
  #item;

  constructor(itemObject) {
    const BASE_URL_img = "https://media.themoviedb.org/t/p/w220_and_h330_face";
    this.#item = createElement("div", {
      class: "swiper-slide box",
    });
    this.#item = this.#item;
    const a1 = createElement("a", {
      href: `detailpage.html?detail_id=${itemObject.id}`,
    });
    this.#item.append(a1);
    const div_img = createElement("div", {
      class: "box-img",
    });
    a1.append(div_img);
    const image = createElement("img", {
      src: `${BASE_URL_img}${itemObject.backdrop_path}`,
      alt: `${itemObject.name?`${itemObject.name}`:`${itemObject.title}`}`,
    });
    div_img.append(image);
    const h3 = createElement("h3", {});
    h3.innerText = `${itemObject.name?`${itemObject.name}`:`${itemObject.title}`}`;
    this.#item.append(h3);
    const span = createElement("span", {
      class: "rate",
    });
    span.innerText = `${itemObject.origin_country?`${itemObject.origin_country[0]}`:`aldulte : ${itemObject.adult}`}/${itemObject.original_language}`;
    this.#item.append(span);
    const p = createElement("p", {
      class :'icons'
    });
    this.#item.append(p);
    const box = createElement("box-icon", {
      name: "star",
      class: "star"
    });
    p.append(box);
    const span2 = createElement("span", {
      class: "rate",
    });
    span2.innerText = itemObject.vote_average;
    p.append(span2);
    let icon = createElement('button',{
      class:'add-list'
    })
    icon.innerHTML =`<box-icon name='bookmark-star' type='solid' color='#d61010' ></box-icon>`
    p.append(icon);
  }

  appendTo(element){
    if(this.#item){

      element.prepend(this.#item);
    }else{
      console.log("no elelment")
    }

  }
}

export class createCardUpcoming {
  /**
   * @property result} []table of fetch element
   */
  result = [];
  element
  constructor(tabResult,hTMLElementToAppend) {
    this.result = tabResult;
    this.element = hTMLElementToAppend
  }

  createCardElement(){
    for(let item of this.result){
      const card = new cardItemUcoming(item)
      if(this.element){

        card.appendTo(this.element)
      }else{
        console.log("no")
      }
    }
  }
}



class cardItemUcoming {
  /**
   *
   * @param {HTMLElement} item is the singular item card create
   */
  #item;

  constructor(itemObject) {
    const BASE_URL_img = "https://media.themoviedb.org/t/p/w220_and_h330_face";
     this.#item = createElement("div", {
      class: "swiper-slide box",
    });
    this.#item = this.#item;
    const a1 = createElement("a", {
      href: `detailpage.html?detail_id=${itemObject.id}`,
    });
    this.#item.append(a1);
    const div_img = createElement("div", {
      class: "box-img",
    });
    a1.append(div_img);
    const image = createElement("img", {
      src: `${BASE_URL_img}${itemObject.backdrop_path}`,
      alt: `${itemObject.name}`,
    });
    div_img.append(image);
    const h3 = createElement("h3", {});
    h3.innerText = itemObject.name;
    this.#item.append(h3);
    const span = createElement("span", {
      class: "rate",
    });
    span.innerText = `${itemObject.original_language} vote count: ${itemObject.vote_count}`;
    this.#item.append(span);
    const p = createElement("p", {
      class:'icons'
    });
    this.#item.append(p);
    const box = createElement("box-icon", {
      name: "star",
      class: "star",
    });
    p.append(box);
    const span2 = createElement("span", {
      class: "rate",
    });
    span2.innerText = itemObject.vote_average;
    p.append(span2);
    let icon = createElement('button',{
      class:'add-list'
    })
    icon.innerHTML =`<box-icon name='bookmark-star' type='solid' color='#d61010' ></box-icon>`
    p.append(icon);
  }

  appendTo(element){
    if(this.#item){

      element.prepend(this.#item);
    }else{
      console.log("no elelment")
    }

  }
}
