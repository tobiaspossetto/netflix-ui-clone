import React from 'react'
import { useNetflix } from '../context/netflix-context'
require('./carrousel.css')
const Movi = (props) => {

    const { btnDetail, montado } = useNetflix()
    const clickMovie = (i) =>{
           if(montado === true){
               console.log(i)
               console.log('click')
           }
           
       }
      
    return (
        <div>
            <div className="pelicula" >

                <button onClick={clickMovie(props.i)}><img src={props.src} alt="img" /></button>

            </div>
        </div>
    )
}

export default Movi
