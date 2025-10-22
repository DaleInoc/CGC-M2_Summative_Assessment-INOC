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

const loader2 = new GLTFLoader();

loader2.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.25,0.25,0.25);
        gltf.scene.position.set(3,2,-6);
        gltf.scene.rotateY( 330);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

const sandTexture = new THREE.TextureLoader().load('assets/textures/sand/sand.jpg');
const cylinder1geo = new THREE.CylinderGeometry(40,40,5,64);
const cylinder1mat = new THREE.MeshStandardMaterial({map: sandTexture});
const cylinder1 = new THREE.Mesh(cylinder1geo, cylinder1mat);
cylinder1.position.y = -3.1;
scene.add( cylinder1 );

const cylinder2geo = new THREE.CylinderGeometry( 40, 40, 5, 64, 1,true,0.09,6.1 );
const cylinder2mat = new THREE.MeshStandardMaterial( {color: 0xffff00} );
const cylinder2 = new THREE.Mesh( cylinder2geo, cylinder2mat );
cylinder2.position.y = 1.9;
scene.add( cylinder2 );

const railgeo = new THREE.BoxGeometry(0.5,1,3);
const railmat = new THREE.MeshStandardMaterial({color: 0xa2a2a2});
const rail1 = new THREE.Mesh(railgeo, railmat);
rail1.position.x = 2.5;
rail1.position.y = -0.5;
rail1.position.z = 40;
scene.add( rail1 );
const rail2 = new THREE.Mesh(railgeo, railmat);
rail2.position.x = -2.5;
rail2.position.y = -0.5;
rail2.position.z = 40;
scene.add( rail2 );
const rail3 = new THREE.Mesh(railgeo, railmat);
rail3.rotation.x = Math.PI / 4;
rail3.position.x = -2.5;
rail3.position.y = -1.4;
rail3.position.z = 42.25;
scene.add( rail3 );
const rail4 = new THREE.Mesh(railgeo, railmat);
rail4.rotation.x = Math.PI / 4;
rail4.position.x = 2.5;
rail4.position.y = -1.4;
rail4.position.z = 42.25;
scene.add( rail4 );

const stepgeo = new THREE.BoxGeometry(4.5,0.5,1);
const stepmat = new THREE.MeshStandardMaterial({color: 0xffffff});
const step1 = new THREE.Mesh(stepgeo, stepmat);
step1.position.y = -0.8;
step1.position.z = 40.25;
scene.add( step1 );
const step2 = new THREE.Mesh(stepgeo, stepmat);
step2.position.y = -1.3;
step2.position.z = 41;
scene.add( step2 );
const step3 = new THREE.Mesh(stepgeo, stepmat);
step3.position.y = -1.8;
step3.position.z = 41.75;
scene.add( step3 );
const step4 = new THREE.Mesh(stepgeo, stepmat);
step4.position.y = -2.3;
step4.position.z = 42.5;
scene.add( step4 );

const step2geo = new THREE.BoxGeometry(10,0.5,10);
const stepLast = new THREE.Mesh(step2geo, stepmat);
stepLast.position.y = -2.8;
stepLast.position.z = 43.25;
scene.add( stepLast );


const fogTexture = new THREE.TextureLoader().load('assets/textures/fog/fog.jpg');
const fogGeo = new THREE.PlaneGeometry(10,9,5);
const fogMat = new THREE.MeshStandardMaterial({map: fogTexture});
const fogGate = new THREE.Mesh(fogGeo,fogMat);
fogGate.position.z = 39.5;
scene.add(fogGate);

camera.position.z = 35;
camera.position.y = 1;


function animate() {
    // fireEffect.update(0.016);
    renderer.render( scene, camera );

}