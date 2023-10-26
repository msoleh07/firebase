import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Hero from './page/hero.tsx'
import Auth from './page/auth.tsx'
import { AuthProvider } from './context/app.context.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/auth' element={<Auth />} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
