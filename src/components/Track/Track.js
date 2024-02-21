import React from 'react';

const Track = ({track}) => {
  return (
    <div className="track">
      <h2>{track.name}</h2>
      <ul>
        <li>
          <p>{track.artist} - {track.album}</p>
        </li>
      </ul>
    </div>
  );
};

export default Track;
