import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import './App.css';
import MasterLayout from './layouts/MasterLayout';
import MobileMasterLayout from './layouts/MobileMasterLayout';
import {IsMobile} from './utils/DataConfig'

function App() {
  return (
    <Provider store={store}>
      {
        IsMobile?<MobileMasterLayout/>: <MasterLayout/>
      }
    </Provider>
  );
}
export default App;
