import React from "react";
import "./SearchResults.css";
import TrackList from "../Tracklist/TrackList";

// This is a React function component!
const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={props.SearchResults} onAdd={props.onAdd} /> {/* This uses the 'TrackList' React Function Component. */}
        </div>
    );
};

export default SearchResults;