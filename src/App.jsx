import React from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Box from './Box/Box.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Box 
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