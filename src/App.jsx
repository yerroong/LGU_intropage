import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PhotoPage from './components/PhotoPage';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div id="container">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/photo" element={<PhotoPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;