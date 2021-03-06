
import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'

require('./footer.css')
const Footer = () => {
    return (
        <div className='footer'>
            <div className='item'>
                <AiIcons.AiFillHome color='white' size={20}/>
                <span className='active'>Home</span>
            </div>
            <div className='item'>
                <BsIcons.BsCollectionPlayFill className='iconComing' color='rgb(107, 107, 107)' size={20}/>
                <span className='desactive'>Coming soon</span>
            </div>
            <div className='item'>
            <HiIcons.HiDownload color='rgb(107, 107, 107)' size={20}/>
                <span className='desactive'>Downloads</span>
            </div>
        </div>
    )
}

export default Footer
