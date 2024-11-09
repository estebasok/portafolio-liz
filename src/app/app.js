// src/App.js

import React from 'react';
import Layout from './components/Layout';
import Page from './components/Page';
import './App.css';
import Contenido from '/Contenido/page.js'

function App() {
  return (
    <div className="App">
      <Layout>
        <Page />
        <Contenido/>
      </Layout>
    </div>
  );
}

export default App;
