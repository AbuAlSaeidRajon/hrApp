import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Person from './Person.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Person 
          name="Md Saeid"
          title="Web Developer"
          salary="€5000"
          phone="123-456-7890"
          email="khanrajon5@gmail.com"
          animal="Cat"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;