import "./About.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section className="about-modern d-flex align-items-center justify-content-center">
      <div className="about-card text-center p-4">
        <h2 className="about-modern-title">Sobre Goldfishin</h2>
        <p className="about-modern-text">
          En Goldfishin nos apasiona la pesca y la caza. Ofrecemos productos seleccionados que combinan calidad y rendimiento para acompañarte en cada aventura.
          <br />
          Nuestra misión es brindar herramientas confiables y duraderas, pensadas para quienes disfrutan del contacto con la naturaleza y buscan siempre ir un paso más allá. Desde cañas, anzuelos y accesorios técnicos, hasta indumentaria resistente y equipamiento para caza, trabajamos con marcas reconocidas y materiales de primera calidad.
        </p>
        <a
          href="https://wa.me/5491130842824" // Reemplazá con tu número real
          target="_blank"
          rel="noopener noreferrer"
          className="about-btn"
        >
          <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default About;
