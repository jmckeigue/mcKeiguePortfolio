import { hydrateRoot } from 'react-dom/client';

import App from './App';

let data;

if (typeof window !== 'undefined') {
    // @ts-ignore
    data = window.__data__;
}

// @ts-ignore
hydrateRoot(document.getElementById('app'), <App data={data} />);