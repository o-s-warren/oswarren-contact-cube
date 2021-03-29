const section = document.querySelector("section.face");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const ambient = new THREE.AmbientLight( 0x222222 );
scene.add( ambient );

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 0, 6);
scene.add( light );

const loader = new THREE.TextureLoader();

const urls = [
  "img/four.jpg", "img/six.jpg",
  "img/eight.jpg", "img/nine.jpg",
  "img/one.jpg", "img/two.jpg"
]

const materials = urls.map(url => {
  return new THREE.MeshLambertMaterial({
    map: loader.load(url)
  })
})


const geometry = new THREE.BoxGeometry(5, 5, 5);

const cube = new THREE.Mesh( geometry, materials );
scene.add( cube );

camera.position.z = 9;


function animate() {
	requestAnimationFrame( animate );



    cube.rotation.x += 0.016;
		cube.rotation.y += 0.009;
   	cube.rotation.z -= 0.012;

	renderer.render( scene, camera );
}
animate();
