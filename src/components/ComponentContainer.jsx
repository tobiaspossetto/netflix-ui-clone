import React, {useRef, useEffect} from 'react'
import Carrousel from './Carrousel'
import Footer from './Footer'
import Main from './Main'
import Nav from './nav/Nav'
import { useNetflix } from '../context/netflix-context'
import Detail from './Detail'
require('../index.css')
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
        <div className='container-components'>
             <Nav />
            <Main />

            <Carrousel pelis={action} des='Most popular on Netflix
    '/>
            <Carrousel pelis={adventure} des='Action and adventure' />
            <Carrousel pelis={comedy} des='Children and family'/>
            <Carrousel pelis={crime} des='About crime'/>
            <Carrousel pelis={fiction} des='Fiction'/>
            <Carrousel pelis={war} des='Warlike'/>
            <Carrousel pelis={horror} des='Horror movies'/>
            <Detail/>
            <Footer />

        </div>
    )
}

export default ComponentContainer
