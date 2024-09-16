import './App.css'
import {Route, Routes} from "react-router-dom";
import Blog from "../Blog/Blog.jsx";
import Scheduler from "../Scheduler/Scheduler.jsx";
import Chat from "../Chat/Chat.jsx";
import { LandingPage } from '../Landing/LandingPage.jsx';
import AuthProvider from "../../hooks/AuthProvider.jsx";

function App() {
  return (
      <>
          <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/scheduler" element={<Scheduler/>}/>
                </Routes>
          </AuthProvider>
      </>
  )
}

export default App
