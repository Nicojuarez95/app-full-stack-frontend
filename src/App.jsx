import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './Pages/index.js'
import { store } from './Store/store.js'
import "./App.css"

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;