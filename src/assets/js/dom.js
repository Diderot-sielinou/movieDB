export function createElement (tagName, tasgAttribut = {}) {
  const tagElement = document.createElement(tagName)
  for (const [attribut, value] of Object.entries(tasgAttribut)) {
    if (value !== null) {
      tagElement.setAttribute(attribut, value)
    }
  }
  return tagElement
}

async function searchMovies (query) {
  const response = await fetch()
  const data = await response.json()
  return data.results
}
