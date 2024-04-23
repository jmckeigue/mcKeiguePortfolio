import React from 'react';
import Header from '../components/Header';
import ResumeHeader from './ResumeHeader';
import Footer from './Footer';
import SocialSection from '../components/SocialSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

const ResumePage = () => {
    return (
        <div>
            <Header />
            <ResumeHeader />
            <main style={{ padding: '20px' }}>
                <object data="/McKeigue_Resume.pdf" type="application/pdf" width="95%" height="800">
                <iframe src="/McKeigue_Resume.pdf" style={{ width: '100%', height: '100%', border: 'none' }} title="My Resume"></iframe>
                </object>
            </main>
            <ScrollToTopButton />
            <SocialSection />
            <Footer />
        </div>
    );
};

export default ResumePage;
