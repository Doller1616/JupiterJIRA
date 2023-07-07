import React from 'react'
import './main.css'
// import 'antd/dist/antd.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from 'react-router-dom';
import store from './rootRedux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
