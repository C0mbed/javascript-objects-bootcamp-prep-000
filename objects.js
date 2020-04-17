var playlist = {U2: 'Beautiful Day'};

function updatePlaylist(playlist, artistName, songTitle) {
  console.log('playlist is ' + playlist);
  return Object.assign(playlist, artistName, songTitle);
}
