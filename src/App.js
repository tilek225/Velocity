import React from 'react'
import FirstScreen from './components/FirstScreen/FirstScreen';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inside from './components/Inside/Inside';
import Service from './components/Service/Service';
import Some from './components/Some/Some';


function App() {
  return (
    <>
      <Header />
      <main>
        <FirstScreen />
        <Inside />
        <Service />
        <Some />
      </main>
      <Footer />
    </>
  );
}

export default App;
