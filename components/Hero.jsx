import React from 'react';

const Hero = () => {
    return (
        <section class="hero" id="about">
            <img
                src="src/icons/profile.jpg"
                alt="jackson"
                loading="lazy"
                class="hero-img"
            />
            <div class="bio animage__animated animate__shakeX">
                <h2 class="bio-title">About Me</h2>
                <p class="bio-text">
                Results-driven and adaptable Computer Science graduate seeking to leverage recent internship
                experiences and strong programming skills in a professional setting. Eager to contribute to
                impactful projects while continuing to expand knowledge and expertise in software development.
                </p>
            </div>
        </section>
    );
};

export default Hero;