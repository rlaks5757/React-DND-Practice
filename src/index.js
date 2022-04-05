//New Version
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Router />);

//Old Version
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Router from './Router';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
