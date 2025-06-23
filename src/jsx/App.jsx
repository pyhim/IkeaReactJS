import '../styles/App.css'
import {Catalog} from "./Catalog.jsx";
import {Carousel} from "./CardCarousel.jsx";
import * as bootstrap from "bootstrap";

function App() {
  let cards = [
    {active: true, img: "/cards/1.png", caption: "Card 1"},
  ];

  for (let i = 2; i < 10; i++) {
    cards.push({active: false, img: `/cards/${i}.png`, caption: `Card ${i}`});
  }

  return (
    <>
      <div id="root-container" className="container">
        <section id="goods">
          <Carousel id="goodsCarousel" cards={cards}></Carousel>
        </section>
      </div>
      <script type="application/javascript" src="/src/js/createCarousel.js"></script>
    </>
  )
}

export default App
