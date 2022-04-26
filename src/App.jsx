import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import JsonData from "./data.json";
import ProductTable from "./ProductTable";

function App() {
    const [inStockOnly, setInStockOnly] = useState(false);
    const [search, setSearch] = useState("");

    let allCategories = JsonData.map((category) => category.category);
    let len = allCategories.length;
    let categories = [];

    for (let i = 0; i < len; i++) {
        if (categories.indexOf(allCategories[i]) === -1) {
            categories.push(allCategories[i]);
        }
    }

    const handleCheck = () => {
        setInStockOnly((prev) => !prev);
    };

    return (
        <div className=" box-border w-3/12 mx-auto p-2 border-2 border-amber-200">
            <SearchBar
                inStockOnly={inStockOnly}
                handleCheck={handleCheck}
                JsonData={JsonData}
                search={search}
                setSearch={setSearch}
            />
            <ProductTable
                JsonData={JsonData.filter((data) =>
                    data.name.toLowerCase().includes(search.toLocaleLowerCase())
                )}
                categories={categories}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default App;
