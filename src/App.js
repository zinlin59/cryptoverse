import React from 'react';
import { BrowserRouter as Link, Routes, Route } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import './App.css'
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';
import Footer from './Footer';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage/>} />  
              <Route exact path="/exchanges" element={<Exchanges/>} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route exact path="/news" element={<News/>} />
            </Routes>
          </div>
        </Layout>
      
        <div className='footer' >
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
