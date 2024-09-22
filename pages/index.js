import React from 'react';
import Header from '../components/Header';
import Nav from './Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Resume from '../components/Resume/ResumeSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;