import React from 'react';
import Track from '../Track/Track'

const TrackList = ({tracks}) => {
  return (
    <div className="track-list">
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;