import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
const checkoutSummary =(props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1 style={{marginTop:' 70px'}}>We hope it tastes Well!!</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button className={classes.Success}
            clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button className={classes.Success}
            clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}
export default checkoutSummary;