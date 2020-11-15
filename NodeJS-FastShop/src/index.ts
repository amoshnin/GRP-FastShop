// GENERAL IMPORTS
import express from "express"
const app = express()
app.use(express.json())

// REQUESTS
import GetProductsRequest from "./Requests/GetProductsRequest"
import GetProductInfoScrape from "./Shared/Tools/Scraping/GetProductInfoScrape"
import GetWebsiteInfoRequest from "./Requests/GetWebsiteInfoRequest"

////////////////////////////////////////////////////////////////////////////////

app.post("/api/products", GetProductsRequest)
app.post("/api/product_info", GetProductInfoScrape)
app.post("/api/web_info", GetWebsiteInfoRequest)

////////////////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))
