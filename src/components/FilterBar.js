import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import axios from "axios";

function FilterBar({ onChangeCategory, onFetchData }){
    const [categoryInput, setcategoryInput] = useState('');

    const handleInputChange = (e) => {
        setcategoryInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCategory(categoryInput);
        onFetchData(categoryInput);
    };

    return(
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={categoryInput}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>
                    Submit
                </button>
                <FilterButton category={"Mountain"} onCategoryChange={onChangeCategory} onFetchData={onFetchData}/>
                <FilterButton category={"Beaches"} onCategoryChange={onChangeCategory} onFetchData={onFetchData}/>
                <FilterButton category={"Birds"} onCategoryChange={onChangeCategory} onFetchData={onFetchData}/>
                <FilterButton category={"Food"} onCategoryChange={onChangeCategory} onFetchData={onFetchData}/>
            </form>
        </div>
    );
}

export default FilterBar;