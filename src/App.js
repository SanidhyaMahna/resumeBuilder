import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import Header from './components/presentation/header';
import Footer from './components/presentation/footer';
import LandingPage from './components/presentation/landingPage';
import GettingStarted from './components/presentation/gettingStarted';
import Login from './components/presentation/login';
import Register from './components/presentation/register';
import AboutUs from './components/presentation/aboutUs';
import Contacts from './components/presentation/contact';
import Education from './components/presentation/education';
import Finalize from  './components/presentation/finalizePage';
import PrivateRoute from './components/presentation/PrivateRoute';

function App() {
  return (
    <div>
     <Header></Header>

     <Switch>
          <PrivateRoute path="/education" component={Education}></PrivateRoute>
          <PrivateRoute path="/contact" component={Contacts}></PrivateRoute>
          <PrivateRoute path="/getting-started" component={GettingStarted}></PrivateRoute>
          <PrivateRoute path="/resume-templates" component={GettingStarted}></PrivateRoute>
          <PrivateRoute path="/about-us"     component={AboutUs}></PrivateRoute>
          <PrivateRoute path="/finalize" component={Finalize}></PrivateRoute>
          <PrivateRoute path="/login" component={Login}></PrivateRoute>
          <PrivateRoute path="/register" component={Register}></PrivateRoute>             
          <PrivateRoute path="/" component={LandingPage}></PrivateRoute>
      </Switch>
      <Footer></Footer>   
    </div>
   
  );
}

export default App;
