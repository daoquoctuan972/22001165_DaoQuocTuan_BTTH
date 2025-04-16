import BtRedux from './pages/redux'
import './App.css'
import BtUseReducer from './pages/useReducer'
import store from './components/redux/store.js'
import { storeToolkit } from './components/redux/storeToolkit.js'
import BtReduxToolkit from './pages/reduxToolkit.jsx'
import { Provider } from 'react-redux'
function App() {


  return (
    <>
      <BtUseReducer></BtUseReducer>
      <Provider store={store}>
        <BtRedux/>
      </Provider>
      <Provider store={storeToolkit}>
        <BtReduxToolkit/>
      </Provider>
    </>
  )
}

export default App
