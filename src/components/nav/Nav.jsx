import React, {useState, useEffect} from 'react'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
require('./nav.css')
const Nav = () => {

      const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    //console.log(scrolling)
    return () => window.removeEventListener("scroll", onScroll);

  });








    

    const [classHeader, setClassHeader] = useState('header')
    const [classNav, setClassNav] = useState('header-nav')

    useEffect(() =>{
        if(scrolling === true){
            setClassHeader('header')
            setClassNav('header-nav')
            
        }else{
            setClassHeader('header-scroll')
            setClassNav('nav-scroll')
            
        }
    },[scrolling])
    return (
        <div className="nav">
           

            <div className={"header " + classHeader}>
                    <div className="logo"><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170919.png" /></div>
                    <div className="user">
                        <FiIcons.FiSearch className='icon' color='white' size={25}/>
                        <FaIcons.FaUserCircle className='icon' color='white' size={25}/>
                    </div>

            </div>
           
            <div className={'header-nav ' + classNav}>
                <span>Series</span>
                <span>Peliculas</span>
                <span>Mi lista</span>
            </div>
        </div>
    )
}

export default Nav
