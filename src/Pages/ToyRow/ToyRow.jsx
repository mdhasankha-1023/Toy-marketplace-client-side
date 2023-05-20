import React from 'react';

const ToyRow = ({toy}) => {
    const { seller_name, toy_name, price, available_quantity } = toy;
    return (
            <tr>
                <td>{seller_name}</td>
                <td>{toy_name}</td>
                <td></td>
                <td>{price}</td>
                <td>{available_quantity}</td>
                <td> <p className="text-[#EA624C] font-bold text-md cursor-pointer">Details</p></td>
            </tr>
    );
};

export default ToyRow;