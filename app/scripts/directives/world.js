'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:world
 * @description
 * @scope
 * # world
 */
angular.module('castleBioApp')
  .directive('world', function () {
    return {
      restrict: 'A',
      scope: {geoColor:'@'},
      controller: function ($scope, $element) {
        var camera, scene, renderer, composer, world, ambient, directionalLight, effect;
        var mouseX = 0, mouseY = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        var THREE = window.THREE;
        var lightingColor = new THREE.Color($scope.geoColor);
        console.log($scope.geoColor);

        $scope.changeColor = function(){
          
        };
        
        $scope.moveCamera = function(x,y,z){
            camera.position.z = x;
            camera.position.y = y;
            camera.position.x = z;
          };


        $scope.loadWorld = function(){
          var manager = new THREE.LoadingManager();
          var texture = new THREE.Texture();
          var loader = new THREE.ImageLoader( manager );
          loader.load( 'images/white.jpg', function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
          } );
          loader = new THREE.OBJLoader( manager );
          loader.load( 'obj/land.obj', function ( object ) {
            object.traverse( function ( child ) {
              if ( child instanceof THREE.Mesh ) {
                child.material.map = texture;
              }
            } );
            object.position.y = - 80;
            world = object;
            scene.add( world );
          } );
        };
//Camera Creation and Set Initial Position
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.z = 400;
        camera.position.y = 800;
        camera.position.x = -800;

//Create Three.js Scene and Set Settings
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2( 0x000000, 0.0045 );

        ambient = new THREE.AmbientLight( 0x101030 );

//Load Lighting Set Up
        directionalLight = new THREE.DirectionalLight( lightingColor,1 );
        scene.add( ambient );
        scene.add( directionalLight, 1 );
        directionalLight.position.set( 0, 0, 1 ).normalize();
//Load Geometry and Textures
        $scope.loadWorld();
        
        
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        $element.append(renderer.domElement);



  //Post Effects Set Up
        composer = new THREE.EffectComposer( renderer );
        composer.addPass( new THREE.RenderPass( scene, camera ) );

    //Blur and Soften    
        effect = new THREE.BloomPass(1,25,4.0,256);
        composer.addPass( effect );
    //Spread Colors    
        effect = new THREE.ShaderPass( THREE.RGBShiftShader );
        effect.uniforms.amount.value = 0.0125;
        effect.renderToScreen = true;
        composer.addPass( effect );



  // Event Handlers
        function onWindowResize() {
          windowHalfX = window.innerWidth / 2;
          windowHalfY = window.innerHeight / 2;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function onDocumentMouseMove( e ) {
          mouseX = ( e.clientX - windowHalfX ) / 4;
          mouseY = ( e.clientY - windowHalfY ) / 4;
        }
        function onMouseWheelMove( e ) {
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          if ((camera.position.z < 800 && e.wheelDelta > 0) || (camera.position.z > 300 && e.wheelDelta < 0) ) {
            camera.position.z = camera.position.z + delta;
          }
        }

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        window.addEventListener( 'mousewheel', onMouseWheelMove, false );
        window.addEventListener( 'resize', onWindowResize, false );

 //Animation Loop and Renderer
        function animate() {
          window.requestAnimationFrame( animate );
          render();
        }

        function render() {
          camera.position.x += ( mouseX - camera.position.x ) * 0.005;
          camera.position.y += ( - mouseY - camera.position.y ) * 0.005;
          camera.lookAt( scene.position );
          composer.render();
        }

        animate();
      }
    };
  });
