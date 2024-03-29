import React, { Component } from 'react';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    if(!this.props.show) {
      return null;
    }
    return ( 
      <div className="backdrop">
        <div className="text-center modal-style">
        <div className="col-md-12">
            <div className="row">
              <div className="col-md-2 delete-title">
                Warning
              </div>
            </div>
            <div className="row">
              <span className="delete-warning">
                {this.props.children}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            <div className="row btn-row text-center">
              <button
                type="button"
                className="btn btn-warning btn-cancel"
                onClick={ this.props.onClose }>
                O&nbsp;K
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default CustomModal;