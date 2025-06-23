import "/src/styles/CardCarousel.scss"

function Card(props) {
  let alt = props.alt;

  if (props.alt === undefined) {
    alt = "IMAGE";
  }

  return (

    <div className="card text-center flex-shrink-0">
      <img className="card-img" src={props.img} alt={alt}/>
      <div className="card-img-overlay d-flex justify-content-center align-items-end">
        <button className="card-button">{props.caption}</button>
      </div>
    </div>

  );
}

export function Carousel(props) {
  return (
    <div className="container position-relative d-flex">
      <div className="container d-flex flex-row overflow-x-scroll gap-3 z-0">
        {props.cards.map(card => {
          return (
            <Card active={card.active} img={card.img} caption={card.caption}></Card>
          );
        })}
      </div>
      <img className="arrow-icon position-absolute align-self-center z-1" src="/carouselArrow.svg" alt="arrowRight"/>
    </div>
  );
}