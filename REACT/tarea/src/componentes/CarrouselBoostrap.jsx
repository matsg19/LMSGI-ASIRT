import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselBootstrap({andalucia}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[0].imagen}
          alt={andalucia[0].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[0].nombre}</h3>
          <p>{andalucia[0].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[1].imagen}
          alt={andalucia[1].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[1].nombre}</h3>
          <p>{andalucia[1].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[2].imagen}
          alt={andalucia[2].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[2].nombre}</h3>
          <p>{andalucia[2].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[3].imagen}
          alt={andalucia[3].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[3].nombre}</h3>
          <p>{andalucia[3].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[4].imagen}
          alt={andalucia[4].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[4].nombre}</h3>
          <p>{andalucia[4].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[5].imagen}
          alt={andalucia[5].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[5].nombre}</h3>
          <p>{andalucia[5].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[6].imagen}
          alt={andalucia[6].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[6].nombre}</h3>
          <p>{andalucia[6].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={andalucia[7].imagen}
          alt={andalucia[7].alt}
        />
        <Carousel.Caption>
          <h3>{andalucia[7].nombre}</h3>
          <p>{andalucia[7].alt}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBootstrap;