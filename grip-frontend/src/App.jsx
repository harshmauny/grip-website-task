import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Grip from './components/Grip'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/grip" component={Grip} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
