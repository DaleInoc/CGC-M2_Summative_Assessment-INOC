import * as THREE from "/assets/js/three.module";
import { GLTFLoader } from "/assets/js/GLTFLoader";
import {OrbitControls} from "/assets/js/OrbitControls";
import {getParticleSystem} from "/assets/js/getParticleSystem";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0xffffff );
scene.add(light);

const controls = new OrbitControls(camera,renderer.domElement);
controls.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;
controls.mouseButtons.LEFT = THREE.MOUSE.PAN;
controls.keys = {
    LEFT: 'KeyA',
    RIGHT: 'KeyD',
    UP: 'KeyW',
    BOTTOM: 'KeyS',
}
controls.listenToKeyEvents(window);
controls.keyPanSpeed = 20;

const loader = new GLTFLoader();

loader.load(
    // resource URL
    '/assets/3d_models/bonfire-v2/bonfire.gltf',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

const fireEffect = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3(0,0,0),
    parent: scene,
    rate: 30,
    texture: "assets/textures/fire.png"
})
camera.position.z = 5;

function animate() {
    fireEffect.update(0.016);
    renderer.render( scene, camera );

}