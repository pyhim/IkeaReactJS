import "./Catalog.css"

export function Card(props) {
  return (
    <div className="catalog-card">
      <img src={props.img} alt="Furniture Image"/>
      <p>Name of the set</p>
    </div>
  );
}

export function Catalog() {
  const images = import.meta.glob('/src/assets/ikea_images/*.png', { eager: true });

  const imagePaths = Object.values(images).map((mod) => mod.default);

  return (
    <div className="catalog container">
      <p className="caption">Catalog</p>
      <div className="cards">
        {imagePaths.map((image) => {
          return (
            <Card img={image}></Card>
          );
        })}
      </div>
    </div>
  );
}