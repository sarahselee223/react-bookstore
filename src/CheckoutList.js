import React from 'react'

function getTotal (props) {
    let totalAmount = 0
    props.forEach(ele => {
        totalAmount += ele.book.price
    });
    return totalAmount
}

function CheckoutList(props){

    return (
        <div>
        <div className="list-group-item">
            <div className="row">
            {props.cartItemsList && props.cartItemsList.map(book => {
                return  (<>
                        <div className="col-md-1 alignCenter">{book.id}</div>
                        <div className="col-md-5 alignCenter">{book.book.title}</div>
                        <div className="col-md-3 alignCenter">{book.book.author}</div>
                        <div className="col-md-1 alignCenter">{book.quantity}</div>
                        <div className="col-md-2 alignCenter">${book.book.price}</div>
                        </>
                )})
            }  
            </div>
        </div>
            <div className="total head margin">Total Price: ${getTotal(props.cartItemsList)}</div>
        </div>
    )
}

export default CheckoutList