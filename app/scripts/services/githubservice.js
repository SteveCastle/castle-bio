'use strict';

/**
 * @ngdoc service
 * @name castleBioApp.Githubservice
 * @description
 * # Githubservice
 * Service in the castleBioApp.
 */
angular.module('castleBioApp')
  .service('githubService', ['$http', function githubService($http) {
    var getRepo = function(username, repo) {
      return $http({
        method: 'JSONP',
        url: 'https://api.github.com/repos/' + username + '/' + repo + '/stats/contributors?callback=JSON_CALLBACK'
      });
    };
    var getMe = function(username) {
      return $http({
        method: 'JSONP',
        url: 'https://api.github.com/users/' + username +'?callback=JSON_CALLBACK'
      });
    };
    return {
      repo: function(repo) { return getRepo('steveCastle', repo); },
      user: function(user) { return getMe(user); },
    };
  }]);
