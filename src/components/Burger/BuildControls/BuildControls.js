import React from 'react';
import classes from'./BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls =[
    {label:'salad',type:'salad'},
    {label:'bacon',type:'bacon'},
    {label:'cheese',type:'cheese'},
    {label:'meat',type:'meat'},
];
const buildControls =(props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
       {controls.map(ctrl=>(
          //<p>Current Price:{props.price}</p>
          <BuildControl 
           key={ctrl.label} 
           label={ctrl.label}
           added={()=>props.ingredientAdded(ctrl.type)}
           removed={()=> props.ingredientRemoved(ctrl.type)}
           disabled={props.disabled[ctrl.type]}/>
       ))}
       <button 
       className={classes.OrderButton}
       disabled={!props.purchasable}
       onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);
export default buildControls;