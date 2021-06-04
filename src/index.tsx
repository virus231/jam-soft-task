import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"
import {persistor, store} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <ChakraProvider>
          <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)