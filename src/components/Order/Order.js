import React from 'react';

import classes from './Order.module.css';

const order = ( props ) => {
    const ingredients = [];

    for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {

        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'auto',
                margin: '0 8px',
                border: '1px solid',
                padding: '5px',
                color:'blue'
                }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
            
    });
    //console.log('33',ingredientOutput);

    return (
        <div className={classes.Order}>
            <p style={{color:'#900C3F '}}>Ingredients: {ingredientOutput}</p>
            <p style={{color:'brown'}}>Price: <strong style={{color:'green'}}>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
        </div>
    );
};

export default order;