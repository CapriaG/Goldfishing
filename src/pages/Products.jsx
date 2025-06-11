import { useState } from "react";
import './Products.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const productsData = [
  {
    id: 1,
    name: "Wader",
    category: "Indumentaria",
    images: ["https://i.imgur.com/aBpOxCh.jpeg"]
  },
  {
    id: 2,
    name: "Traje de agua",
    category: "Indumentaria",
    images: ["https://i.imgur.com/t5Gs117.jpeg"]
  },
  {
    id: 3,
    name: "Capa",
    category: "Indumentaria",
    images: ["https://i.imgur.com/Lk73qxe.jpeg"]
  },
  {
    id: 4,
    name: "Sombrero",
    category: "Indumentaria",
    images: ["https://i.imgur.com/Ju3Q3C1.jpeg"]
  },
  {
    id: 5,
    name: "Remera térmica",
    category: "Indumentaria",
    images: ["https://i.imgur.com/g1RryRs.jpeg"]
  },
  {
    id: 6,
    name: "Mochila Scout",
    category: "Indumentaria",
    images: ["https://i.imgur.com/BnS2V8c.jpeg"]
  },
  {
    id: 7,
    name: "Mochila de transporte",
    category: "Indumentaria",
    images: ["https://i.imgur.com/sJjwvqH.jpeg"]
  },
  {
    id: 8,
    name: "Gorros",
    category: "Indumentaria",
    images: ["https://i.imgur.com/LATkUpI.jpeg"]
  },
  {
    id: 9,
    name: "Bolsos y riñoneras",
    category: "Indumentaria",
    images: ["https://i.imgur.com/CiwiuiL.jpeg"]
  },
  {
    id: 10,
    name: "Señuelos",
    category: "Pesca",
    images: ["https://i.imgur.com/gM30HxR.jpeg", "https://i.imgur.com/QlwlwkP.jpeg"]
  },
  {
    id: 11,
    name: "Reels",
    category: "Pesca",
    images: ["https://i.imgur.com/5BzhhZ9.jpeg", "https://i.imgur.com/zUrARjE.jpeg", "https://i.imgur.com/hionJoE.jpeg", "https://i.imgur.com/t9eFVcH.jpeg", "https://i.imgur.com/xaohrIv.jpeg"]
  },
  {
    id: 12,
    name: "Cucharas",
    category: "Pesca",
    images: ["https://i.imgur.com/8SIiNh9.jpeg", "https://i.imgur.com/ZIp8cR6.jpeg", "https://i.imgur.com/U9lfOMT.jpeg", "https://i.imgur.com/t9eFVcH.jpeg", "https://i.imgur.com/BQ8iOGm.jpeg"]
  },
  {
    id: 13,
    name: "Accesorios",
    category: "Pesca",
    images: ["https://i.imgur.com/QPAY7Rx.jpeg", "https://i.imgur.com/POYunqy.jpeg", "https://i.imgur.com/21E4jCe.jpeg", "https://i.imgur.com/Uz7H4V1.jpeg", "https://i.imgur.com/MRkX46e.jpeg"]
  },
  {
    id: 14,
    name: "Artículos de armado",
    category: "Pesca",
    images: ["https://i.imgur.com/2AgqDoA.jpeg", "https://i.imgur.com/9GuTd46.jpeg", "https://i.imgur.com/Z3U61km.jpeg", "https://i.imgur.com/PiIpcqF.jpeg", "https://i.imgur.com/74q9kxC.jpeg"]
  },
  {
    id: 15,
    name: "Ranas",
    category: "Pesca",
    images: ["https://i.imgur.com/fw2iBzx.jpeg", "https://i.imgur.com/bmAfPAR.jpeg", "https://i.imgur.com/gogKB3P.jpeg"]
  },
  {
    id: 16,
    name: "Hilos",
    category: "Pesca",
    images: ["https://i.imgur.com/ZYt2mBX.jpeg"]
  },
  {
    id: 17,
    name: "Colorante",
    category: "Pesca",
    images: ["https://i.imgur.com/jGA7nFm.jpeg"]
  },
  {
    id: 18,
    name: "Multifilamento",
    category: "Pesca",
    images: ["https://i.imgur.com/ZYt2mBX.jpeg"]
  },
  {
    id: 19,
    name: "Balde para carnada",
    category: "Pesca",
    images: ["https://i.imgur.com/sekhpks.jpeg"]
  },
  {
    id: 20,
    name: "Leaders",
    category: "Pesca",
    images: ["https://i.imgur.com/VXP9pQG.jpeg"]
  },
  {
    id: 21,
    name: "Munición partida",
    category: "Pesca",
    images: ["https://i.imgur.com/4G2zHRI.jpeg"]
  },


  {
    id: 22,
    name: "Bolsas de dormir",
    category: "Camping",
    images: ["https://i.imgur.com/gHqlUok.jpeg"]
  },
  {
    id: 23,
    name: "Colchones e infladores",
    category: "Camping",
    images: ["https://i.imgur.com/Tzpq9l3.jpeg", "https://i.imgur.com/0oWj29E.jpeg"]
  },
  {
    id: 24,
    name: "Linternas",
    category: "Camping",
    images: ["https://i.imgur.com/A8gKFSV.jpeg", "https://i.imgur.com/SkwlBNi.jpeg"]
  },
  {
    id: 25,
    name: "Sombrillas",
    category: "Camping",
    images: ["https://i.imgur.com/4ar8vpT.jpeg"]
  },
  {
    id: 26,
    name: "Soga",
    category: "Camping",
    images: ["https://i.imgur.com/8Aw583s.jpeg"]
  },
  {
    id: 27,
    name: "Mesa valija",
    category: "Camping",
    images: ["https://i.imgur.com/nULGRxV.jpeg"]
  },
  {
    id: 28,
    name: "Mechas para farol",
    category: "Camping",
    images: ["https://i.imgur.com/1u6APnC.jpeg"]
  },
  {
    id: 29,
    name: "Brújula",
    category: "Camping",
    images: ["https://i.imgur.com/s93mNvR.jpeg", "https://i.imgur.com/GN115Fv.jpeg"]
  },
  {
    id: 30,
    name: "Catre",
    category: "Camping",
    images: ["https://i.imgur.com/v8nSeoJ.jpeg"]
  },
  {
    id: 31,
    name: "Jarros y Vasos térmicos",
    category: "Camping",
    images: ["https://i.imgur.com/3RWB0XF.jpeg", "https://i.imgur.com/GxRA4Is.jpeg"]
  },
  {
    id: 32,
    name: "Sillas",
    category: "Camping",
    images: ["https://i.imgur.com/Ozhbm5k.jpeg"]
  },

  
  {
    id: 33,
    name: "Regaton",
    category: "Repuestos",
    images: ["https://i.imgur.com/rylrSVa.jpeg"]
  },
  {
    id: 34,
    name: "Punteras",
    category: "Repuestos",
    images: ["https://i.imgur.com/oZYCqis.jpeg"]
  },
  {
    id: 35,
    name: "Porta Reel",
    category: "Repuestos",
    images: ["https://i.imgur.com/LgnC0dG.jpeg"]
  },
  {
    id: 36,
    name: "Pelitos y puntera",
    category: "Repuestos",
    images: ["https://i.imgur.com/7zKFS8N.jpeg"]
  },
  {
    id: 37,
    name: "Juego de pasahilos",
    category: "Repuestos",
    images: ["https://i.imgur.com/qEN3Apj.jpeg"]
  },
  {
    id: 38,
    name: "Resortes",
    category: "Repuestos",
    images: ["https://i.imgur.com/hdtawcr.jpeg"]
  },
  {
    id: 39,
    name: "Repuestos de Caza",
    category: "Repuestos",
    images: ["https://i.imgur.com/dSAjqRm.jpeg"]
  },
  {
    id: 40,
    name: "Flechas",
    category: "Repuestos",
    images: ["https://i.imgur.com/sarfm8d.jpeg"]
  },
  {
    id: 41,
    name: "Cargadores",
    category: "Repuestos",
    images: ["https://i.imgur.com/sV3nxQU.jpeg"]
  },
  {
    id: 42,
    name: "Vidrio",
    category: "Repuestos",
    images: ["https://i.imgur.com/w8hF4Uk.jpeg"]
  },
  {
    id: 43,
    name: "Estacas",
    category: "Repuestos",
    images: ["https://i.imgur.com/y9LbGwv.jpeg"]
  },


  {
    id: 44,
    name: "Columbia",
    category: "Cuchillería",
    images: ["https://i.imgur.com/zFSjKZQ.jpeg", "https://i.imgur.com/XaB8gRv.jpeg"]
  },
  {
    id: 45,
    name: "Cool Still",
    category: "Cuchillería",
    images: ["https://i.imgur.com/kd6VoWO.jpeg"]
  },
  {
    id: 46,
    name: "Estacas",
    category: "Cuchillería",
    images: ["https://i.imgur.com/y9LbGwv.jpeg"]
  },
  {
    id: 47,
    name: "Cuchillos Filetear",
    category: "Cuchillería",
    images: ["https://i.imgur.com/Au82rmS.jpeg"]
  },
  {
    id: 48,
    name: "Franchi",
    category: "Cuchillería",
    images: ["https://i.imgur.com/3XHJeLX.jpeg"]
  },
  {
    id: 49,
    name: "Hunter",
    category: "Cuchillería",
    images: ["https://i.imgur.com/T1rFwxy.jpeg"]
  },
  {
    id: 50,
    name: "Navajas",
    category: "Cuchillería",
    images: ["https://i.imgur.com/8qFBsm2.jpeg", "https://i.imgur.com/AzebVa7.jpeg"]
  },
  {
    id: 51,
    name: "Piedra de afilar",
    category: "Cuchillería",
    images: ["https://i.imgur.com/kJ4Ms3b.jpeg"]
  },


  {
    id: 52,
    name: "Balines",
    category: "Caza",
    images: ["https://i.imgur.com/WP8YqGG.jpeg"]
  },
  {
    id: 53,
    name: "Ballestas",
    category: "Caza",
    images: ["https://i.imgur.com/BHYLvNS.jpeg"]
  },
  {
    id: 54,
    name: "Fundas para rifle",
    category: "Caza",
    images: ["https://i.imgur.com/skgR57I.jpeg"]
  },
  {
    id: 55,
    name: "Gomas para honda",
    category: "Caza",
    images: ["https://i.imgur.com/V7imYJT.jpeg", "https://i.imgur.com/UXz63j5.jpeg"]
  },
  {
    id: 56,
    name: "Hondas",
    category: "Caza",
    images: ["https://i.imgur.com/67uc6kf.jpeg"]
  },
  {
    id: 57,
    name: "Rifles",
    category: "Caza",
    images: ["https://i.imgur.com/sC8k1jI.jpeg", "https://i.imgur.com/drix0ym.jpeg"]
  },

];

