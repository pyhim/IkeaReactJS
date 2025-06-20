import {Carousel} from "bootstrap"

function createCarousel(id) {
  const domCarousel = document.getElementById(id);

  const carousel = new Carousel(domCarousel, {
    ride: "carousel",
    interval: 2000
  });
}

createCarousel("goodsCarousel");