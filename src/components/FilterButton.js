
function FilterButton({ category, onCategoryChange, onFetchData }){
    const handleButtonClick = (e) => {
        e.preventDefault();
        onCategoryChange(category);
        onFetchData(category);
    };

    return(
        <div>
            <button onClick={handleButtonClick}>
                {category}
            </button>
        </div>
    );
}

export default FilterButton;