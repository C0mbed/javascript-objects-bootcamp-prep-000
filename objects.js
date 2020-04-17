var playlist = {U2: 'Beautiful Day'};

function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, artist, song);
}
