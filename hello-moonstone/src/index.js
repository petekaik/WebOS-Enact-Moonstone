/* global ENACT_PACK_ISOMORPHIC */

import ReactDOM from 'react-dom';

// Import core-js polyfills for older browsers.
// Uncoment the following line if you need polyfills for features not supported by WebOS 4.4.3 (Chromium 53).
// Consider importing only the necessary polyfills for better bundle size.
//import 'core-js/stable';

// Import regenerator-runtime for async/await support in older environments.
// Uncomment the following line if you are using async/await in your application.
//import 'regenerator-runtime/runtime';

import App from './App';

const appElement = (<App />);

// In a browser environment, render the application to the 'root' element.
if (typeof window !== 'undefined') {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        ReactDOM.render(appElement, rootElement);
    } else {
        console.error('Root element with ID "root" not found in the DOM.');
    }
}

// Export the appElement for potential server-side rendering or testing purposes.
export default appElement;