
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import CharacterPage from './pages/CharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage';

import Modal from './components/Modal/Modal'

function App() {
  return (
    <div>
<div style={{color: "white"}}>modal testing</div>
      <Modal/>

</div>
    /*
    <Router>
      <div>
    
        <Route exact path='/' component={LandingPage}/>
        <Route path='/characters' component={CharacterPage}/>
        <Route exact path={'/characterDetailPage/:char'} component={CharacterDetailPage}/>

      </div>
    </Router> */
  );
}

export default App;
