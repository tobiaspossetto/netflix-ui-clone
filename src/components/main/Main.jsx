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
                    <span>Action</span>
                    <span>Suspense</span>
                    <span>Mystery</span>
                    
                    
                </div>
                <div className='container-control'>

                    <div className='btn-main'>
                        <IoIcons.IoMdAdd color='white' size={20}/>
                        <span>My list</span>
                    </div>
                    <div className='btn-reproducir'>
                        <GrIcons.GrPlayFill color='black' size={15}/>
                        <span>Play now </span>
                    </div>
                    <div className='btn-main'>
                        <AiIcons.AiOutlineInfoCircle color='white' size={20}/>
                        <span>Information</span>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Main
