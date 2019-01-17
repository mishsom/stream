import React from 'react';
import ReactDom from 'react-dom';
import './modal.css';

class Modal extends React.Component {
    render() {
        return ReactDom.createPortal(
            (<div className="modal" onClick={this.props.cancelAction}>
                <div className="mainModal" onClick={(e) => e.stopPropagation()}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.body}</p>
                    <div>
                        <button onClick={this.props.cancelAction}> Cancel </button>
                        <button onClick={this.props.actionHandler}> Delete </button>
                    </div>
                </div>
            </div>),
         document.querySelector("#modal"))
    }
}
export default Modal;