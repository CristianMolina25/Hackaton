function Home() {
  return (
    <div className="container mt-4 text-center">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Bienvenido a las Líneas de Profundización</h1>
          <p className="col-md-10 fs-5 mx-auto">
            Explora las diferentes áreas de la ingeniería que te ayudarán a construir el futuro.
            Aquí encontrarás las rutas académicas que impulsarán tu desarrollo profesional.
          </p>
          <a href="/lineas" className="btn btn-primary btn-lg mt-3">
            Explorar Líneas
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://www.redseguridad.com/wp-content/uploads/sites/2/2022/09/inteligenciaartificial-900x600.jpg"
              className="card-img-top"
              alt="Inteligencia Artificial"
            />
            <div className="card-body">
              <h5 className="card-title">Inteligencia Artificial</h5>
              <p className="card-text">
                Aprende cómo las máquinas pueden aprender, analizar datos y tomar decisiones.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://agenciawinners.com/wp-content/uploads/2020/07/desarrollo-web.png"
              className="card-img-top"
              alt="Desarrollo Web"
            />
            <div className="card-body">
              <h5 className="card-title">Desarrollo Web</h5>
              <p className="card-text">
                Crea sitios y aplicaciones web modernas con tecnologías de última generación.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.1H-ZNxgzywMpR1NAlXcOcgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
              className="card-img-top"
              alt="Ciberseguridad"
            />
            <div className="card-body">
              <h5 className="card-title">Ciberseguridad</h5>
              <p className="card-text">
                Protege los sistemas informáticos y redes ante amenazas digitales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
