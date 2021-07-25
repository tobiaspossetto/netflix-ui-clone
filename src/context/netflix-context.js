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

    const llamadas =  () => {
         actionCall()
         adventureCall()
         comedyCall()
         crimeCall()
         fictionCall()
         warCall()
         horrorCall()
        console.log(action)
        console.log(war)
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














    //useMemo optimiza, guarda una referencia al objeto y retorna ese objeto sin volverlo a crear 
    //a menos que la referencia cambie. Ayuda a que react no refresque al vicio 
    const value = React.useMemo(() => {
        return ({
            action,
            adventure,
            comedy,
            crime,
            fiction,
            war,
            horror,
            llamadas
            
        })
    },[ action,
        adventure,
        comedy,
        crime,
        fiction,
        war,
        horror])

    //forma mas simple de pasarle los children
    return <NetflixContext.Provider value={value} {...props} />
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