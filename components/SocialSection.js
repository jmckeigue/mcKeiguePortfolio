const SocialSection = () => {
    return (
        <div className="socials">
            <a href="https://instagram.com/jackson.mckeigue/" target="_blank">
                <img
                    src="src/icons/instagram.gif"
                    alt="Instagram"
                    loading="lazy"
                    className="socicon"
                />
            </a>
            <a href="https://linkedin.com/in/jackson-mckeigue/" target="_blank">
                <img
                    src="src/icons/linkedin.gif"
                    alt="Linkedin"
                    loading="lazy"
                    className="socicon"
                />
            </a>
            <a href="https://github.com/jmckeigue" target="_blank">
                <img src="src/icons/github.gif" alt="Github" className="socicon"/>
            </a>
        </div>
    );
}

export default SocialSection;
