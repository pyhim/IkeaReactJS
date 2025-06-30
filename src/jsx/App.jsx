import '../styles/App.css'
import {Catalog} from "./Catalog.jsx";
import {Carousel} from "./CardCarousel.jsx";
import * as bootstrap from "bootstrap";
import {AccountLoginForm} from "./AccountLoginForm.jsx";
import {AccountFormModal} from "./AccountFormModal.jsx";

function App() {
  // let cards = [
  //   {active: true, img: "/cards/1.png", caption: "Card 1"},
  // ];
  //
  // for (let i = 2; i < 10; i++) {
  //   cards.push({active: false, img: `/cards/${i}.png`, caption: `Card ${i}`});
  // }

  return (
    <>
      <div id="root-container" className="container">
        {/*<section id="goods">*/}
        {/*  <p className="section-header">Goods</p>*/}
        {/*  <Carousel id="goodsCarousel" cards={cards}></Carousel>*/}
        {/*</section>*/}
        <section id="login">
          {/*<AccountLoginForm></AccountLoginForm>*/}
          <AccountFormModal></AccountFormModal>
        </section>
      </div>
    </>
  )
}

export default App
