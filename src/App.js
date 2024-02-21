import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//Compomnents imports
import TrackList from './components/Tracklist/Tracklist';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  // Datos de pistas estáticas (a modo de ejemplo)
  const hardCodedTracks = [
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    // Agrega más datos de pistas según sea necesario
  ];

  return (
    <div className="App">
    <h1>RoaFy</h1>
    <TrackList tracks={hardCodedTracks} />
  </div>
  );
}

export default App;
