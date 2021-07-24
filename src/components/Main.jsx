import React from 'react'

import * as IoIcons from 'react-icons/io'

import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
require('./main.css')
const Main = () => {
    return (
        <div className='main'>
            <div className='main-control'>
               
                <div className='description'>
                    <span>Acción</span>
                    <span>Suspenso</span>
                    <span>Thriller</span>
                    <span>Drama</span>
                    <span>Sobre robos</span>
                </div>
                <div className='container-control'>

                    <div className='btn-main'>
                        <IoIcons.IoMdAdd color='white' size={20}/>
                        <span>Mi lista</span>
                    </div>
                    <div className='btn-reproducir'>
                        <GrIcons.GrPlayFill color='black' size={15}/>
                        <span>Reproducir </span>
                    </div>
                    <div className='btn-main'>
                        <AiIcons.AiOutlineInfoCircle color='white' size={20}/>
                        <span>Información</span>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Main
