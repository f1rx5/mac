import React from "react";
// import Message from "./components/Message";
// import Login from "./components/Login";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./useRef/Login";
import EtApp from './ExpenseTracker/EtApp'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path='/expense' component={EtApp}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
