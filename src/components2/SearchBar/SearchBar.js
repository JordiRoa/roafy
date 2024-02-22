// FeaturedPlaylist.js
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';

const FeaturedPlaylist = () => {
  // Datos ficticios de la lista de reproducción destacada
  const playlist = {
    name: "qweqwe",
    description: "penis",
    tracks: [
      { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
      { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
      // Agrega más datos de pistas según sea necesario
    ]
  };

  return (
    <div className="featured-playlist">
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      <ul>
        <SearchResults searchResults={playlist.tracks} onAddTrack={1}  />
      </ul>
    </div>
  );
};

export default FeaturedPlaylist;
