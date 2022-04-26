import React from "react";

const ProductRow = ({ data }) => {
    return (
        <div className="flex border-2 border-red-500 mt-1">
            <p className="w-6/12 pl-1">{data.name}</p>
            <p>{data.price}</p>
        </div>
    );
};

export default ProductRow;
