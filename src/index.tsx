import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routesConfig} from "./routes/routesConfig";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              {routesConfig.map((route, index) => (
                  <Route
                      key={index}
                      {...route}
                  />
              ))}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
