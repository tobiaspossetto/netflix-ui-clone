import React from 'react'
import *  as AiIcons  from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import * as HiIcons from 'react-icons/hi'
import * as MdIcons from 'react-icons/md'
import { useNetflix } from '../context/netflix-context'

require('./detail.css')
const Detail = () => {

    const {movieDetail,detailActive , btnCloseDetail} = useNetflix()
    return (
        <div className={detailActive}>
          <div className="detail-info " >
                <div className="img"><img src={" https://image.tmdb.org/t/p/original/"+movieDetail.poster_path}></img></div>
                <div className="information">

                    <div className="title">
                        <h2>{movieDetail.title}</h2>
                        <button onClick={btnCloseDetail} className='closeBTN'><AiIcons.AiFillCloseCircle color='#d2d2d2' size={35}/></button>
                    </div>
                    <div className="resume">
                        <p>{movieDetail.overview}</p>
                    </div>
                </div>
          </div>
          <div className='control'>
            
            
                     <div className='btn-reproducir'>
                        <GrIcons.GrPlayFill color='black' size={15}/>
                        <span>Play now </span>
                    </div>

                   
                    <div className='btn-descargar'>
                                <HiIcons.HiDownload color='white' size={30}/>
                                    <span className='desactive'>Download</span>
                                </div>
                            
                            </div>
          <div className='more'>
              <div className='morebtn'>
             
                     
                        <AiIcons.AiOutlineInfoCircle color='white' size={25}/>
                        <span>Details and more</span>
                   
              </div>
              <MdIcons.MdKeyboardArrowRight color='white' size={35}/>
          </div>
        </div>
    )
}

export default Detail
