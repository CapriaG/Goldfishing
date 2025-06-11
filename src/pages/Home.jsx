import './Home.css';
import backgroundImage from '../assets/goldfondobc.webp';
import NavBar from '../components/NavBar';

// Importación de imágenes
import brand1 from '../assets/albatros.png';
import brand2 from '../assets/bando.png';
import brand3 from '../assets/cypress.png';
import brand4 from '../assets/depredador.png';
import brand5 from '../assets/explorer.png';
import brand6 from '../assets/grilon.png';
import brand7 from '../assets/hunter.png';
import brand8 from '../assets/misi.png';
import brand9 from '../assets/tca.png';
import brand10 from '../assets/natway.png';
import brand11 from '../assets/NG.png';
import brand12 from '../assets/nitanyl.png';
import brand13 from '../assets/paraf.png';
import brand14 from '../assets/sasame.png';
import brand15 from '../assets/surfish.png';
import fish from '../assets/fish.png';

import { Carousel, Button } from 'react-bootstrap';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.home-content, .brand-carousel, .product-card, .modern-button');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <section
      className="home-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <NavBar />
      <div className="home-overlay">
        <div className="home-content">
          <h1>
            La <span className="highlight-yellow">pesca</span> perfecta <br />
            comienza con el <br />
            <span className="highlight-blue">equipo adecuado</span>
          </h1>
          <p>
            Equípate con la mejor calidad y convierte cada salida en una experiencia inolvidable. 
            ¡Descubre todo lo que necesitas para dominar las aguas con confianza!
          </p>
        </div>

        {/* Flecha */}
        <a href="#brands" className="arrow-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
            className="down-icon"
          >
            <path d="M12 21L3 9h18L12 21z" />
          </svg>
        </a>

        <div id="brands" className="brands-container">
          {/* Carrusel de marcas */}
          <Carousel indicators={false} controls={false} interval={2800} pause={false}>
            <Carousel.Item>
              <div className="brand-carousel d-flex justify-content-center gap-4">
                <img src={brand1} alt="Marca 1" className="brand-img" />
                <img src={brand2} alt="Marca 2" className="brand-img" />
                <img src={brand3} alt="Marca 3" className="brand-img" />
                <img src={brand4} alt="Marca 4" className="brand-img" />
                <img src={brand5} alt="Marca 5" className="brand-img" />
                <img src={brand6} alt="Marca 6" className="brand-img" />
                <img src={brand7} alt="Marca 7" className="brand-img" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="brand-carousel d-flex justify-content-center gap-4">
                <img src={brand8} alt="Marca 8" className="brand-img" />
                <img src={brand9} alt="Marca 9" className="brand-img" />
                <img src={brand10} alt="Marca 10" className="brand-img" />
                <img src={brand11} alt="Marca 11" className="brand-img" />
                <img src={brand12} alt="Marca 12" className="brand-img" />
                <img src={brand13} alt="Marca 13" className="brand-img" />
                <img src={brand14} alt="Marca 14" className="brand-img" />
                <img src={brand15} alt="Marca 15" className="brand-img" />
              </div>
            </Carousel.Item>
          </Carousel>

          {/* Pez + Título */}
          <div className="fish-title d-flex align-items-center justify-content-center gap-0 mt-5">
            <img src={fish} alt="Pez decorativo" className="fish-img" />
            <h1 className="text-light">Nuestros artículos destacados.</h1>
          </div>

          {/* Carrusel de productos destacados */}
          <Carousel interval={3000} controls={false}>
            <Carousel.Item>
              <div className="featured-carousel d-flex justify-content-center gap-4 mt-4">
                <div className="product-card">Producto 1</div>
                <div className="product-card">Producto 2</div>
                <div className="product-card">Producto 3</div>
              </div>
            </Carousel.Item>
          </Carousel>

          {/* Botón moderno */}
          <div className="text-center my-4">
            <Button
              variant="custom"
              size="lg"
              href="/products"
              className="modern-button"
            >
              Ver todos los productos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
