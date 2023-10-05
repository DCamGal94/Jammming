import React, { useCallback } from "react";
import "./Playlist.css"
import TrackList from "../Tracklist/TrackList";

// This is a React function component!
// To make sure that a function component can use the props object, 
// define your function component with props as the parameter
const Playlist = (props) => {
    // You can, and often will, pass functions as props. 
    // It is especially common to pass event handler functions.
    // However, we have to define an event handler before we can pass one anywhere.
    // This (handleNameChange) is an event handler function that uses the React Hook [useCallback()](https://react.dev/reference/react/useCallback)!
    const handleNameChange = useCallback ( // useCallback is a React Hook that lets you cache a function definition between re-renders.
        (event) => {
            props.onNameChange(event.target.value);
        }, [props.onNameChange]);  // This second argument is called the dependency array.
        // The dependency array is used to tell the method when to call our effect and when to skip it. 
        // Our effect is always called after the first render but only called again if something in our dependency array 
        // has changed values between renders.

    return (
        <div className="Playlist">
            {/* Here, the handler function handleNameChange is passed as a prop to the <input /> element. */}
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            {/* How do we pass props? By giving the component an attribute. 
            If you want to pass information that isn’t a string, then wrap that information in curly braces. */}
            <TrackList
                tracks={props.playlistTracks} // this is an attribute of the component TrackList
                isRemoval={true} // this is an attribute of the component TrackList
                onRemove={props.onRemove} // this is an attribute of the component TrackList
            />
            <button className="Playlist-save" onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;