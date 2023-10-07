import React, { useState, useCallback } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";

// This is a React function component!
const App = () => {
  // These are all React State Hooks! 
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // There are two main rules to keep in mind when using Hooks:
    // 1. Only call Hooks at the top level.
    // 2. Only call Hooks from React functions.
  // When we call the useState() function, it returns an array with two values:
    // * The current state: The current value of this state.
    // * The state setter: A function that we can use to update the value of this state.
  // We can use these two values to track the current state of a data value or property and change it when we need to. 
  // To initialize our state with any value we want, we simply pass the initial value as an argument to the useState() function call.
  // There are three ways in which this code affects our component:
    // 1. During the first render, the initial state argument is used.
    // 2. When the state setter is called, React ignores the initial state argument and uses the new value.
    // 3. When the component re-renders for any other reason, React continues to use the same value from the previous render.
  // If we don’t pass an initial value when calling useState(), the current value of the state during the first render will be undefined. 
  // Often, this is perfectly fine for the computers running the code, but it can be unclear to the humans reading our code. 
  // So, we prefer to explicitly initialize our state. If we don’t have the value needed during the first render, 
  // we can explicitly pass null instead of passively leaving the value as undefined.

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);   

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

    // Use the spread syntax on collections of dynamic data to copy the previous state into the next state like so: 
    // setArrayState((prev) => [ ...prev ]) and setObjectState((prev) => ({ ...prev })).
      setPlaylistTracks((prevTracks) => [...prevTracks, track]); 
    //React state updates are asynchronous. 
    // This means that there are some scenarios where portions of your code will run before the state is finished updating.
    // This is a good and a bad thing! Grouping the state updates together can improve performance in your application, 
    // but it can result in outdated state values. Consequently, it is best practice to update a state with a callback function, 
    // preventing accidental outdated values.
  }, [playlistTracks]);

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} /> 
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
