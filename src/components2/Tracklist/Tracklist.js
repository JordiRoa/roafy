import React from 'react';
import Track from '../Track/Track'

const TrackList = ({tracks}) => {
  return (
    <div className="track-list">
      <ul>
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
      </ul>
    </div>
  );
};

export default TrackList;
