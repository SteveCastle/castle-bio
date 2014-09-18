'use strict';

/**
 * @ngdoc service
 * @name castleBioApp.lastfm
 * @description
 * # lastfm
 * Service in the castleBioApp.
 */
angular.module('castleBioApp')
	.service('Lastfm', function Lastfm($http) {
			var apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=tracerbullet&api_key=858f5419cc4a2c83275d6f3ce96fd2a7&format=json';
			var getTracks = function() {
				return $http({method: 'GET', url: apiUrl});
			};
			return {
				'getTracks': function() {
					return getTracks();
				}
			};
		});