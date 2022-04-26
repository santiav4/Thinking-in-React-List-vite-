import React from "react";
import ProductRow from "./ProductRow";

const Category = ({ uniqueCategory, JsonData, inStockOnly }) => {
    console.log(JsonData);
    return (
        <>
            <div className="border-2 border-cyan-300 pl-1 mt-2">
                {uniqueCategory}
            </div>
            {JsonData.map((data) =>
                uniqueCategory === data.category ? (
                    inStockOnly ? (
                        data.stocked ? (
                            <ProductRow data={data} />
                        ) : null
                    ) : (
                        <ProductRow data={data} />
                    )
                ) : null
            )}
        </>
    );
};

export default Category;
