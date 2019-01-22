import React from 'react';
import ReactDOM from 'react-dom';

const App = React.lazy(() => import('./App'));

ReactDOM.render(<React.Suspense fallback={<div>Loading...</div>}><App /></React.Suspense>, document.querySelector('#app'));
