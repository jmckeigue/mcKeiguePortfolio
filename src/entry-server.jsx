import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export const render = (url, _context) => {
    const html = ReactDomServer.renderToString(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    )
    return {html}
}

const _export = {
    render
}

export default _export