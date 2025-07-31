import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CharacterPage from "./pages/CharacterPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import WeeklyVideoPage from "./pages/LeaguePage";
import StatCalculatorPage from "./pages/StatCalculatorPage";
import EliteSkillPage from "./pages/EliteSkillPage";
import EliteSkillDetailPage from "./pages/EliteSkillDetailPage";
import LeaguePage from "./pages/LeaguePage";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        {/*<Route  path="/" component={EliteSkillPage} />*/}
        <Route path="/characters" component={CharacterPage} />
        <Route
          exact
          path={"/characterDetailPage/:char"}
          component={CharacterDetailPage}
        />
        <Route path="/league" component={LeaguePage} />
        <Route exact path="/skills" component={EliteSkillPage} />
        <Route
          exact
          path={"/skills/:position"}
          component={EliteSkillDetailPage}
        />
        <Route path="/statcalculator" component={StatCalculatorPage} />
      </div>
    </Router>
  );
}

export default App;
