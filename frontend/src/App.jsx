import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import FAQ from './components/FAQ';
import About from './components/About';
import Instructor from './components/Instructors';
import Curriculum from './components/Curriculum';
import Review from './components/Reviews';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Curriculum/>
    <Instructor/>
    <Review/>
    <FAQ/>
    <Footer/>
    </>
    
  );
}

export default App
