
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  return (

    <Router>
      <div>
    
        <Route path="/" component={HomePage}/>
        {/*<Landing /> */}
      </div>
    </Router>
  );
}

export default App;
