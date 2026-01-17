import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskByAPI from './components/TaskByAPI'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ToDoList />}></Route>
      <Route path="/tasks" element={<TaskByAPI />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
