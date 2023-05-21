import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({toy}) => {
    const { seller_name, toy_name, price, available_quantity, sub_category, _id
    } = toy;
    return (
            <tr>
                <td>{seller_name}</td>
                <td>{toy_name}</td>
                <td>{sub_category}</td>
                <td>{price}</td>
                <td>{available_quantity}</td>
                <td><Link to={`/toy-details/${_id}`}><p className="text-[#EA624C] font-bold text-md cursor-pointer">Details</p></Link></td>
            </tr>
    );
};

export default ToyRow;