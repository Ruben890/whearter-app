import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from 'react-redux'
import { store } from './apps/store';
import Routers from './Routes/routes';
import "./app.css"
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routers />
      </Provider>
    </>
  )
}

export default App
