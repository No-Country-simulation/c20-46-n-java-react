import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Blog from "../Blog/Blog.jsx";

function App() {
  return (
      <div className="">
          <Routes>
              <Route path="/" element={<Blog/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </div>
  )
}

export default App
