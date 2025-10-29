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

const light = new THREE.HemisphereLight( 0xffffff );
scene.add(light);

const bonfireLight = new THREE.PointLight(0xff9329, 10);
scene.add(bonfireLight);

const fireEffect = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( 0, 0 ,0),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight2 = new THREE.PointLight(0xff9329, 10);
rockLight2.position.set(-14,8,-20.5);
scene.add(rockLight2);
const fireEffect2 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( -14,8,-20.5),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight3 = new THREE.PointLight(0xff9329, 10);
rockLight3.position.set(-28,8,-4);
scene.add(rockLight3);
const fireEffect3 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( -28,8,-4),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight4 = new THREE.PointLight(0xff9329, 10);
rockLight4.position.set(22.5,12,4);
scene.add(rockLight4);
const fireEffect4 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( 22.5,12,4),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight5 = new THREE.PointLight(0xff9329, 10);
rockLight5.position.set(13,5,32);
scene.add(rockLight5);
const fireEffect5 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( 13,5,32),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight6 = new THREE.PointLight(0xff9329, 10);
rockLight6.position.set(-20,7,24);
scene.add(rockLight6);
const fireEffect6 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( -20,7,24),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight7 = new THREE.PointLight(0xff9329, 10);
rockLight7.position.set(15,9,-28);
scene.add(rockLight7);
const fireEffect7 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( 15,9,-28),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

const rockLight8 = new THREE.PointLight(0xff9329, 10);
rockLight8.position.set(-27.5,6,15);
scene.add(rockLight8);
const fireEffect8 = new getParticleSystem({
    camera,
    emitter: new THREE.Vector3( -27.5,6,15),
    parent: scene,
    rate: 20,
    texture: "assets/textures/fire/fire.png"
})

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



//Inner north
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.35,0.35,0.35);
        gltf.scene.position.set(5,2,-6);
        gltf.scene.rotateY( 2.79253);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//Inner east
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.3,0.3,0.3);
        gltf.scene.position.set(6,1,6);
        gltf.scene.rotateY( 1.22173);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//inner west
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.28,0.28,0.28);
        gltf.scene.position.set(-8,1,-1);
        gltf.scene.rotateY( 4.71239);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//outer 11:50
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(1.25,1.25,1.25);
        gltf.scene.position.set(-8,8,-26);
        gltf.scene.rotateY( 3.14159);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.9,0.9,0.9);
        gltf.scene.position.set(-32,8,-8);
        gltf.scene.rotateY( 4.71239);


    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//outer 3:10
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(1,1,1);
        gltf.scene.position.set(28,8,10);
        gltf.scene.rotateY( 1.58825);
        gltf.scene.rotateX( -0.349066);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//outer 5:20
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.75,0.75,0.75);
        gltf.scene.position.set(10,1,35);
        gltf.scene.rotateY( 0.436332);
        gltf.scene.rotateX( 0.349066);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//outer 8:30
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.75,0.75,0.75);
        gltf.scene.position.set(-32,3,10);
        gltf.scene.rotateY( 4.97419);
        //gltf.scene.rotateX( 0.349066);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//outer 8:00
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.7,0.7,0.7);
        gltf.scene.position.set(-25,3,23);
        gltf.scene.rotateY( 5.75959);
        gltf.scene.rotateX( 0.349066);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

// outer 1:55
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.85,0.85,0.85);
        gltf.scene.position.set(20,4,-28);
        gltf.scene.rotateY( 2.79253);
        gltf.scene.rotateX( 0.349066);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

//middle west
loader.load(
    // resource URL
    '/assets/3d_models/curvedrock/curvedrock.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(0.3,0.3,0.3);
        gltf.scene.position.set(-15,1,15);
        gltf.scene.rotateY( 5.75959);

    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

loader.load(
    // resource URL
    '/assets/3d_models/Gwyn/gwyn_lord_of_cinder.glb',
    // called when the resource is loaded
    function ( gltf ) {
        scene.add( gltf.scene );
        gltf.scene.scale.set(1.3,1.3,1.3);
        gltf.scene.position.set(0,-0.6,25);
    },
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
        console.log( 'An error happened' );
    }
);

const sandTexture = new THREE.TextureLoader().load('assets/textures/sand/sand.jpg');
const cylinder1geo = new THREE.CylinderGeometry(40,40,20,64);
const cylinder1mat = new THREE.MeshStandardMaterial({map: sandTexture});
const cylinder1 = new THREE.Mesh(cylinder1geo, cylinder1mat);
cylinder1.position.y = -10.5;
scene.add( cylinder1 );

const wallTexture = new THREE.TextureLoader().load("assets/textures/wall/wall.jpg");
const cylinder2geo = new THREE.CylinderGeometry( 40, 40, 5, 64, 1,true,0.09,6.1 );
const cylinder2mat = new THREE.MeshStandardMaterial( {map: wallTexture} );
const cylinder2 = new THREE.Mesh( cylinder2geo, cylinder2mat );
cylinder2.position.y = 1.9;
scene.add( cylinder2 );

const railTexture = new THREE.TextureLoader().load("assets/textures/staircase/rail.jpg")
const railgeo = new THREE.BoxGeometry(0.5,1,3);
const railmat = new THREE.MeshStandardMaterial({map: railTexture});
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

const stepTexture = new THREE.TextureLoader().load("assets/textures/staircase/step.jpg")
const stepgeo = new THREE.BoxGeometry(4.5,0.5,1);
const stepmat = new THREE.MeshStandardMaterial({map: stepTexture});
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

const fogGate2 = new THREE.Mesh(fogGeo,fogMat);
fogGate2.rotation.y = Math.PI;
fogGate2.position.z = 39;
scene.add(fogGate2);

camera.position.z = 35;
camera.position.y = 1;


function animate() {
    fireEffect.update(0.016);
    //fireEffect1.update(0.016);
    fireEffect2.update(0.016);
    fireEffect3.update(0.016);
    fireEffect4.update(0.016);
    fireEffect5.update(0.016);
    fireEffect6.update(0.016);
    fireEffect7.update(0.016);
    fireEffect8.update(0.016);

    renderer.render( scene, camera );

}