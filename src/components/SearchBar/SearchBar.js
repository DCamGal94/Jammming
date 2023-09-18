import "./SearchBar.css"

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song Title" />
            <button className="SearchButton">
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;