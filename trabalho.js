var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Sun (spotlight).
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


// Extra lighting.
var light = new THREE.PointLight( 0xffffff, 0.5, 100 );
light.position.set(0, 0, 50);
scene.add( light );




// Camera options.
camera.position.z = 35;

renderer.render(scene, camera);