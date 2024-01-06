import React from 'react';
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import { routesConfig } from './routes/routesConfig'; 

function App() {
    return (
        <Router>
            <Box>
                <Header />
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}

                        />
                    ))}
                </Routes>
            </Box>
        </Router>
        
    );
}

export default App;