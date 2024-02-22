import React from 'react';

const Track = ({track}) => {
  return (
    <div className="track">
      
        <li>
        <h2>{track.name}</h2>
          <p>{track.artist} - {track.album}</p>
        </li>
     
    </div>
  );
};

export default Track;
