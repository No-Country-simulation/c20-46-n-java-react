import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Blog from "../Blog/Blog.jsx";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";
import Scheduler from "../Scheduler/Scheduler.jsx";
import Chat from "../Chat/Chat.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
      <>
          <Navbar />
          <div className="container mx-auto">
              <Routes>
                  <Route path="/" element={<Chat/>}/>
                  <Route path="/blog" element={<Blog/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/forgotpass" element={<ForgotPassword/>}/>
                  <Route path="/scheduler" element={<Scheduler/>}/>
              </Routes>
          </div>
      </>
  )
}

export default App
