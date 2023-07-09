export const HomePage = () => {
    return (
        <main className="home">
            <div className="jumbotron">
                <h1 className="main-title text-center m-0 color-white">
                    Sabor en la Parrilla
                </h1>
                <h5 className="main-subtitle text-center color-white">
                    Premium Burger's
                </h5>
                <div className="mt-4 d-flex flex-row justify-content-center align-items-center">
                    <a href="">        
                        <button type="button" className="btn-carta me-2 color-white">Ver la Carta</button>
                    </a>
                    <a href="">
                        <button type="button" className="btn-mesa ms-2 color-orange">Reservar Mesa</button>
                    </a>
                </div>
            </div>

            <article className="container mt-5">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div></div>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}