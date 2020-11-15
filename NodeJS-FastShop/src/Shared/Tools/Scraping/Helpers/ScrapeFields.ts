export const searchQueryFields = [
  {
    title: "jackjones",
    url: "https://www.jackjones.com/search?q=",

    titleQuery: "div > header > a",
    priceQuery: "div > p.product-tile__price > em",
    imageQuery: "img.js-product-tile-link",
    linkQuery: "a.thumb-link",
    //
    sizeQuery: "div.swatch__item-inner-text__text-container",
    imagesListQuery: "img.product-images__thumbnails-image",
    descriptionQuery: "pre.pdp-description__text__short",
  },
  // {
  //   title: "pandora",
  //   url: "https://www.pandorashop.es/catalogsearch/result/?q=",

  //   titleQuery: "h2.product-name > a",
  //   priceQuery: "span.price",
  //   imageQuery: "a.product-image > img",
  //   linkQuery: "",
  // },
  {
    title: "zara",
    url: "https://www.zara.com/es/es/search?searchTerm=",

    titleQuery: "a.name",
    priceQuery: "span.main-price",
    imageQuery: "img.product-media",
    linkQuery: "",
    //
    sizeQuery: "div.swatch__item-inner-text__text-container",
    imagesListQuery: "img.product-images__thumbnails-image",
    descriptionQuery: "pre.pdp-description__text__short",
  },
]
