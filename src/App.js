import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { PacmanLoader} from 'react-spinners';
import { AnimatePresence,motion } from 'framer-motion'

const pageTransition ={
  in:{
      opacity: 1,
      y: 0
  },
  out:{
      opacity: 0,
      y:"-100%"
  }
};

const data ={
  avt : "" ,
  name:"Do Tuan Anh",
  desc:"I'm is a designer",
  phone:'0345066395',
  email:"anhdt1717@gmail.com",
  dob:'11/10/2000',
  address:"Thuy Ninh - Thai Thuy - Thai Binh",
  lang:"VietNamese"
}

function App() {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    loading ?
    (
      <div className='loading'>
            <PacmanLoader
      color={'#1FB961'} loading={loading} size={30} />
      </div>)
        :(
    <Router>
        <Header />
        <AnimatePresence>
          <Switch>
            <Route path='/' exact>
              <About
                data={data}
                pageTransition = {pageTransition}
              />
            </Route>
            <Route path='/skills'>
              <Skills 
                pageTransition = {pageTransition}
              />
            </Route>
            <Route path='/education'>
              <Education
                pageTransition = {pageTransition}
              />
            </Route>
            <Route path='/experience'>
              <Experience
                pageTransition = {pageTransition}
              
              />
            </Route>
            <Route path='/portfolio'>
              <Portfolio 
                pageTransition = {pageTransition}
              
              />
            </Route>
            <Route path='/contact'>
              <Contact              
                pageTransition = {pageTransition}
              />
            </Route>
          </Switch>
        </AnimatePresence>
    </Router>)
  );
}

export default App;
