import React, { Component } from 'react';
import './App.css'
import BookItemComponent from './BookItemComponent';

class BookItems extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    filteredBooks = () => {
        if(this.props.searchItem === '')
            return this.props.books

        return this.props.books.filter(
            book => 
                book.author.toLowerCase().includes(this.props.searchItem) ||
                book.title.toLowerCase().includes(this.props.searchItem)
            )
    }
     
    renderBooks(){
        if(this.props.books){
        return this.filteredBooks().map(book => {
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
            <h1 className="title">Our Books</h1>
            <div className="list-group main-list">
            <div className="list-group-item">
            <div className="row">
                <div className="col-md-5 head alignCenter">Title</div>
                <div className="col-md-2 head alignCenter">Author</div>
                <div className="col-md-2 head alignCenter">Pages</div>
                <div className="col-md-1 head alignCenter">Price</div>
                <div className="col-md-2 head alignCenter">Add to Cart</div>
            </div>
            </div>
                { this.renderBooks() }
            </div> 
            </div> 

        )
    }
}

export default BookItems