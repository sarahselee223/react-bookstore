import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class EditItem extends Component{
    
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            // showForm: false
        };
      }
    

    editItem = () => {
        console.log(this.props)
        return (
               <></>
        )
    } 

    render () {
        return (
            <></>
        )
    }
}

export default EditItem