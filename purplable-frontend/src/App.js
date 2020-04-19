import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Demo from './Demo';
import ClientsTable from "./ClientsTable";

function App() {
  return (
    <div className="App">
      <Demo/>
      <ClientsTable/>
    </div>
  );
}

export default App;
