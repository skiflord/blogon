import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Posts from './components/posts/Posts';

function App() {
  return (
    <div style={{backgroundColor: '#f2f3f4'}}>
      <Header/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
