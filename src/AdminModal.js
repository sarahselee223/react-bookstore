import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class AdminModal extends Component {
    
    constructor(props, context) {
      super(props, context);
      
      this.state = {

          isClicked: false,
          isForUpdate: false,
          updateBookId: '',
          newTitle:'',
          newSubtitle:'',
          newAuthor:'',
          newPublished:'',
          newPublisher:'',
          newDescription:'',
          newWebsite:'',
          newPages:''
        };
    }
  
    handleClose = () => {
        this.modal.modal('hide')
    }
  
    handleShow = () => {
      this.modal.modal('show')
    }

    handleEdit = (id) => {
        this.setState({
            ...this.state,
            isClicked: true,
            isForUpdate: true,
            updateBookId: id
        })
    }

    handleCreate = () => {
        this.setState({
            ...this.state,
            isClicked: true,
            isForUpdate: false,
        })
    }

    handleCloseForm= () => {
        this.setState({
            ...this.state,
            isClicked: false
        })
    }

    handleTitleChange = (event) => {
        this.setState({
            ...this.state,
            newTitle: event.target.value
        })
    }

    handleSubtitleChange = (event) => {
        this.setState({
            ...this.state,
            newSubtitle: event.target.value
        })
    }

    handleAuthorChange = (event) => {
        this.setState({
            ...this.state,
            newAuthor: event.target.value
        })
    }
    handlePriceChange = (event) => {
        this.setState({
            ...this.state,
            newPrice: event.target.value
        })
    }
    
    handlePublishedChange = (event) => {
        this.setState({
            ...this.state,
            newPublished: event.target.value
        })
    }
    handlePublisherChange = (event) => {
        this.setState({
            ...this.state,
            newPublisher: event.target.value
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            ...this.state,
            newDescription: event.target.value
        })
    }

    handleWebsiteChange = (event) => {
        this.setState({
            ...this.state,
            newWebsite: event.target.value
        })
    }

    handlePagesChange = (event) => {
        this.setState({
            ...this.state,
            newPages: event.target.value
        })
    }
    getModalReference = (HTMLElement) => {
        this.modal = window.$(HTMLElement)
    }
 
    renderBooks(){
        const editClickHandler = (id) => {
            this.handleEdit(id)
        }

        if(this.props.books && this.props.removeBook){
            return this.props.books.map(book => {
                return (
                    <div>
                    <div className="list-group-item">
                        <div className="row">
                        <div className="col-md-1 alignCenter">{book.id}</div>
                            <div className="col-md-5 alignCenter">{book.title}</div>
                            <div className="col-md-2 alignCenter">{book.author}</div>
                            <div className="col-md-2 alignCenter">
                                <button type="button" className="btn btn-success btn-sm" onClick={() => editClickHandler(book.id)}>V</button>
                            </div>
                            <div className="col-md-2 alignCenter">
                                <button type="button" className="btn btn-success btn-sm" onClick={() => this.props.removeBook(book.id)}>V</button>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                )
            })
        }
    }

    chooseFunction = (event) => {
        event.preventDefault()
        this.state.isForUpdate ? this.props.editBook(this.state) : this.props.createBook(this.state);
        return (
            <div class="alert alert-success" role="alert">
                A simple success alert—check it out!
            </div>
        )
    }


    showForm(){
        return(
            <div>
            <form onSubmit={this.chooseFunction}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputTitle">Title</label>
                    <input type="title" class="form-control" value={this.state.newTitle} placeholder="Title" onChange={this.handleTitleChange}></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputSubtitle">Subtitle</label>
                    <input type="subtitle" class="form-control" value={this.state.newSubtitle} placeholder="Subtitle" onChange={this.handleSubtitleChange}></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                    <label for="inputAuthor">Author</label>
                    <input type="author" class="form-control" value={this.state.newAuthor} placeholder="Author" onChange={this.handleAuthorChange}></input>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputPublished">Published</label>
                    <input type="published" class="form-control" value={this.state.newPublished} placeholder="Published" onChange={this.handlePublishedChange}></input>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputPublisher">Publisher</label>
                    <input type="publisher" class="form-control" value={this.state.newPublisher} placeholder="Publisher" onChange={this.handlePublisherChange}></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputDescription">Description</label>
                    <input type="text" class="form-control" id="Description" value={this.state.newDescription} placeholder="Please add description" onChange={this.handleDescriptionChange}></input>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputWebsite">Website</label>
                    <input type="website" class="form-control" value={this.state.newWebsite} placeholder="Website" onChange={this.handleWebsiteChange}></input>
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputPrice">Price</label>
                    <input type="price" class="form-control" value={this.state.newPrice} placeholder="Price" onChange={this.handlePriceChange}></input>
                    </div>
                    <div class="form-group col-md-3">
                    <label for="inputPages">Pages</label>
                    <input type="pages" class="form-control" value={this.state.newPages} placeholder="Pages" onChange={this.handlePagesChange}></input>
                    </div>
                </div>
                    <div class="form-row text-center">
                    <div class="col-12">
                        <button type="submit" class="btn  submit btn-success">Submit</button>
                        <button type="cancel" class="btn  submit btn-success" onClick={this.handleCloseForm}>Close</button>
                    </div>
                    </div>
            </form>
            </div>
        )
    }

    render() {
        const createClickHandler = () => {
            this.handleCreate()
        }

      return (
            <div>
            <Button className= "Admin" bsStyle="success" onClick={this.handleShow}>
                Admin
            </Button>

            <div ref={this.getModalReference} className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-center head" id="exampleModalLabel">Admin  
                        <Button className= "Create" bsStyle="success" onClick={createClickHandler}>
                            Create
                        </Button>
                    </h5>
                </div>
                <div className="modal-body">

                {this.state.isClicked? this.showForm():''}

                    <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-1 head alignCenter">#</div>
                        <div className="col-md-5 head alignCenter">Title</div>
                        <div className="col-md-2 head alignCenter">Author</div>
                        <div className="col-md-2 head alignCenter">Edit</div>
                        <div className="col-md-2 head alignCenter">Delete</div>
                    </div> 
                    </div>
                    { this.renderBooks() }      
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
  }

  export default AdminModal