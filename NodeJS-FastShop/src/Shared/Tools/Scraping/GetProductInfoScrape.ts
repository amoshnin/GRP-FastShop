// GENERL IMPORTS
import { Request, Response } from "express"
import rp from "request-promise"
import $ from "cheerio"

// COMPONENTS IMPORTS
import { findShop } from "./Helpers/Functions"

// Types

//////////////////////////////////////////////////////////////////////

const GetProductInfoScrape = (req: Request, res: Response) => {
  const handleError = (error: any) => {}
  const { url, searchUrl } = req.body

  if (url && searchUrl) {
    console.log(url, searchUrl)
    const foundShop = findShop(url)

    console.log(foundShop)
    if (foundShop && foundShop) {
      return rp(searchUrl)
        .then((html) => {
          const sizeQuery = foundShop.sizeQuery
            ? // @ts-ignore
              $(foundShop.sizeQuery, html)
            : undefined
          const imagesListQuery = foundShop.imagesListQuery
            ? // @ts-ignore
              $(foundShop.imagesListQuery, html)
            : undefined
          const descriptionQuery = foundShop.descriptionQuery
            ? // @ts-ignore
              $(foundShop.descriptionQuery, html)
            : undefined

          let sizes: Array<string> = []
          if (sizeQuery) {
            sizeQuery.each((i, el) => {
              const size = el.children[0].data
              size && sizes.push(size)
            })
          }

          let imagesList: Array<string> = []
          if (imagesListQuery) {
            imagesListQuery.each((i, el) => {
              let image = el.attribs["data-src"]
              console.log(image, "image")
              image = image.substring(0, image.indexOf(".jpg") + 4)
              image && imagesList.push(image)
            })
          }

          const description = descriptionQuery?.text()

          console.log(sizes)
          res.send({
            description,
            sizes,
            imagesList,
          })
        })
        .catch(handleError)
    }
  }
}

export default GetProductInfoScrape
