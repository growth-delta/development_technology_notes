import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Get the canvas element
const canvas = document.getElementById('canvas');

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas });

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(0, 0, 200);

// Set up the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Load the model
const loader = new GLTFLoader();
loader.load('/static/3d_models/mbg.glb', function (gltf) {
  console.log('Model loaded:', gltf);
  const model = gltf.scene;
  scene.add(model);

  // Set the camera position to view the model from the top
  const box = new THREE.Box3().setFromObject(model);
  const center = new THREE.Vector3();
  box.getCenter(center);
  camera.position.set(center.x, box.max.y, center.z);
  camera.lookAt(center);
}, function (xhr) {
  console.log('Loading progress:', (xhr.loaded / xhr.total) * 100 + '%');
}, function (error) {
  console.error('Error loading model:', error);
});

// Add a point light to the scene
const light = new THREE.PointLight(0xffffff, 5);
light.position.set(10, 10, 10);
scene.add(light);

// Set up the orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

// Handle window resize
function onWindowResize() {
  const canvasWidth = canvas.clientWidth;
  const canvasHeight = canvas.clientHeight;

  // Update the renderer size
  renderer.setSize(canvasWidth, canvasHeight);

  // Update the camera aspect ratio
  camera.aspect = canvasWidth / canvasHeight;
  camera.updateProjectionMatrix();
}

// Handle mouse wheel event
function onWheel(event) {
  event.preventDefault();
  camera.position.z += event.deltaY * 0.1;
}

// Event listeners
window.addEventListener('resize', onWindowResize, false);
canvas.addEventListener('wheel', onWheel, false);

// Call onWindowResize initially
onWindowResize();

// Start the animation
animate();
