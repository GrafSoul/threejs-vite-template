import * as THREE from "three";

//** Scene */
const scene = new THREE.Scene();

//** Camera */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  30
);
camera.position.z = 5;

//** Objects */
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

//** Renderer */
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);

//** Animate */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cubeMesh.rotation.x += 0.01;
  cubeMesh.rotation.y += 0.01;
}

animate();
