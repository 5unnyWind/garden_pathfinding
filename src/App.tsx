import { useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import threePathfinding from "three-pathfinding";
import "./App.css";

function App() {
  useEffect(() => {
    const Color = {
      GROUND: new THREE.Color(0x606060).convertSRGBToLinear().getHex(),
      NAVMESH: new THREE.Color(0xffffff).convertSRGBToLinear().getHex(),
    };
    const ZONE = "garden";
    const SPEED = 5;
    const OFFSET = 0.2;

    let level, navmesh;

    let groupID, path;

    const playerPosition = new THREE.Vector3(-3.5, 0.5, 5.5);
    const targetPosition = new THREE.Vector3();

    const pathfinder = new threePathfinding.Pathfinding();
    const helper = new threePathfinding.PathfindingHelper();

    const clock = new THREE.Clock();
    const mouse = new THREE.Vector2();
    const mouseDown = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const scene = new THREE.Scene();
    scene.add(helper);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.x = -10;
    camera.position.y = 14;
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    renderer.outputEncoding = THREE.sRGBEncoding;
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;

    
		const ambient = new THREE.AmbientLight(0x101030);
		scene.add(ambient);

		const directionalLight = new THREE.DirectionalLight(0xFFEEDD);
		directionalLight.position.set(0, 0.5, 0.5);
		scene.add(directionalLight);

    
		init();
		// animate();

		function init() {

			const gltfLoader = new GLTFLoader();

			gltfLoader.load('/garden.glb', function (gltf) {

				const levelMesh = gltf.scene.getObjectByName('Plane');
				const levelMat = new THREE.MeshStandardMaterial({
					color: Color.GROUND,
					flatShading: true,
					roughness: 1,
					metalness: 0
				});
				level = new THREE.Mesh(levelMesh.geometry, levelMat);
				window.level = level;
				scene.add(level);
			}, null);

			gltfLoader.load('meshes/tubes22.nav.glb', function (gltf) {

				const _navmesh = gltf.scene.getObjectByName('Navmesh');
				console.log(_navmesh)
				console.time('createZone()');
				const zone = THREE.Pathfinding.createZone(_navmesh.geometry);
				console.timeEnd('createZone()');

				pathfinder.setZoneData(ZONE, zone);

				const navWireframe = new THREE.Mesh(_navmesh.geometry, new THREE.MeshBasicMaterial({
					color: 0x808080,
					wireframe: true
				}));
				navWireframe.position.y = OFFSET / 2;
				scene.add(navWireframe);

				navmesh = new THREE.Mesh(_navmesh.geometry, new THREE.MeshBasicMaterial({
					color: Color.NAVMESH,
					opacity: 0.75,
					transparent: true
				}));

				scene.add(navmesh);

				// Set the player's navigation mesh group
				groupID = pathfinder.getGroup(ZONE, playerPosition);

			}, null);

			helper
				.setPlayerPosition(new THREE.Vector3(-3.5, 0.5, 5.5))
				.setTargetPosition(new THREE.Vector3(-3.5, 0.5, 5.5));

			document.addEventListener('pointerdown', onDocumentPointerDown, false);
			document.addEventListener('pointerup', onDocumentPointerUp, false);
			window.addEventListener('resize', onWindowResize, false);

		}

  });
  return <div className="App"></div>;
}

export default App;
