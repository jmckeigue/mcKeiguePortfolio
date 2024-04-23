import React from 'react';
import Header from '../components/Header';
import Nav from './Nav';
import SocialSection from '../components/SocialSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

const ResumePage = () => {
    return (
        <div>
            <Header />
            <Nav />
            <main style={{ padding: '20px' }}>
                <object data="/McKeigue_Resume.pdf" type="application/pdf" width="100%" height="800">
                <iframe src="/McKeigue_Resume.pdf" style={{ width: '100%', height: 'auto', border: 'none' }} title="My Resume"></iframe>
                </object>
            </main>
            <ScrollToTopButton />
            <SocialSection />
        </div>
    );
};

export default ResumePage;
