import React, { useEffect, useState } from 'react'
import { useNetflix } from '../context/netflix-context'
require('./carrousel.css')
const Carrousel = (props) => {
    const [pelis, setPelis] = useState([])
    
    const { btnDetail,montado } = useNetflix()
    const[peliShow, setPeliShow] = useState([])
    

    useEffect(() => {
        if(montado === true){

            btnDetail(peliShow)
        }
    },[peliShow])


    useEffect(() => {
        setPelis(props.pelis)
    }, [props.pelis]);
    return (
        <div className="peliculas-recomendadas contenedor">
            <div className="contenedor-titulo-controles">
                <h3>{props.des}</h3>
                <div className="indicadores"></div>
            </div>

            <div className="contenedor-principal">


                <div className="contenedor-carousel" >
                    <div className="carousel " id="carousel">
                        {
                            pelis.map((i) => {
                                return (
                                    <div className="pelicula" key={i.id}>

                                        <button href="!#" onClick={()=> setPeliShow(i)}><img src={'https://image.tmdb.org/t/p/original' + i.poster_path} alt="img" /></button>

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
