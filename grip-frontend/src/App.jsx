import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Grip from './components/Grip'
import OurTeam from './components/OurTeam'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <df-messenger
          chat-icon="https://tsf-grip.web.app/static/media/Logo.c97a7b25.png"
          intent="WELCOME"
          chat-title="TSF-GRIP-assistant"
          agent-id="3be430dc-7b6b-4c9d-a4de-d8282edb7f95"
          language-code="en"
        ></df-messenger>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ourteam" component={OurTeam} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/grip" component={Grip} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
