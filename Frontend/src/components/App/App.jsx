import './App.css'
import {Route, Routes} from "react-router-dom";
import Blog from "../Blog/Blog.jsx";
import Scheduler from "../Scheduler/Scheduler.jsx";
import Chat from "../Chat/Chat.jsx";
import TopBar from './TopBar.jsx';
import { LandingPage } from '../Landing/LandingPage.jsx';

function App() {
  return (
      <>
          <TopBar />
          <main className="main-content">
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="/blog" element={<Blog/>}/>
                  <Route path="/chat" element={<Chat/>}/>
                  <Route path="/scheduler" element={<Scheduler/>}/>
              </Routes>
          </main>
      </>
  )
}

export default App
