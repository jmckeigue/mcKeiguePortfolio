import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* CSS Styles */}
                <link rel="stylesheet" href="/src/styles.css" />
                {/* Favicons */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="src/icons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="src/icons/favicon-32x32.png"
                />
                {/* Animate CSS CDN */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <title>Jackson McKeigue | Software Developer</title>
                {/* app-head */}
            </Head>
    );
};

export default Header;
