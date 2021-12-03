import React from 'react'
import axios from 'axios';
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Contact from './pages/Contact';

const App = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home axiosInstance={axiosInstance} />} />
                    <Route path='/add' element={<Add axiosInstance={axiosInstance} />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
        </Router>
    )
}

export default App
