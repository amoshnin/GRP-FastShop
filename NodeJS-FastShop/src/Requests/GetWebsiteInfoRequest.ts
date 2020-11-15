// GENERL IMPORTS
import { Response, Request } from "express"
import { Client } from "@googlemaps/google-maps-services-js"

// COMPONENTS IMPORTS

//////////////////////////////////////////////////////////////////////

const GetProductsRequest = (req: Request, res: Response) => {
  const { websiteUrl, placeID } = req.body

  const google = new Client({})

  google
    .placeDetails({
      params: {
        place_id: placeID,
        key: "AIzaSyCMb4MQW_3cQFFRNFJCl48ZN3M0A1xq1WU",
      },
    })
    .then((response) => {
      const reviews = response.data.result.reviews
      const location = response.data.result.vicinity
      const open_time = response.data.result.opening_hours
      const types = response.data.result.types
      const phone_num = response.data.result.international_phone_number

      res.send({
        reviews,
        location,
        open_time: {
          open_now: open_time?.open_now,
          weekday_text: open_time?.weekday_text,
        },
        types,
        phone_num,
      })
    })
    .catch((err: any) => res.send({ message: "Something went wrong" }))
}

export default GetProductsRequest
