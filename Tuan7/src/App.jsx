import Dashboard from './page/DashBoard'
import UserDetail from './page/User'
import './App.css'
import { Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/home' lement={<Dashboard/>}></Route>
          <Route path='/user' lement={<UserDetail/>}></Route>
        </Routes>
    </>
  )
}

export default App
