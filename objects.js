var playlist = {artist1:'U2', song_title1: 'Beautiful Day'};

function updatePlaylist(playlist, artistName, songTitle) {
  var playListNumber = playlist.length;
  return Object.assign(playlist, 'artist' + playlistNumber, artistName, 'song_title' + playListNumber, songTitle)
  
}
