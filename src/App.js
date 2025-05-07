
 import Accueil from "./components/Accueil"
  
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import Description from "./components/Description"

import initialMovies from "./initialMovie";

 const App = () => {

    return(  
      <Router>
      <Routes>
        <Route path="/" element={<Accueil />} /> {/* Routes racine */ }
        <Route path= "/Description/:id"   element={<Description movies={initialMovies}  />} /> {/* Route qui renvoie á la 
        page de bande d'annonce */ }

      </Routes>
    </Router>
    )
 }

export default App
