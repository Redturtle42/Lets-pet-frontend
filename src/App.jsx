import React, { useParams } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Body from './components/Body'
import Snow from './components/Snow';
import PetFinder from './components/PetFinder';
import Contact from './components/Contact'
import Footer from './components/Footer';
import { pets } from './mock-data/pets';
import PetService from './services/petService';
import Categories from './mock-data/categories'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/body.css';
import './assets/stylesheets/contact.css';
import './assets/stylesheets/footer.css';
import './assets/stylesheets/homePage.css';
import './assets/stylesheets/modal.css';
import './assets/stylesheets/navbar.css';
import './assets/stylesheets/petCard.css';
import './assets/stylesheets/sideBar.css';
import './assets/stylesheets/snow.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.petService = new PetService(pets)
  }

  render() {
    return (
      <React.Fragment>
        <Snow />
        <Router>
          <Body />
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path='/'>
              <React.Fragment>
                <HomePage />
                <Footer />
              </React.Fragment>
            </Route>
            <Route path='/pets'>
              <React.Fragment>
                <PetFinder categories={Categories} service={this.petService} />
              </React.Fragment>
            </Route>
            <Route path='/contact'>
              <React.Fragment>
                <Contact service={this.petService} categories={Categories} />
                <Footer />
              </React.Fragment>
            </Route>
          </Switch>
        </Router>
      </React.Fragment >
    );
  }
}

export default App;
