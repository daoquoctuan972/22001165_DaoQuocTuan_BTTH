import Dashboard from './page/DashBoard'
import UserDetail from './page/User'
import './App.css'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/home' element={<Dashboard/>}></Route>
          <Route path='/user/:id' element={<UserDetail/>}></Route>
        </Routes>
    </>
  )
}

export default App
