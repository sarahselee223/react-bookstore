import React, {Component} from 'react';

class AddItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            inputNumber: 0,
            inputName: ''
        }
    }

    // addInputNumber = () => {
    //     let currentNumber = Number(this.state.inputNumber) + 1
    //     this.setState({
    //         inputNumber: currentNumber
    //     })
    //     return currentNumber
    // }

    addCartItem = () => {

        const cartItemsList = this.props.cartItemsList
        const newId = cartItemsList.length+1

        const newItem = {
            id: newId,
            book: {
              "title": this.props.title,
              "author": this.props.author,
              "inCart": true,
              "price": this.props.price,
              "id": this.props.id
            },
            quantity: 1}
        this.props.addItem(newItem)
    } 

    render () {
        return (
            <div className="col-md-2 alignCenter">
                <button type="button" className="btn btn-success btn-sm" onClick={this.addCartItem}>+</button>
            </div>
        )
    }
}

export default AddItem