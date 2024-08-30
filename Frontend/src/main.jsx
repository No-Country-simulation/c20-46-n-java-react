import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App/App.jsx";
import "./index.css"
import Login from "./components/Login/Login.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
      <Login />
  </StrictMode>,
)
