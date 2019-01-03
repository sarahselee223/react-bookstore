import React from 'react'

function getTotal (cartItemsList) {
    let totalAmount = 0
    cartItemsList.forEach(ele => {
        totalAmount += ele.book.price
    });
    return totalAmount
}

function CheckoutList(props){
    return (
        <div>
        <div className="list-group-item">
            <div className="row">
            {props.props.props.cartItemsList&&props.props.props.cartItemsList.map(book => {
                return  (<>
                        <div className="col-md-1">{book.id}</div>
                        <div className="col-md-5">{book.book.title}</div>
                        <div className="col-md-3">{book.book.author}</div>
                        <div className="col-md-2">${book.book.price.toFixed(2)}</div>
                        <div className="col-md-1">{book.quantity}</div>
                        </>
                )})
            }  
            </div>
        </div>
            <div className="total">Total Price: ${getTotal(props.props.props.cartItemsList).toFixed(2)}</div>
        </div>
        
    )
}

export default CheckoutList