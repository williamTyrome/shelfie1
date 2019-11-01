import React from 'react'
import { tsConstructorType } from '@babel/types'

export default function Product(props){
    
    return(
        <div>
        <label>Amount</label>
        <p>{props.expenses.amount}</p>
        <label>store</label> 
        <hr/>
        </div>
    )
}