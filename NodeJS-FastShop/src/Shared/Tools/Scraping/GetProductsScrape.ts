// GENERL IMPORTS
import { Response } from "express"
import rp from "request-promise"
import $ from "cheerio"

// COMPONENTS IMPORTS
import { findShop } from "./Helpers/Functions"

// Types
import { ScraperData } from "../../Types/Types"

//////////////////////////////////////////////////////////////////////

const GetProductsScrape = (
  data: Array<ScraperData>,
  searchText: string,
  res: Response
) => {
  const handleError = (error: any) => {}

  let productsList = data.map((item) => {
    const url = item.website

    console.log(url)
    if (url) {
      const foundShop = findShop(url)

      const searchValue = foundShop && `${foundShop.url}${searchText}`
      if (searchValue && foundShop) {
        console.log(searchValue)

        return rp(searchValue)
          .then((html) => {
            let resultArray = [] as Array<any>
            const imageQuery = $(foundShop.imageQuery, html)
            const titleQuery = $(foundShop.titleQuery, html)
            const priceQuery = $(foundShop.priceQuery, html)
            const linkQuery = $(foundShop.linkQuery, html)

            console.log(titleQuery.length)
            console.log(imageQuery.length)
            console.log(priceQuery.length)

            imageQuery.each((i, el) => {
              let image = el.attribs.src || ""
              image = image.substring(0, image.indexOf(".jpg") + 4)

              let title = titleQuery[i].children[0].data || ""
              title = title.replace("\n", "").replace("\n", "")

              const price = priceQuery[i].children[0].data || ""
              const link = linkQuery[i].attribs.href

              resultArray[i] = {
                ...resultArray[i],
                image,
                title,
                price,
                link,
              }
            })

            return {
              shopData: item,
              res: resultArray,
            }
          })
          .catch(handleError)
      }
    }
  })

  Promise.all(productsList).then((el) => {
    const array = el.filter((el) => el)
    res.send(array)
  })
}

export default GetProductsScrape
