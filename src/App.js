import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from "./component/Todoinput";
import Todolist from "./component/Todolist";


 class App extends Component {
   state ={
    items:[],
    id: uuidv4(),
    item: '',
    editItem: false
   }

   handleChange = (e)=> {
      this.setState({
        item:e.target.value
      });
   }


   handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false
      }
    );
  };


  //  handleSubmit = (e) => {
  //    e.preventDefault();
  //    const newItem = {
  //      id: this.state.id,
  //      title: this.state.item
  //    }

   
  //   const updatedItems = this.state.items.push(newItem);

  //    this.setState({
  //      items: updatedItems, 
  //      item: '',
  //      id: uuidv4(),
  //      editItem: false
  //    }, console.log(this.state));

    
  //  }





   clearList = () => {
    this.setState({
      items: []
    });
   }

   handleDelete = (id) => {
    console.log(`handle edit ${id}`);
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems
    });
   }

   handleEdit = (id) => {
    console.log(`edit edit ${id}`);
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item  => item.id === id);
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
    console.log(selectedItem);
   }

  render() {
      


    return (
      
       
        <div className="container">
          <div className="row">
              <div className="col-10 mx-auto col-md-8 mt-5">
                  <h3 className="text-capitalize text-center">
                    To Do Input
                  </h3>
                  <Todoinput 
                    item={this.state.item} 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    editItem={this.state.editItem}
                   />
                  <Todolist 
                    items={this.state.items}
                    clearList={this.clearList}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                     />
              </div>
          </div>

        </div>

     
    )
  }
}



export default App;