const categories = ["Todos", "Pesca", "Indumentaria", "Camping", "Repuestos", "Cuchillería", "Caza"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts =
    selectedCategory === "Todos"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreToShow = visibleCount < filteredProducts.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="products-page container-fluid products-background">
      <div className="container">
        <h2 className="mb-4 text-center text-white">Nuestros Productos</h2>

        {/* Filtro de categorías */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${
                selectedCategory === category ? "btn-dark" : "btn-outline-light"
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(8);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Galería de productos */}
        <div className="row">
          {visibleProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div
                className="card h-100 shadow-sm"
                data-bs-toggle="modal"
                data-bs-target={`#modal-${product.id}`}
                style={{ cursor: "pointer" }}
              >
                {product.images.length > 1 ? (
                  <div
                    id={`carousel-${product.id}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {product.images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`carousel-item ${idx === 0 ? "active" : ""}`}
                        >
                          <img
                            src={img}
                            className="d-block w-100 card-img-top"
                            alt={`${product.name} ${idx + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.name}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text" style={{ color: "#ffffff" }}>
                    {product.category}
                  </p>
                </div>
              </div>

              {/* Modal por producto */}
              <div
                className="modal fade"
                id={`modal-${product.id}`}
                tabIndex="-1"
                aria-labelledby={`modalLabel-${product.id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header celeste-bg">
                      <h5 className="modal-title" id={`modalLabel-${product.id}`}>
                        {product.name}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {product.images.length > 1 ? (
                        <div
                          id={`modalCarousel-${product.id}`}
                          className="carousel slide"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            {product.images.map((img, idx) => (
                              <div
                                key={idx}
                                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                              >
                                <img
                                  src={img}
                                  className="d-block w-100"
                                  alt={`${product.name} ${idx + 1}`}
                                />
                              </div>
                            ))}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#modalCarousel-${product.id}`}
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              style={{ filter: "invert(1)" }}
                            ></span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#modalCarousel-${product.id}`}
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              style={{ filter: "invert(1)" }}
                            ></span>
                          </button>
                        </div>
                      ) : (
                        <img
                          src={product.images[0]}
                          className="img-fluid"
                          alt={product.name}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para ver más */}
        {hasMoreToShow && (
          <div className="text-center my-4">
            <button className="btn btn-outline-light" onClick={handleShowMore}>
              Ver más productos
            </button>
          </div>
        )}

        {/* Botón de catálogo */}
        <div className="text-center my-4">
          <a
            href="https://drive.google.com/drive/u/0/folders/1lOBbh5c352oWtyF0KmMV1elgzRByBfWO"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger btn-lg"
          >
            Ver el catálogo completo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;