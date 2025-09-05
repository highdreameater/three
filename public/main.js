// 🌐 OLD: import * as THREE from 'three';
// ✅ NEW: Import directly from the module file being served
import * as THREE from 'three';

// ... rest of your code

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111); // A dark grey background

// 2. Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias for smoother edges
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 4. Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); // wireframe looks cool
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();