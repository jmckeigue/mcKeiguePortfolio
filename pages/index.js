import React from 'react';
import Header from '../Header';
import Nav from './Nav';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Resume from '../components/Resume/ResumeSection';
import Contact from '../Contact';
import Footer from '../Footer';

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