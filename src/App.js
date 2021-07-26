


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

