juke.config(function ($stateProvider) {

  $stateProvider.state('playlist', {
    url: '/playlists',
    templateUrl: '/js/playlist/addPlaylist.html',
    controller: 'playlistCtrl'
  });

  $stateProvider.state('showPlaylist', {
    url: '/playlist/:id',
    templateUrl: '/js/playlist/playlist.html',
    controller: 'showPlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.id);
      }
  }

});
});