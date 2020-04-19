import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './Login';
import ClientDetailsForm from './ClientDetailsForm';
import ClientsTable from "./ClientsTable";

function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
      <ClientDetailsForm/>
      <ClientsTable/>
    </div>
  );
}

export default App;
