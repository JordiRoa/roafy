// FeaturedPlaylist.js
import React from 'react';

const FeaturedPlaylist = () => {
  // Datos ficticios de la lista de reproducción destacada
  const playlist = {
    name: "Top Hits 2024",
    description: "The hottest songs of the year",
    tracks: [
      { id: 1, title: "Song 1", artist: "Artist 1" },
      { id: 2, title: "Song 2", artist: "Artist 2" },
      { id: 3, title: "Song 3", artist: "Artist 3" },
      // Agrega más datos de canciones según sea necesario
    ]
  };

  return (
    <div className="featured-playlist">
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      <ul>
        {playlist.tracks.map(track => (
          <li key={track.id}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedPlaylist;
