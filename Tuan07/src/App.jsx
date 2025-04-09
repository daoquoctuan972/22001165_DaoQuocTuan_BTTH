import './App.css'
import LayoutAdmin from './layout/layoutAdmin'
import UserProfile from './user/User'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutAdmin />} />
        <Route path='/home' element={<LayoutAdmin />} />
        <Route path='/user/:id' element={<UserProfile/>} />
      </Routes>
    </>
  )
}

export default App
