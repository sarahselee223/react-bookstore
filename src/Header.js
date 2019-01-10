import React, { Component } from 'react'
import CheckoutModal from './CheckoutModal'
import AdminModal from './AdminModal'

class Header extends Component {
    constructor(props){
        super(props)
    
        this.state={
            searchItem: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearchItem(this.state.searchItem)
    } 

    getSearchItem = (event) => {
        this.setState({
            searchItem: event.target.value.toLowerCase()
        })
    } 

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="index.html">Bookstore</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="form-inline my-4 my-lg-1" onSubmit = {this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.getSearchItem}></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <CheckoutModal cartItemsList={this.props.cartItemsList}/>
                <AdminModal {...this.props}/>
            </nav>
        )
    }
}

export default Header