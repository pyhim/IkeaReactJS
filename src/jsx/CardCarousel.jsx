import "/src/styles/CardCarousel.scss"

function Card(props) {
  let classes = "carousel-item";
  let alt = props.alt;

  if (props.active === true) {
    classes += " active";
  }
  if (props.alt === undefined) {
    alt = "IMAGE";
  }

  return (
    <div className={classes}>
      <div className="card text-center">
        <img className="card-img" src={props.img} alt={alt}/>
        <div className="card-img-overlay d-flex justify-content-center align-items-end">
          <button className="card-button">{props.caption}</button>
        </div>
      </div>
    </div>
  );
}

export function Carousel(props) {
  return (
    <div id={props.id} className="carousel slide">
      <div className="carousel-inner d-flex flex-row">
        {props.cards.map(card => {
          return (

            <Card active={card.active} img={card.img} caption={card.caption}></Card>
          );
        })}
      </div>
      <button type="button" data-bs-target={props.id} data-bs-slide="prev"></button>
      <button></button>
    </div>
  );
}