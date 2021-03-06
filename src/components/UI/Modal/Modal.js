import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aaux/aux1';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentDidUpdate() {
        console.log('[Modal will Update!]')
    }
    render() {
        return (

            <Aux>
                <Backdrop
                    show={this.props.show}
                    modalClosed={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;