
//itens da estrutura inicial
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// mercury.
var geometry = new THREE.SphereGeometry(0.3, 10, 10);
var material = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
var mercury = new THREE.Mesh( geometry, material );
mercury.position.set(-5, 0, -5);
scene.add(mercury);

// Venus.
var geometry = new THREE.SphereGeometry(0.4, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xcc9900 } );
var venus = new THREE.Mesh( geometry, material );
venus.position.set(-7, 0, 7);
scene.add(venus);

// Mars.
var geometry = new THREE.SphereGeometry(0.5, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xff3355 } );
var mars = new THREE.Mesh( geometry, material );
mars.position.set(10, 0, 10);
scene.add(mars);

// Jupiter.
var geometry = new THREE.SphereGeometry(2, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xbb6600 } );
var jupiter = new THREE.Mesh( geometry, material );
jupiter.position.set(20, 0, -20);
scene.add(jupiter);

// Saturn.
var geometry = new THREE.SphereGeometry(1.2, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xdddd99 } );
var saturn = new THREE.Mesh( geometry, material );
saturn.position.set(-10, 0, -20);
scene.add(saturn);

// Uranus.
var geometry = new THREE.SphereGeometry(1, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xaaffaa } );
var uranus = new THREE.Mesh( geometry, material );
uranus.position.set(20, 0, -20);
scene.add(uranus);

// Neptune.
var geometry = new THREE.SphereGeometry(1, 20, 20);
var material = new THREE.MeshLambertMaterial( { color: 0xaaccff } );
var neptune = new THREE.Mesh( geometry, material );
neptune.position.set(50, 0, -20);
scene.add(neptune);


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


// Criando estrelas por pontos randomicos.
var particles = new THREE.CircleGeometry(0.1, 20);
for (var p = 0; p < 1000; p++) {
    var particle = new THREE.Vector3(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 500);
    particles.vertices.push(particle);
}

for (var p = 0; p < 500; p++) {
    var particle = new THREE.Vector3(Math.random() * 300 - 250, Math.random() * 300 - 250, Math.random() * 500 - 400);
    particles.vertices.push(particle);
}


var particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xffffff, size: 0.1 });
var particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
scene.add(particleSystem);


//config
camera.position.z = 35;
var model_view = 0;
var angle = 360;

function setupKeyControls() {
  document.onkeydown = function(e) {
    switch (e.keyCode) {

      //movimentos em câmera livre
      case 65:
      camera.position.x -= 0.5;
      break;
      case 68:
      camera.position.x += 0.5;
      break;
      case 83:
      camera.position.y -= 0.5;
      break;
      case 87:
      camera.position.y += 0.5;
      break;
      case 38:
      camera.position.z -= 0.5;
      break;
      case 40:
      camera.position.z += 0.5;
      break;
      case 37:
      camera.rotation.y+=0.01;
      break;
      case 39:
       camera.rotation.y-=0.01;
      break;


      //modos de câmera fixos
      case 90:
       if( model_view == 1){
        model_view = 0;
       }else{
        model_view = 1;
       }
      break;
      case 88:
       if( model_view == 88){
        model_view = 0;
       }else{
        model_view = 2;
       }
      break;
      case 67:
       if( model_view == 67){
        model_view = 0;
       }else{
        model_view = 3;
       }
      break;
       case 86:
       if( model_view == 86){
        model_view = 0;
       }else{
        model_view = 4;
       }
      break;
       case 66:
       if( model_view == 66){
        model_view = 0;
       }else{
        model_view = 5;
       }
      break;
       case 78:
       if( model_view == 78){
        model_view = 0;
       }else{
        model_view = 6;
       }
      break;
      case 77:
       if( model_view == 77){
        model_view = 0;
       }else{
        model_view = 7;
       }
      break;
       case 75:
       if( model_view == 75){
        model_view = 0;
       }else{
        model_view = 8;
       }
      break;
    
    }
  };
}





function render() {
  requestAnimationFrame(render);
  var time = Date.now() * 0.0005;

  //planets orbit
  earth.rotation.y -= 0.01;
  earth.position.x = Math.sin( time * 1.5 ) * 13;
  earth.position.z = Math.cos( time * 1.5 ) * 13;

  mercury.position.x = Math.sin( time * 4.5 ) * 5;
  mercury.position.y = Math.cos( time * 4.5 ) * 2;
  mercury.position.z = Math.cos( time * 4.5 ) * 5;
  
  venus.position.x = Math.sin( time * -2.5 ) * 9;
  venus.position.y = Math.sin( time * -1.5 ) * 2;
  venus.position.z = Math.cos( time * -2.5 ) * 9;
  
  mars.position.x = Math.sin( time * 1 ) * 18;
  mars.position.y = Math.cos( time * 1 ) * 4;
  mars.position.z = Math.cos( time * 1 ) * 18;
  
  jupiter.position.x = Math.sin( time * 0.5 ) * 25;
  jupiter.position.y = Math.sin( time * 0.5 ) * 3;
  jupiter.position.z = Math.cos( time * 0.5 ) * 25;
  
  saturn.position.x = Math.sin( time * 0.3 ) * 32;
  saturn.position.z = Math.cos( time * 0.3 ) * 32;
  
  uranus.position.x = Math.sin( time * 0.2 ) * 40;
  uranus.position.y = Math.cos( time * 0.2 ) * 10;
  uranus.position.z = Math.cos( time * 0.2 ) * 40;
  
  neptune.position.x = Math.sin( time * 0.1 ) * 50;
  neptune.position.y = Math.cos( time * 0.1 ) * 20;
  neptune.position.z = Math.cos( time * 0.1 ) * 50;


  //camera seguindo planetas
  if(model_view == 1){
    camera.position.x = earth.position.x;
    camera.position.y = earth.position.y;
    camera.position.z = earth.position.z+2;
  }else if(model_view == 2){
    camera.position.x = mercury.position.x;
    camera.position.y = mercury.position.y;
    camera.position.z = mercury.position.z+2;
  }else if(model_view == 3){
    camera.position.x = venus.position.x;
    camera.position.y = venus.position.y;
    camera.position.z = venus.position.z+2;
  }else if(model_view == 4){
    camera.position.x = mars.position.x;
    camera.position.y = mars.position.y;
    camera.position.z = mars.position.z+2;
  }else if(model_view == 5){
    camera.position.x = jupiter.position.x;
    camera.position.y = jupiter.position.y;
    camera.position.z = jupiter.position.z+20;
  }else if(model_view == 6){
    camera.position.x = saturn.position.x;
    camera.position.y = saturn.position.y;
    camera.position.z = saturn.position.z+2;
  }else if(model_view == 7){
    camera.position.x = uranus.position.x;
    camera.position.y = uranus.position.y;
    camera.position.z = uranus.position.z+2;
  }else if(model_view == 8){
    camera.position.x = neptune.position.x;
    camera.position.y = neptune.position.y;
    camera.position.z = neptune.position.z+10;
  }else{ ///camera estática
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 35;
  }

  setupKeyControls();
  renderer.render(scene, camera);
}
render();





