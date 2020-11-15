// GENERL IMPORTS
import { Response, Request } from "express"
import { Client } from "@googlemaps/google-maps-services-js"

// COMPONENTS IMPORTS
import Scraper from "../Shared/Tools/Scraping/GetProductsScrape"

// Types
import { ScraperData } from "../Shared/Types/Types"

//////////////////////////////////////////////////////////////////////

const GetProductsRequest = (req: Request, res: Response) => {
  const { latitude, longitude, radius, searchQuery, selectedType } = req.body

  const google = new Client({})

  google
    .placesNearby({
      params: {
        location: { lat: latitude || 50, lng: longitude || 50 },
        radius: radius || 50,
        key: "AIzaSyCMb4MQW_3cQFFRNFJCl48ZN3M0A1xq1WU",
        type: selectedType || "clothing_store",
      },

      timeout: 1000,
    })
    .then((places: any) => {
      const promises: Array<ScraperData> = places.data.results.map(
        (item: any) => {
          return google
            .placeDetails({
              params: {
                place_id: item.place_id || 0,
                key: "AIzaSyCMb4MQW_3cQFFRNFJCl48ZN3M0A1xq1WU",
                fields: ["website", "name", "rating"],
              },
            })
            .then((placeInfoRes: any) => {
              const name = placeInfoRes.data.result.name
              const website = placeInfoRes.data.result.website || null
              const rating = placeInfoRes.data.result.rating

              return {
                name,
                website,
                rating,
                placeID: item.place_id,

                geometry: {
                  latitude: item.geometry.location.lat,
                  longitude: item.geometry.location.lng,
                },
              }
            })
            .catch((err: any) => console.log(err))
        }
      )

      Promise.all(promises).then((data) => {
        Scraper(data, searchQuery, res)
      })
    })
    .catch((error: any) => {
      console.log(error)
      res.send([])
    })
}

export default GetProductsRequest
