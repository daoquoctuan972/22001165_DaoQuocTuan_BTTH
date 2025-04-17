import BtRedux from './pages/redux'
import './App.css'
import BtUseReducer from './pages/useReducer'
import store from './components/redux/store.js'
import { storeToolkit } from './components/redux/storeToolkit.js'
import BtReduxToolkit from './pages/reduxToolkit.jsx'
import { Provider } from 'react-redux'
import TodoList from './pages/todoList.jsx'
import ThemeTogglePage from './pages/ThemeToggle.jsx'
import CartPage from './pages/cart.jsx'
import LoginPage from './pages/Login.jsx'

function App() {


  return (
    <>
      <BtUseReducer></BtUseReducer>
      <Provider store={store}>
        <BtRedux/>
      </Provider>
      <Provider store={storeToolkit}>
        <BtReduxToolkit/>
        <ThemeTogglePage/>
        <TodoList></TodoList>
        <CartPage></CartPage>
        <LoginPage></LoginPage>
      </Provider>

    </>
  )
}

export default App
