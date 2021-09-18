import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Organizations from './components/Organizations';
import Charitycauses from './components/Charitycauses';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Signup from './components/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>

      <div>
        <Header></Header>
        <main>
          <Switch>
          <Route exact path='/' component={Hero} />
          <Route exact path='/Organizations' component={Organizations} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Charitycauses" component={Charitycauses}/>
          <Route exact path="/Signup" component={Signup}/>
          </Switch>
        </main>
        <Footer></Footer>
      </div>

    </Router>
  );
}
// onclick event 
export default App;