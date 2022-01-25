import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CharacterPage from "./pages/CharacterPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import WeeklyVideoPage from "./pages/WeeklyVideoPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import EliteSkillPage from "./pages/EliteSkillPage";
import EliteSkillDetailPage from "./pages/EliteSkillDetailPage";


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
        <Route path="/weeklyvideo" component={WeeklyVideoPage} />
        <Route exact path="/skills" component={EliteSkillPage} />
        <Route
          exact
          path={"/skills/:position"}
          component={EliteSkillDetailPage}
        />
        <Route path="/comingsoon" component={ComingSoonPage} />
      </div>
    </Router>
  );
}

export default App;
