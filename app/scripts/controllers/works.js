'use strict';
/*jshint multistr: true */
/**
 * @ngdoc function
 * @name castleBioApp.controller:WorksCtrl
 * @description
 * # WorksCtrl
 * Controller of the castleBioApp
 */
angular.module('castleBioApp')
  .controller('WorksCtrl', ['$scope','githubService', function ($scope, githubService) {
    githubService.user()
      .success(function(data,status,headers){
        console.log(data);
        console.log(status);
        console.log(headers);
      });
    $scope.works =[
        {'title': 'DRSS Corporate Dashboard','category': 'enterprise' ,'description': 'A project management and CRM dashboard for business development and commercial real estate sourcing.\
        I was responsible for planning, requirements gathering, designing, and developing this application. It started as a simple application and grew to a large company wide system.\
        I currently manage a team of 4 developers specifically devoted to this application and we are still adding features.',
        'url': 'https://finance.drssone.com'},
        {'title': 'DRSS Marketing Web Platform','category': 'Marketing' ,'description': 'A django application meant to simplify Discount Retail Store Services web presence,\
         One django application serves all of our marketing sites, landing pages, referral programs etc. This allows us to template core business data to make quick and easy changes across all of our sites.\
         It also includes components for split testing page layouts, integration with our email marketing program, and live lead integration with our CRM.', 'url': 'http://drss-business.com'},
        {'title': 'Flight Board Simulator','category': 'Experimental' ,'description': 'A fun Angular and FireBase application simulating an Airport Flight information screen.  Reactive Firebased technology and real time flight updates.  Also uses real flight data from FlightStat to pull real airport schedules.', 'url': 'http://tigerhaunt.com/flightboard-simulator/', 'gitUrl': 'https://github.com/SteveCastle/flightboard-simulator'},
        {'title': '8bit Map','category': 'Experimental' ,'description': 'Pixel drawing application with persistence via node, mongo, and Amazon S3 file storage.', 'url': 'http://8bitmap.com/', 'gitUrl': 'https://github.com/SteveCastle/8bitmap'},
        {'title': 'Solitaire Cipher','category': 'Experimental' ,'description': 'JavaScript Implementation of Solitaire Cipher from neal stephensons cryptonomicon. ', 'url': 'http://tigerhaunt.com/solitaire-cipher/', 'gitUrl': 'https://github.com/SteveCastle/solitaire-cipher'},

      ];
  }]);
