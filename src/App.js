import React from 'react';
import HeaderNav from './components/headerNav';
import AboutMe from './components/section1';
import MyWork from './components/section2';
import ContactMe from './components/section3';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <HeaderNav />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;