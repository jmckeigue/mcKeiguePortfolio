import React from 'react';

const Resume = () => {
    return (
        <section class="resume" id="resume">
            <h2>Resume</h2>      
                <div class="resume-container">
                    <a href="./resume.html" target="_blank">View/Download Resume (PDF)
                        <img 
                            src="src/icons/Mckeigue-Resume.png"
                            alt="Resume"
                            loading="lazy"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </a>
                </div>  
        </section>
    );
};

export default Resume;