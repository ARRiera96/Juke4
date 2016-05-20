
juke.controller('playlistCtrl', function ($scope,$rootScope, PlaylistFactory, $state) {

  $scope.addPlaylist= function(name){
  	console.log(name);
  	var obj= {name: name};
  	PlaylistFactory.create(obj).
  	  then(function(playlist){
  	  	$scope.playlist.name= '';
  	  	$scope.playlistForm.$setPristine();
        $state.go('showPlaylist', {id: playlist.id});
  	  });
  }
});

juke.controller('sidebarPlaylistCtrl', function ($scope,$rootScope, PlaylistFactory) {
	PlaylistFactory.fetchAll()
	.then(function(playlists){
		$scope.playlists= playlists;
	});

});

juke.controller('showPlaylistCtrl', function ($scope, thePlaylist) {
	$scope.playlist = thePlaylist;
});
