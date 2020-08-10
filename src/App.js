import React from 'react';
import './App.css';
import Navbar from '../src/components/layout/navbar'
import LettersPage from '../src/components/lettersPage/index'
import Pentagon from '../src/components/layout/pentagonMenu/index'
import BottomMenu from '../src/components/layout/bottommenu/index'
import Test from '../src/components/test/index'

function App() {
  return (
    <>
      <Navbar />
      <LettersPage />
      <BottomMenu />
      {/* <Pentagon /> */}
    </>
  );
}

export default App;