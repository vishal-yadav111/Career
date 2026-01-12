import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { BugReportForm } from './components/NewUi/Form'
import CardDemo from './components/NewUi/Cardprint'

import { Route, Routes } from 'react-router-dom'
import DialogUser from './components/NewUi/DialogueUser'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CardDemo />} />
        <Route path='/bugform' element={<BugReportForm />} />
        <Route path='/dialog' element={<DialogUser />} />
      </Routes>
    </>
  )
}

export default App
