
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import CharacterPage from './pages/CharacterPage';
import CharacterDetailPage from './pages/CharacterDetailPage';

import SkillsModal from './components/Modals/SkillsModal';

function App() {
  const selectedCharacter = "Claw"
  const eliteSkills = "../assets/images/elite_skills/claw_pf_elite_skills.PNG"
  const position = "Power_Forward"


  return (
    <div>
<div style={{color: "white"}}>modal testing</div>



      <SkillsModal selectedCharacter={selectedCharacter} position = {position} eliteSkills={eliteSkills} />

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
