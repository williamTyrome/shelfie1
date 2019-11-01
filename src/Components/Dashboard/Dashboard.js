import React from 'react';
import {Link} from './Product';
import Product from "./Product";
import { tsPropertySignature } from '@babel/types';

export default function Dashboard(prop) {
    return (
        <div>
            <label>Total:</label>
            <div>
                ${Math.ceil
                    props.expenses.reduce((acc, val) => {
                        let newVal = val.amoutn.slice(1);
                        return (acc += +newVal);
                    }, 0),
                    2
    )}.00
            </div>
            {}
        </div>
    )
}