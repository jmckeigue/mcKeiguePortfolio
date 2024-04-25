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
            <main class="resume-container">
                <iframe src="/McKeigue_Resume.pdf" class="resume-iframe" title="My Resume" style={{ border: 'none' }}></iframe>
            </main>
            <ScrollToTopButton />
            <SocialSection />
            <Footer />
        </div>
    );
};

export default ResumePage;
