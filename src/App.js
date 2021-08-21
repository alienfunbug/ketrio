import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (

    <Router>
      <div>
        <Landing />
      </div>
    </Router>
  );
}

export default App;
