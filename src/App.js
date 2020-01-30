import React from 'react';
import {  } from 'mobx-react';
import Root from './Root';
import { createStore } from './stores';
import './App.css';

const rootStore = new createStore();

function App() {
  return (
    <div className="App">
      <Root />
    </div>
  );
}

export default App;
