import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-900 h-screen flex justify-center items-center'>
      <App />
    </div>
  </React.StrictMode>,
)
