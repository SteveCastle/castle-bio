'use strict';

/**
 * @ngdoc directive
 * @name castleBioApp.directive:world
 * @description
 * # world
 */
angular.module('castleBioApp')
  .directive('world', ['$document',function () {
    return {
      restrict: 'A',
      scope: true,
      controller: function ($scope, $element) {
        var camera, scene, renderer, composer, world;
        var mouseX = 0, mouseY = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        var THREE = window.THREE;
        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
        camera.position.z = 400;
        camera.position.y = 800;
        camera.position.x = -800;
        scene = new THREE.Scene();
        var ambient = new THREE.AmbientLight( 0x101030 );
        scene.add( ambient );
        scene.fog = new THREE.FogExp2( 0x000000, 0.0045 );
        var directionalLight = new THREE.DirectionalLight( 0xffeedd );

        var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
          console.log( item, loaded, total );
        };
        var texture = new THREE.Texture();
        var loader = new THREE.ImageLoader( manager );
        loader.load( 'textures/weird.jpg', function ( image ) {
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
          camera.position.z = 400;
          camera.position.y = 800;
          camera.position.x = -800;
        } );
        directionalLight.position.set( 0, 0, 1 ).normalize();
        scene.add( directionalLight );
        scene.add(camera);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        $element.append(renderer.domElement);

        //POST EFFECTS SET UP
        composer = new THREE.EffectComposer( renderer );
        composer.addPass( new THREE.RenderPass( scene, camera ) );
        var effect = new THREE.BloomPass(1,25,4.0,256);
        composer.addPass( effect );
        effect = new THREE.ShaderPass( THREE.RGBShiftShader );
        effect.uniforms.amount.value = 0.0025;
        effect.renderToScreen = true;
        composer.addPass( effect );

        console.log(renderer);
        console.log($scope);
        console.log($element);

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
          console.log(camera.position.z, e.wheelDelta, e.detail);
        }

        function animate() {
          window.requestAnimationFrame( animate );
          render();
        }

        function render() {
          camera.position.x += ( mouseX - camera.position.x ) * .005;
          camera.position.y += ( - mouseY - camera.position.y ) * .005;
          camera.lookAt( scene.position );
          composer.render();
        }
        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        window.addEventListener( 'mousewheel', onMouseWheelMove, false );
        window.addEventListener( 'resize', onWindowResize, false );
        animate();
      }
    };
  }]);
