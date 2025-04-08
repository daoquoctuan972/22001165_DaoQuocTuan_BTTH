import './App.css'
import LayoutAdmin from './layout/layoutAdmin'
import User from './user/User'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutAdmin />} />
        <Route path='/home' element={<LayoutAdmin />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </>
  )
}

export default App
