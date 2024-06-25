import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

import Courses from './courses/Courses'
import Signup from './components/Signup'
const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App