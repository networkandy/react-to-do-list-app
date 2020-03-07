import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from "./component/Todoinput";
import Todolist from "./component/Todolist";


 class App extends Component {
  render() {
    return (
      <div >
       
        <div className="container">
          <div className="row">
            <Todoinput />
            <Todolist />
          </div>
        </div>
      </div>
    )
  }
}



export default App;