import React from 'react';
import './App.css';
import Navbar from './component/navbar/navClassCom';
import SecDiv from './component/secDiv/secDiv';
import Skill from './component/skill/skill';
import Portfolio from './component/portfolio/portolio';
import Footer from './component/footer/footer';
import './component/navbar/navbar.css';
import './component/secDiv/secDiv.css';
import './component/skill/skill.css';
import './component/portfolio/portolio.css';
import './component/footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  return (
    // to rab multipli return
    // fragment 
    <>
      <Navbar/>
      <SecDiv/>
      <Skill/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;
