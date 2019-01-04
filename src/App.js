import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BookItems from './BookItems'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      books : [],
      cartItemsList : [],
      searchItem: ''
    }
  }

  addItem = (newItem) =>{
    this.setState({
      ...this.state,
      cartItemsList: [...this.state.cartItemsList, newItem]
    })
  }

  handleSearchItem = (searchItem) => {
    this.setState({
      searchItem
    })
  }

  

  render() {
    return (
      <>
        <Header 
        books = {this.state.books}
        cartItemsList={this.state.cartItemsList}
        handleSearchItem={this.handleSearchItem} />
        <BookItems 
          addItem={this.addItem}
          searchItem = {this.state.searchItem}
          cartItemsList={this.state.cartItemsList}
          />
      </>
    );
  }
}

export default App;
