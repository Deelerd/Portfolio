import React from 'react'
import ReactDOM from 'react-dom'
import AppRoute from './AppRoute'

import ReduxThunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import Reducers from './redux/reducers'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'

import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'

let store = createStore(Reducers, applyMiddleware(ReduxPromise, ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRoute />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);