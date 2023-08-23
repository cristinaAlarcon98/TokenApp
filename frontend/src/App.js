import './App.css';
import {MainPage} from './containers/mainpage/MainPage.tsx';
import {ThemeProvider} from '@mui/material';
import {theme} from './styles/theme.js';
import React from 'react';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainPage/>
        </ThemeProvider>
    );
}
export default App;
