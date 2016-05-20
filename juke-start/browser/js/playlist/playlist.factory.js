juke.factory('PlaylistFactory', function ($http) {

	  var playlist = {};
	  var cachedPlaylists = [];

	  playlist.create = function (data) {
	    return $http.post('/api/playlists/', data)
	    .then(function (response) {
	    	var playlist = response.data
	    	cachedPlaylists.push(playlist);
	    	return response.data;
	    });
	  };

	  playlist.fetchAll= function(){
	  	return $http.get('/api/playlists')
	  	.then(function(response){
	  		angular.copy(response.data, cachedPlaylists);
	  		return cachedPlaylists;
	  	});
	  }

	  playlist.fetchById = function(id) {
	  	console.log('HI I AM AN ID' + id);
	  	return $http.get('/api/playlists/' + id)
	  	.then(function(response) { return response.data; } );
	  }

	  playlist.addSong = function(playlistId, songId) {
	  	console.log(playlistId, songId);
	  	$http.post('/api/playlists/' + id + '/songs', { id: songId });
	  }


	  return playlist;

}); 
 