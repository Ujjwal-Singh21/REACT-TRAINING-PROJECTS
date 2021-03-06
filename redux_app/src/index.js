import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import AppRouter from './routers/AppRouter'
import getAppStore from './store/store'
import { getBooks } from './actions/books'
import './styles/styles.scss'

import { Provider } from 'react-redux'

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

const store = getAppStore()

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

store.dispatch(getBooks()).then(() => {
  ReactDOM.render(template, document.getElementById('root'))
})
