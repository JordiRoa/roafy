import React from 'react';
import Playlist
 from '../Playlist/Playlist';
const SearchResults = ({ searchResults}) => {

  const onAddTrack = (track) => {
    <Playlist playlistInfo={track} tracks={track} />
  };


  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {searchResults.map(track => (
          <li key={track.id}>
            <span>{track.title} - {track.artist}</span>
            <button onClick={() => onAddTrack(track)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
