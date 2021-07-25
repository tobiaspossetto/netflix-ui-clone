import React,{ useState} from "react";
import axios from 'axios'

const NetflixContext = React.createContext();



export  function NetflixProvider(props) {

    
    const [action, setAction] = useState([]);
    const [adventure, setAdventure] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [crime, setCrime] = useState([]);
    const [fiction, setFiction] = useState([]);
    const [war, setWar] = useState([]);
    const [horror, setHorror] = useState([]);


    const [montado, setMontado] = useState(false);
   

    const llamadas =  async () => {
        await actionCall()
        await adventureCall()
        await comedyCall()
        await crimeCall()
        await fictionCall()
        await warCall()
        await horrorCall()
        setTimeout(() => {
            setMontado(true)
            console.log("montado")
        }, 3000);
        
    }

 
    //asd
    const actionCall = async () => {
        //let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f40a30d7101c8b410464aa69843e25df&with_genres=28&page=2`)
       // let data = await axios.get(`https://api.themoviedb.org/3/search/tv?query=lok&api_key=f40a30d7101c8b410464aa69843e25df`)
        let data = await axios.get(`https://api.themoviedb.org/3/search/multi?query=war&api_key=f40a30d7101c8b410464aa69843e25df`)
        data = await data.data.results
       setAction(data)
        
    }
    const adventureCall = async () => {
        let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f40a30d7101c8b410464aa69843e25df&with_genres=12&page=2`)
        data = await data.data.results
       setAdventure(data)
        
    }
    
    const comedyCall = async () => {
        let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f40a30d7101c8b410464aa69843e25df&with_genres=35`)
        data = await data.data.results
       setComedy(data)
        
    }
    const crimeCall = async () => {
        let data = await axios.get(`https://api.themoviedb.org/3/search/multi?query=murd&api_key=f40a30d7101c8b410464aa69843e25df&page=2`)
        data = await data.data.results
       setCrime(data)
        
    }
    const fictionCall = async () => {
        let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f40a30d7101c8b410464aa69843e25df&with_genres=878&page=2`)
        data = await data.data.results
       setFiction(data)
        
    }
    const warCall = async () => {
        let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f40a30d7101c8b410464aa69843e25df&with_genres=10752`)
        data = await data.data.results
       setWar(data)
        
    }

    const horrorCall = async () => {
        let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=f40a30d7101c8b410464aa69843e25df&with_genres=27&page=1`)
        data = await data.data.results
       setHorror(data)
        
    }







     //detail 
     const [detailActive, setDetailActive] = useState('detail detail-hidden');
     const [movieDetail, setMovieDetail] = useState([])

     const btnDetail = (movie) => {
            if(montado === true){
                setDetailActive('detail')
                console.log('activado')
                setMovieDetail(movie)
                console.log(movie)
            }
          
        
     }

     const btnCloseDetail = () => {
        setDetailActive('detail detail-hidden')
        setMovieDetail([])
     }






    //forma mas simple de pasarle los children
    return <NetflixContext.Provider value={{
            action,
            adventure,
            comedy,
            crime,
            fiction,
            war,
            horror,
            llamadas,
            detailActive,
            movieDetail,
            btnDetail,
            montado,
            btnCloseDetail
    }} {...props} />
}


export  function useNetflix() {
    const context = React.useContext(NetflixContext)

    //asegurarme de que no lo estoy llamando en un componente que no es hijo
    //solo es una verificacion
    if(!context){
        throw new Error ('useCart debe estar dentro del provider CartContext')
    }

    return context;
}