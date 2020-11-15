import { searchQueryFields } from "./ScrapeFields"

export const findShop = (url: string) => {
  let i = 0
  while (i < searchQueryFields.length) {
    if (url.includes(searchQueryFields[i].title)) {
      return searchQueryFields[i]
    }
    i++

    if (i === searchQueryFields.length) return undefined
  }
}
