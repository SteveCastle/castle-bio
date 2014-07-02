'use strict';

/**
 * @ngdoc function
 * @name castleBioApp.controller:WorksCtrl
 * @description
 * # WorksCtrl
 * Controller of the castleBioApp
 */
angular.module('castleBioApp')
  .controller('WorksCtrl', function ($scope) {
    $scope.works =[
        {'title': 'DRSS Corporate Dashboard','category': 'enterprise' ,'description': 'A project management and CRM dashboard for business development and commercial real estate sourcing.',
        'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},
        {'title': 'DRSS Marketing Web Platform','category': 'Marketing' ,'description': 'A python based unified sales and marketing platform with A/B split testing, referral program management, and designed to stream line changes in pricing and business messaging. This application was used to unify all of our brand pages, landing pages, and referral programs. It gathered leads and fed them to our CRM, and provided easy maintenance of all of our web properties.', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},
        {'title': 'Flight Board Simulator','category': 'Experimental' ,'description': 'A fun Angular and FireBase application simulating an Airport Flight information screen.  Reactive Firebased technology and real time flight updates.  Also uses real flight data from FlightStat to pull real airport schedules.', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},
        {'title': '8bit Map','category': 'Experimental' ,'description': 'Pixel drawing application with persistence via node, mongo, and Amazon S3 file storage.', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},
        {'title': 'Solitaire Cipher','category': 'Experimental' ,'description': 'JavaScript Implementation of Solitaire Cipher from neal stephensons cryptonomicon. ', 'url': 'url goes here', 'imgUrl': '/img/placeholder.jpg'},

      ];
  });
