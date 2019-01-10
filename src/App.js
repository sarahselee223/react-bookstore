import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BookItems from './BookItems'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      books : [],
      cartItemsList : [],
      searchItem: ''
    }
  }

  componentDidMount(){
    this.getBooks()
  }

  getBooks = async() => {
      try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`)
          this.setState({
              books: response.data
          })
      } catch(err){
          console.log(err)
      }
  }

  createBook = async(book) => {
    try {
      const newBook = {
        "title": `${book.newTitle}`,
        "subtitle": `${book.newSubtitle}`,
        "author": `${book.newAuthor}`,
        "published": `${book.newPublished}`,
        "publisher":`${book.newPublisher}`,
        "price":`${Number(book.newPrice)}`,
        "description":`${book.newDescription}`, 
        "website":`${book.newWebsite}`, 
        "pages":`${book.newPages}`
      }
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/books`, newBook)
      this.setState({
        ...this.state,
        books: [...this.state.books, response.data]
      })
    } catch(err){
      console.log(err)
    }
  }

  editBook = async(book) => {
    try {
      const updatedBook = {
        "title": `${book.newTitle}`,
        "subtitle": `${book.newSubtitle}`,
        "author": `${book.newAuthor}`,
        "published": `${book.newPublished}`,
        "publisher":`${book.newPublisher}`,
        "description":`${book.newDescription}`, 
        "website":`${book.newWebsite}`, 
        "pages":`${book.newPages}`
      }
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/books/${book.updateBookId}`, updatedBook)
      this.setState({
        ...this.state,
        books: this.state.books.filter(book => book.id !== response.data.id).concat([response.data])
      })
      console.log(response.data)
    } catch(err){
      console.log(err)
    }
  }

  removeBook = async(id) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/books/${id}`)

        this.setState({
            books: this.state.books.filter(book => book.id !== response.data.id)
        })
    } catch(err){
        console.log(err)
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
        createBook = {this.createBook}
        removeBook = {this.removeBook}
        editBook = {this.editBook}
        cartItemsList={this.state.cartItemsList}
        handleSearchItem={this.handleSearchItem} />

        <BookItems 
          addItem={this.addItem}
          books = {this.state.books}
          searchItem = {this.state.searchItem}
          cartItemsList={this.state.cartItemsList}
          />
      </>
    );
  }
}

export default App;
