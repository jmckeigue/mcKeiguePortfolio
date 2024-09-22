import React from 'react';

const Skills = () => {
    return (
        <section class="skills" id="skills">
            <h2 class="skill-header">My Top Skills</h2>

            <div class="skills-wrapper">
                <div class="first-set animate__animated animate__pulse">
                <img
                    src="src/icons/javascript.png"
                    alt="JavaScript"
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="src/icons/React.png"
                    alt="React"
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="src/icons/SQL.png"
                    alt="SQL"
                    loading="lazy"
                    class="icon icon-card"
                />
            </div>
            <div class="second-set animate__animated animate__pulse">
                <img
                    src="src/icons/Python.png"
                    alt="Python"
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="src/icons/Csharp.png"
                    alt="Csharp"
                    loading="lazy"
                    class="icon icon-card"
                />
                <img
                    src="src/icons/git.png"
                    alt="Git"
                    loading="lazy"
                    class="icon icon-card"
                />
                </div>
            </div>
        </section>
    );
};

export default Skills;