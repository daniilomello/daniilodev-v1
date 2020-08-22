import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { Process } from './Pages/Process/Process';
import { Resume } from './Pages/Resume/Resume';
import { Projects } from './Pages/Projects/Projects';
import { NotFound } from './Pages/404/404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="process" element={<Process />}></Route>
        <Route path="resume" element={<Resume />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
