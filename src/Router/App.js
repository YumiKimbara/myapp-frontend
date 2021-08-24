import { Switch, Route, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Home from "../components/Home";
import Question from "../components/Question";
import ForgotPw from "../components/ForgotPw";
import Result from "../components/Result";
import Modals from "../components/Modals";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Header />
      <Switch location={background || location}>
        <Route exact path="/forgotpw" component={ForgotPw} />
        <Route exact path="/" component={Home} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/result" component={Result} />
      </Switch>
      {background && <Route exact path="/:id" children={<Modals />} />}
    </>
  );
}

export default App;
