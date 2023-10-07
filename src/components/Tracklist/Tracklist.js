import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

// This is a React function component!
const TrackList = (props) => {
    return (
        <div className="TrackList">
            {props.tracks.map((track) => {
                return (
                    <Track 
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove} 
                    /> // This uses the Track React Function Component.
                );
            })}
        </div>
    );
};

export default TrackList;