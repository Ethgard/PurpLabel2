import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ClientDetailsForm from './ClientDetailsForm';
import ClientsTable from "./ClientsTable";
import Logintbygoogle from "./components/routes/Logintbygoogle"
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./components/routes/Home"

function App() {
    return (
        <div className="App">
            {/*<Login/>*/}
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Logintbygoogle}/>
                    <Route exact path="/homepage" component={Home}/>
                    <Route exact path="/login" component={Logintbygoogle}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
