'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Displays listing of blog features.
 */
angular.module('castleBioApp')
	.controller('BlogCtrl', function ($scope, Lastfm, githubService) {
		$scope.blogs = [];
		Lastfm.getTracks()
			.success(function (data, status, headers) {
				console.log('LastFMResponse: ',data);
			});
		githubService.user('steveCastle')
			.success(function (data, status, headers) {
				console.log('gitHub Response: ', data);
			});
	});