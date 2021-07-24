import React, {useRef, useEffect} from 'react'
import Carrousel from './Carrousel'
import Footer from './Footer'
import Main from './Main'
import Nav from './nav/Nav'
import { useNetflix } from '../context/netflix-context'
const ComponentContainer = () => {
    const { action, adventure, comedy, crime, fiction, war, horror, llamadas } = useNetflix()

    const ref = useRef(true)
    useEffect(() => {

        if(ref){
           
            llamadas()
              
            ref.current = false;
          
        }else{
            ref.current = true
        }
    },[])

    
    return (
        <div>
             <Nav />
        <Main />

        <Carrousel pelis={action} />
        <Carrousel pelis={adventure} />
        <Carrousel pelis={comedy} />
        <Carrousel pelis={crime} />
        <Carrousel pelis={fiction} />
        <Carrousel pelis={war} />
        <Carrousel pelis={horror} />
        <Footer />

        </div>
    )
}

export default ComponentContainer
