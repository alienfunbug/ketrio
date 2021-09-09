
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import CharacterPage from './pages/CharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
function App() {
  return (

    <Router>
      <div>
    
        <Route path="/" component={CharacterDetailPage}/>
        {/*<Landing /> */}
      </div>
    </Router>
  );
}

export default App;
