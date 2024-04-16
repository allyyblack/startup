import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Login } from './login/login';
import { About } from './about/about';
import { Chat } from './chat/chat';
import { Connect } from './connect/connect';

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }
  
export default function App() {
    return <BrowserRouter>
     <div>
    <header>
      <h1>Picklr</h1>
      <nav>
        <menu>
            <li><NavLink to="index">Home</NavLink></li>
            <li><NavLink to="connect">Connect</NavLink></li>
            <li><NavLink to="chat">Chat</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
        </menu>
      </nav>
    </header>
    <Routes>
        <Route path='/index' element={<Login />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
    </Routes>

  
    <footer>
      <span>Author Name: Ally Black</span>
      <div> 
        <a href="https://github.com/allyyblack/startup.git"> My GitHub repo</a>
        </div>
    </footer>
  </div>
  </BrowserRouter>
}
