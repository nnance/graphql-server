import fetch from 'node-fetch';


function sendRequest(url) {
  console.log('url: %s', url);
  return fetch(url)
  .then(function(res) {
    console.log('fetch status: %s', res.status);
    return res.json();
  });
}

function getAlbums(root, {name}) {
  return sendRequest('http://ws.spotify.com/search/1/album.json?q=' + name)
  .then(function(json){
    return json.albums;
  });
}

function getAlbum(root, {id}) {
  return sendRequest('http://ws.spotify.com/lookup/1/.json?uri=' + id)
  .then(function(json){
    return json.album;
  });
}

function getArtists(root, {name}) {
  return sendRequest('http://ws.spotify.com/search/1/artist.json?q=' + name)
  .then(function(json){
    return json.artists;
  });
}

function getArtist(root, {id}) {
  return sendRequest('http://ws.spotify.com/lookup/1/.json?uri=' + id)
  .then(function(json){
    return json.artist;
  });
}

function getTracks(root, {name}) {
  return sendRequest('http://ws.spotify.com/search/1/track.json?q=' + name)
  .then(function(json){
    return json.tracks;
  });
}

function getTrack(root, {id}) {
  return sendRequest('http://ws.spotify.com/lookup/1/.json?uri=' + id)
  .then(function(json){
    return json.track;
  });
}

export default {
  getAlbums: getAlbums,
  getAlbum: getAlbum,
  getArtists: getArtists,
  getArtist: getArtist,
  getTracks: getTracks,
  getTrack: getTrack
}
