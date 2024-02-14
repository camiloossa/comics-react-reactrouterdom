import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <div className="contenedor error-page">
                <div className="caja-error">
                    <img src="/assets/error-404.png" alt="Error 404" />
                </div>
                <div className="caja-error">
                    <div className="contenido-error">
                        <h2>Oops...</h2>
                        <div className="texto-error">
                            <p>No logramos encontrar la pagina solicitada</p>
                            <p>¿Esta escrita la ruta correctamente?</p>
                        </div>
                        <Link to="/" className='main-page'>Pagina principal</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export  {ErrorPage}
