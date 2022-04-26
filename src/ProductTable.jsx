import React from "react";
import Category from "./Category";

const ProductTable = ({ JsonData, categories, inStockOnly }) => {
    console.log(JsonData);
    return (
        <div className="p-2 mt-2 border-2 border-green-300">
            <div className="font-bold mb-1 flex justify-start">
                <h3 className="w-6/12">Name</h3>
                <h3>Price</h3>
            </div>

            {categories.map((uniqueCategory) => (
                <Category
                    uniqueCategory={uniqueCategory}
                    JsonData={JsonData}
                    inStockOnly={inStockOnly}
                />
            ))}
        </div>
    );
};

export default ProductTable;
