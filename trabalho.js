
//itens da estrutura inicial
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Sol com iluminação no centro
var sun = new THREE.SphereGeometry(3, 50, 50);
var sunLight = new THREE.PointLight(0xffffff); 
sunLight.position.set(0, 0, 0); 
sunLight.castShadow = true; 
sunLight.shadowMapWidth = 1024; 
sunLight.shadowMapHeight = 1024; 
sunLight.shadowCameraNear = 500; 
sunLight.shadowCameraFar = 4000;
sunLight.add(new THREE.Mesh(sun, new THREE.MeshBasicMaterial({ color: 0xffa500 })));
sunLight.shadowCameraFov = 30;
scene.add(sunLight);

//iluminação padrão de todos os componentes
var light = new THREE.PointLight( 0xffffff, 0.5, 100 );
light.position.set(0, 0, 50);
scene.add( light );

//earth
var geometry = new THREE.SphereGeometry(0.6, 20, 20);
var material  = new THREE.MeshPhongMaterial();
material.map    = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');

material.bumpMap    = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg')
material.bumpScale = 0.05;

material.specularMap    = THREE.ImageUtils.loadTexture('images/original.jpg')
material.specular  = new THREE.Color('grey')


var earth = new THREE.Mesh( geometry, material );
earth.position.set(20, 0, -20);
scene.add(earth);


// Camera
camera.position.z = 15;



function setupKeyControls() {
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
      camera.position.x -= 1;
      break;
      case 38:
      camera.position.z -= 1;
      break;
      case 39:
      camera.position.x += 1;
      break;
      case 40:
      camera.position.z += 1;
      break;
    }
  };
}





function render() {
  requestAnimationFrame(render);
  var time = Date.now() * 0.0005;

  // camera.rotation.z+=0.01;

  earth.rotation.y += 0.01;
  earth.position.x = Math.sin( time * 1.5 ) * 13;
  earth.position.z = Math.cos( time * 1.5 ) * 13;
  // controls.update();
  
  //camera seguindo terra
  // camera.position.x = earth.position.x;
  // camera.position.y = earth.position.y;
  // camera.position.z = earth.position.z+2;

  setupKeyControls();
  renderer.render(scene, camera);
}
render();





