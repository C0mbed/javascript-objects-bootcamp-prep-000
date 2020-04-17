var playlist = {U2: 'Beautiful Day'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, { artistName: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
