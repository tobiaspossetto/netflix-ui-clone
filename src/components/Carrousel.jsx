import React,{useEffect, useState} from 'react'
require('./carrousel.css')
const Carrousel = (props) => {
    const [pelis, setPelis] = useState([])

    useEffect(() => {
       setPelis(props.pelis)
    }, [props.pelis]);
    return (
        <div className="peliculas-recomendadas contenedor">
            <div className="contenedor-titulo-controles">
                <h3>Populares en Netflix</h3>
                <div className="indicadores"></div>
            </div>

            <div className="contenedor-principal">


                <div className="contenedor-carousel" >
                    <div className="carousel " id="carousel">
                        {
                            pelis.map((i) => {
                                return (
                                    <div className="pelicula" key={i.id}>

                                           <a href="#"><img src={'https://image.tmdb.org/t/p/original'+i.poster_path} alt="" /></a>

                                         </div>

                                )
                            }


                            )



                        }
                       
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carrousel
