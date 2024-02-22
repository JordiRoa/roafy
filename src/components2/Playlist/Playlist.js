import React from 'react';
import TrackList from '../Tracklist/Tracklist';

const Playlist = ({ playlistInfo, tracks }) => {
  return (
    <div className="playlist">
      <h2>{playlistInfo.name}</h2>
      <TrackList tracks={tracks} />
    </div>
  );
};

export default Playlist;
