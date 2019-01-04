import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import CheckoutList from './CheckoutList';

class CheckoutModal extends Component {
    
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: true
      };
    }
  
    handleClose = () => {
    this.modal.modal('hide')
    }
  
    handleShow = () => {
      this.modal.modal('show')
    }

    getModalReference = (HTMLElement) => {
        this.modal = window.$(HTMLElement)
    }

    render() {
 
      return (
        <div>

          <Button bsStyle="outline-success " onClick={this.handleShow}>
            Checkout
          </Button>
  
          <div ref={this.getModalReference} className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Checkout</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                  <div className="list-group-item">
                  <div className="row">
                      <div className="col-md-1">#</div>
                      <div className="col-md-5">Title</div>
                      <div className="col-md-3">Author</div>
                      <div className="col-md-2">Price</div>
                      <div className="col-md-1">Quantity</div>
                  </div> 
                  </div>
                  <CheckoutList key= {this.id} props= {this} />
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
      );
    }
  }
  
//   render(<Example />);

  export default CheckoutModal