import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot() React가 관리할 공간을 찾는다 여기를 내가 건설할게, render() 실제 집을 짓는 과정
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
