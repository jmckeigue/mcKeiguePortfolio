import React from 'react';

const ResumeSection = () => {
    return (
        <section className="resume" id="resume">
            <h2>Resume</h2>
            <div className="resume-container">
                <a href="/resume" target="_blank">View/Download Resume (PDF)
                    <img 
                        src="src/icons/McKeigue_Resume.png"
                        alt="Resume"
                        loading="lazy"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </a>
            </div>
        </section>
    );
};

export default ResumeSection;