import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


//Compomnents imports
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';


function App() {

  // Cerca de cançons per afegit a Playlists
  const [searchResults, setSearchResults] = useState([]);

  // Datos de pistas estáticas (a modo de ejemplo)
  const hardCodedTracks = [
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    // Agrega más datos de pistas según sea necesario
  ];



  // Playlists
  const [playlistInfo, setPlaylistInfo] = useState({
    name: 'My Playlist',
    tracks: []});


    const handleAddTrackToPlaylist = (track) => {
      alert('eo');
      // Verifica si la canción ya está en la lista de reproducción
      const isTrackInPlaylist = playlistInfo.tracks.some(item => item.id === track.id);
      if (!isTrackInPlaylist) {
        // Agrega la canción a la lista de reproducción si no está presente
        setPlaylistInfo(prevState => ({
          ...prevState,
          tracks: [...prevState.tracks, track]
        }));
      }
    };




  return (
    <div className="App">
      <h1>RoaFy</h1>
      <SearchBar />


      <SearchResults searchResults={searchResults} onAddTrack={handleAddTrackToPlaylist}  />






      <div>
      <h1>Jammming</h1>
      
      
   
      </div>


      <Tracklist tracks={hardCodedTracks} />
    </div>
  );
}

export default App;
