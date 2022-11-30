
import React from 'react';
import './bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
    <Router>

      <Header />
      <main className='py-3'>
      <Container>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
     </Routes>
      </Container>
      </main>
    
    </Router>
  );
}

export default App;
