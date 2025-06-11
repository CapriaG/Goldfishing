import "./ContactModal.css";

const ContactModal = () => {
  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content contact-modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title" id="contactModalLabel">Contáctanos</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          <div className="modal-body">
            <form
              action="https://formspree.io/f/meokarko"
              method="POST"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" name="name" id="name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" name="email" id="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea name="message" id="message" className="form-control" rows="4" required></textarea>
              </div>

              <div className="text-end">
                <button type="submit" className="btn btn-yellow">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;