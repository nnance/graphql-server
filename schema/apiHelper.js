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

function getArtists(root, {name}) {
  return sendRequest('http://ws.spotify.com/search/1/artist.json?q=' + name)
  .then(function(json){
    return json.artists;
  });
}

function getTracks(root, {name}) {
  return sendRequest('http://ws.spotify.com/search/1/track.json?q=' + name)
  .then(function(json){
    return json.tracks;
  });
}

export default {
  getAlbums: getAlbums,
  getArtists: getArtists,
  getTracks: getTracks
}
