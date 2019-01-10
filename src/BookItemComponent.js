import React from 'react'
import AddItem from './AddItem'


function BookItemComponent (props) {
        return (
            <div className="list-group-item">
            <div className="row">
            <div className="col-md-1 alignCenter">{props.id}</div>
                <div className="col-md-4 alignCenter">{props.title}</div>
                <div className="col-md-2 alignCenter">{props.author}</div>
                <div className="col-md-2 alignCenter">{props.pages}</div>
                <div className="col-md-1 alignCenter">${Number(props.price).toFixed(2)}</div>
                <AddItem    addItem = {props.addItem}
                            books = {props}
                            cartItemsList={props.cartItemsList}
                            key={props.id}
                            {... props} />

            </div>
        </div>
        )
}



export default BookItemComponent
