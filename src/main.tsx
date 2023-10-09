import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// styles
import './index.css';
import './tailwind.css';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
// import { AuthProvider } from './hooks/useAuth';
// import { getFromLocalStorage } from './hooks/useLocalStorage';

// const authData = getFromLocalStorage('authData');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <AuthProvider storedAuthData={authData}> */}
    <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
);
