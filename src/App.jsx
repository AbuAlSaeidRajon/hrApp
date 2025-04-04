import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Person from './Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Person 
          name="John Doe"
          title="Software Engineer"
          salary="$100,000"
          phone="123-456-7890"
          email="john.doe@example.com"
          animal="Dog"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;