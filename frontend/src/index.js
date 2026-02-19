import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Optional: your custom global styles

// Optional: Global background and font styling via CSS
// index.css example:
// body {
//   background: linear-gradient(135deg, #ff416c, #ff4b2b, #1f4037, #99f2c8);
//   background-size: 400% 400%;
//   animation: gradientAnimation 15s ease infinite;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   margin: 0;
//   min-height: 100vh;
// }
//
// @keyframes gradientAnimation {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Optional: Bootstrap container wrapper */}
    <div className="container-fluid p-0">
      <App />
    </div>
  </React.StrictMode>
);
