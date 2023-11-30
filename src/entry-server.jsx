import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './App';

export const render = (url, _context) => {
    const html = ReactDomServer.renderToString(
        <App />
    )
    return {html}
}

const _export = {
    render
}

export default _export