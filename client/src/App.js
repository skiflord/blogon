import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Posts from './components/posts/Posts';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{backgroundColor: '#f2f3f4'}}>
          <Header/>
          <Route exact path='/' component={Posts}/>
          <div>
            <Container>
              <Alert />
            </Container>
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
