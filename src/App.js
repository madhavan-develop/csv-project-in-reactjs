import React from 'react';
import './App.css';
import { Assesment } from './milestone/milestone';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './milestone/menu';
import { Mile1 } from './milestone1';
function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/mile" element={[<Assesment/>]}/>
      <Route path="/miles/:id" element={[<Mile1/>]}/>
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;
