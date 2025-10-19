import * as THREE from "/assets/js/three.module";
import { GLTFLoader } from "/assets/js/GLTFLoader";
import {OrbitControls} from "/assets/js/OrbitControls";
import {getParticleSystem} from "/assets/js/getParticleSystem";
import {TextureLoader} from "/assets/js/three.module";

const scene = new THREE.Scene();
const skyLoader = new TextureLoader();
skyLoader.load("assets/textures/skybox/cave.jpg", function(texture){scene.background = texture;});

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const light = new THREE.HemisphereLight( 0xc0c0c0 );
scene.add(light);

const bonfireLight = new THREE.PointLight(0xff9329, 10);
scene.add(bonfireLight);

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

// const fireEffect = new getParticleSystem({
//     camera,
//     emitter: new THREE.Vector3( 0, 0 ,0),
//     parent: scene,
//     rate: 20,
//     texture: "assets/textures/fire/fire.png"
// })

const sandTexture = new THREE.TextureLoader().load('assets/textures/sand/sand.jpg');
const cylinder1geo = new THREE.CylinderGeometry(100,100,5);
const cylinder1mat = new THREE.MeshStandardMaterial({map: sandTexture});
const cylinder1 = new THREE.Mesh(cylinder1geo, cylinder1mat);
cylinder1.position.y = -3.1;
scene.add( cylinder1 );

const fogTexture = new THREE.TextureLoader().load('assets/textures/fog/fog.jpg');
const fogGeo = new THREE.PlaneGeometry(10,10,5);
const fogMat = new THREE.MeshStandardMaterial({map: fogTexture});
const fogGate = new THREE.Mesh(fogGeo,fogMat);
fogGate.position.z = 25;
scene.add(fogGate);

camera.position.z = 20;


function animate() {
    // fireEffect.update(0.016);
    renderer.render( scene, camera );

}