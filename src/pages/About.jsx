import "./About.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <section className="about-modern d-flex align-items-center justify-content-center">
      <div className="about-card text-center p-4">
        <h2 className="about-modern-title">Sobre Goldfishin</h2>
        <p className="about-modern-text">
          Nuestra empresa se caracteriza por comercializar artículos de camping, pesca y cuchillería. Con 35 años de experiencia ayudando y orientando a nuestros clientes en sus compras según la zona que corresponda.
          <br />
          Contamos con muchos artículos tanto importados como de industria nacional, incluyendo sus repuestos. Estamos asesorados por personas expertas amantes de la pesca deportiva y la vida al aire libre.
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
