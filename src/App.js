


import ComponentContainer from './components/ComponentContainer'
import { NetflixProvider } from './context/netflix-context'


function App() {


 
  return (
    <NetflixProvider>

        <ComponentContainer className="app"/>
       
    </NetflixProvider>
  );
}

export default App;


/* {
          pelis.map((i) => {
            return (
              <>
                   <p key={i.id}>{i.title}</p>
                  <span ><img src={'https://image.tmdb.org/t/p/original'+i.poster_path}></img></span>
              </>
             
            )
          }
           
            
         )

           
          
        } */