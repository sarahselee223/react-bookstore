import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import BookItemComponent from './BookItemComponent';

class BookItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: ''
        }
    }

    componentDidMount(){
        this.getBooks()
    }

    getBooks = async() => {
        try {
            const response = await axios.get('http://localhost:8082/api/books')
            this.setState({
                books: response.data
            })
        } catch(err){
            console.log(err)
        }
    }
    
    renderBooks(){
        if(this.state.books){
        return this.state.books.map(book => {
            return <BookItemComponent
            addItem = {this.props.addItem}
            books = {this.props.books}
            cartItemsList={this.props.cartItemsList}
            key={book.id}
            {... book}/>
        })
        }
    }

    render(){
        return (
            <div className="container">
            <h1>Books</h1>
            <div className="list-group">
            <div className="list-group-item">
            <div className="row">
                <div className="col-md-4">Title</div>
                <div className="col-md-2">Author</div>
                <div className="col-md-2">Pages</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Add to Cart</div>
            </div>
            </div>
                { this.renderBooks() }
            </div> 
            </div> 

        )
    }
}

export default BookItems