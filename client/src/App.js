import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Posts from './components/posts/Posts';
import Login from './components/auth/Login';
import Register from './components/auth/Register'

function App() {
  return (
    <Router>
      <div style={{backgroundColor: '#f2f3f4'}}>
        <Header/>
        <Route exact path='/' component={Posts}/>
        <div style={{margin: '10em 1em 10em 1em'}}>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
