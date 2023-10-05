// Original code:
// import React, { useCallback, useState } from "react";
// import "./SearchBar.css"

// // This is a React function component!
// const SearchBar = (props) => {
//     const [term, setTerm] = useState("");

//     const handleTermChange = useCallback((event) => {
//         setTerm(event.target.value);
//     }, []);

//     const search = useCallback(() => {
//         props.onSearch(term);
//     }, [props.onSearch, term]);
    
//     return (
//         <div className="SearchBar">
//             <input placeholder="Enter A Song Title" onChange={handleTermChange} />
//             <button className="SearchButton" onClick={search}>
//                 SEARCH
//             </button>
//         </div>
//     );
// };

// export default SearchBar;

// GitHub Copilot Refactored Code:
// With this refactoring, the SearchBar component is now more modular and easier to read. 
// The SearchInput and SearchButton components can also be reused in other parts of the application if needed.
import React, { useCallback, useState } from "react";
import "./SearchBar.css"

const SearchInput = ({ handleTermChange }) => {
    return (
        <input placeholder="Enter A Song Title" onChange={handleTermChange} />
    );
};

const SearchButton = ({ search }) => {
    return (
        <button className="SearchButton" onClick={search}>
            SEARCH
        </button>
    );
};

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="SearchBar">
            <SearchInput handleTermChange={handleTermChange} />
            <SearchButton search={search} />
        </div>
    );
};

export default SearchBar;
