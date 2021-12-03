import React from 'react'
import axios from 'axios';
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';

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
                    <Route path='/edit' element={<Edit axiosInstance={axiosInstance} />} />
                </Routes>
            </main>
        </Router>
    )
}

export default App
