import React from 'react';
import Titre from './js/titre.js';
import Profil from './js/profil.js'
import './App.css';
import Footer from './js/footer.js';
import Question1 from './js/question/question1.js';

function App() {
  return (
    <div className="App">
      <Titre/>
      <Profil/>
      <Question1/>
      <Footer/>
    </div>

  );
}

export default App;
