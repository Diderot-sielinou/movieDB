import { createElement } from './dom.js'

export async function fetchJson (url) {
  // const headers = { Acept: "application/json", ...options.headers };
  const r = await fetch(url)
  if (r.ok) {
    return r.json()
  }
  throw new Error('Errreur serveur', { cause: r })
}

// function user to fetch movies by key word enter in input
export async function fetchResults (keyWord) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=8adfd9df8bd6334c722f32cb9723de43&language=en-US&query=${keyWord}&include_adult=false`
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des résultats')
    }
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export class createCard {
  /**
   * @property result} []table of fetch element
   */
  result = []
  element
  constructor (tabResult, hTMLElementToAppend) {
    this.result = tabResult
    this.element = hTMLElementToAppend
  }

  createCardElement () {
    for (const item of this.result) {
      const card = new CardItem(item)
      if (this.element) {
        card.appendTo(this.element)
      }
    }
  }
}

class CardItem {
  /**
   *
   * @param {HTMLElement} item is the singular item card create
   */
  #item

  constructor (itemObject) {
    const BASE_URL_img = 'https://media.themoviedb.org/t/p/w220_and_h330_face' // eslint-disable-next-line no-console
    this.#item = createElement('div', {
      class: 'swiper-slide box'
    })
    this.#item = this.#item // eslint-disable-next-line no-console
    const a1 = createElement('a', {
      href: `detailpage.html?detail_id=${itemObject.id}`
    })
    this.#item.append(a1)
    const div_img = createElement('div', {
      class: 'box-img'
    }) // eslint-disable-next-line no-console
    a1.append(div_img)
    const image = createElement('img', {
      src: `${BASE_URL_img}${itemObject.backdrop_path}`,// eslint-disable-next-line no-console
      alt: `${itemObject.name ? `${itemObject.name}` : `${itemObject.title}`}`
    })
    div_img.append(image) // eslint-disable-next-line no-console
    const h3 = createElement('h3', {})
    h3.innerText = `${itemObject.name ? `${itemObject.name}` : `${itemObject.title}`}`
    this.#item.append(h3)
    const span = createElement('span', {
      class: 'rate'
    })
    span.innerText = `${itemObject.origin_country ? `${itemObject.origin_country[0]}` : `aldulte : ${itemObject.adult}`}/${itemObject.original_language}`
    this.#item.append(span)
    const p = createElement('p', {
      class: 'icons'
    })
    this.#item.append(p)
    const box = createElement('box-icon', {
      name: 'star',
      class: 'star'
    })
    p.append(box)
    const span2 = createElement('span', {
      class: 'rate'
    })
    span2.innerText = itemObject.vote_average
    p.append(span2)
    const icon = createElement('button', {
      class: 'add-list',
      data_id: `${itemObject.id}`
    })
    icon.innerHTML = '<box-icon name=\'bookmark-star\' type=\'solid\' color=\'#d61010\' ></box-icon>'
    p.append(icon)
  }

  appendTo (element) {
    if (this.#item) {
      element.prepend(this.#item)
    } else {
      console.log('no elelment')
    }
  }
}

export class createCardUpcoming {
  /**
   * @property result} []table of fetch element
   */
  result = []
  element
  constructor (tabResult, hTMLElementToAppend) {
    this.result = tabResult
    this.element = hTMLElementToAppend
  }

  createCardElement () {
    for (const item of this.result) {
      const card = new CardItemUcoming(item)
      if (this.element) {
        card.appendTo(this.element)
      } else {
        console.log('no')
      }
    }
  }
}

class CardItemUcoming {
  /**
   *
   * @param {HTMLElement} item is the singular item card create
   */
  #item

  constructor (itemObject) {
    const BASE_URL_img = 'https://media.themoviedb.org/t/p/w220_and_h330_face' // eslint-disable-next-line no-console
    this.#item = createElement('div', {
      class: 'swiper-slide box'
    })
    this.#item = this.#item // eslint-disable-next-line no-console
    const a1 = createElement('a', {
      href: `detailpage.html?detail_id=${itemObject.id}`
    })
    this.#item.append(a1)
    const div_img = createElement('div', {
      class: 'box-img'
    })
    a1.append(div_img)
    const image = createElement('img', {
      src: `${BASE_URL_img}${itemObject.backdrop_path}`, // eslint-disable-next-line no-console
      alt: `${itemObject.name}`
    })
    div_img.append(image) // eslint-disable-next-line no-console
    const h3 = createElement('h3', {})
    h3.innerText = itemObject.name
    this.#item.append(h3)
    const span = createElement('span', {
      class: 'rate'
    })
    span.innerText = `${itemObject.original_language} vote count: ${itemObject.vote_count}`
    this.#item.append(span)
    const p = createElement('p', {
      class: 'icons'
    })
    this.#item.append(p)
    const box = createElement('box-icon', {
      name: 'star',
      class: 'star'
    })
    p.append(box)
    const span2 = createElement('span', {
      class: 'rate'
    })
    span2.innerText = itemObject.vote_average
    p.append(span2)
    const icon = createElement('button', {
      class: 'add-list',
      data_id: `${itemObject.id}`
    })
    icon.innerHTML = '<box-icon name=\'bookmark-star\'class="book" type=\'solid\' color=\'#d61010\' ></box-icon>'
    p.append(icon)
  }

  appendTo (element) {
    if (this.#item) {
      element.prepend(this.#item)
    } else {
      console.log('no elelment')
    }
  }
}

/* favories function */

export async function fetchTvById (movieId) {
  const API_KEY = '8adfd9df8bd6334c722f32cb9723de43'
  const url = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=fr-FR`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des détails du film')
    }
    const movieFavorie = await response.json()
    return movieFavorie
  } catch (error) {
    console.error(error)
  }
}
