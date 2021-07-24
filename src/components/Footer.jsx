
import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

require('./footer.css')
const Footer = () => {
    return (
        <div className='footer'>
            <div className='item'>
                <AiIcons.AiFillHome color='white' size={20}/>
                <span className='active'>Inicio</span>
            </div>
            <div className='item'>
                <RiIcons.RiMovieFill color='rgb(107, 107, 107)' size={20}/>
                <span className='desactive'>Próximamente</span>
            </div>
            <div className='item'>
            <RiIcons.RiDownload2Fill color='rgb(107, 107, 107)' size={20}/>
                <span className='desactive'>Descargas</span>
            </div>
        </div>
    )
}

export default Footer
