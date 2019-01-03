import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BookItems from './BookItems'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      books : [
        {
          "title": "test",
          "author": "aa",
          "pages": 472,
          "inCart": false,
          "price": 5,
          "id": 0
      }
    ],
    cartItemsList : [
    ]
    }
  }

  addItem = (newItem) =>{
    this.setState({
      ...this.state,
      cartItemsList: [...this.state.cartItemsList, newItem]
    })
  }

  render() {
    return (
      <>
        <Header cartItemsList={this.state.cartItemsList}/>
        <BookItems 
          addItem={this.addItem}
          books = {this.state.books}
          cartItemsList={this.state.cartItemsList}
          />
      </>
    );
  }
}

export default App;
