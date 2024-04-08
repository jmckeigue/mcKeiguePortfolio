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
                Team-oriented and hard-working individual seeking to apply my college degree and recent 
                work experiences to continue to expand my skill set in a professional environment. 
                Responsible, quick learner, and able to complete tasks in a timely and efficient manner.
                </p>
            </div>
        </section>
    );
};

export default Hero;