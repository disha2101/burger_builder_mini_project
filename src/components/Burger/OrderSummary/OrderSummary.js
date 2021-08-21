import React, { Component } from 'react';
import Aux from '../../../hoc/Aaux/aux1';
import Button from '../../UI/Button/Button'
import classes from './OrderSummary.module.css';

class OrderSummary extends Component {
    //This could be a functional compoennt doesnot have to be a class
    componentDidUpdate() {
        console.log('[OrderSummary] did update!')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>:{this.props.ingredients[igKey]}</li>);
            });
        return (
            <Aux className={classes.Order}>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    className={classes.Danger}
                    clicked={this.props.purchaseCancelled}
                >CANCEL</Button>
                <Button
                    className={classes.Success}
                    clicked={this.props.purchaseContinued}
                >CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;