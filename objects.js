var playlist={artistName:"song"};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}