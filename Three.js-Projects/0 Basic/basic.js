/**
*	A Three.js example by Konstantin Müller - 08.2017:
*	Basic: An empty scene
*
*	Three.js version 87dev
*/

const basic = (function() {
		let scene, camera, renderer, controls, aspect = window.innerWidth / window.innerHeight, frustumSize = 100, stats;

		function init() {
			scene = new THREE.Scene();

			camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -50, 100);
			camera.position.set(1,1,1);
			camera.zoom = 4;
			camera.updateProjectionMatrix();

			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setClearColor("#fff", 1.0);

			controls = new THREE.OrbitControls(camera, renderer.domElement);
			
			scene.add(new THREE.GridHelper(30, 30));
			
			initStats();

			document.body.appendChild(renderer.domElement);
			
			window.addEventListener("resize", function() {
					renderer.setSize(window.innerWidth, window.innerHeight);
					aspect = window.innerWidth / window.innerHeight;
					camera.left = frustumSize * aspect / - 2;
					camera.right = frustumSize * aspect / 2;
					camera.updateProjectionMatrix();
			}, false);
		}
		
		function initStats() {
				stats = new Stats();
				stats.showPanel(0);
				document.body.appendChild(stats.dom);
				stats.begin();
		}

		function animate() {
				requestAnimationFrame(animate);
				
				stats.update();
				controls.update();

				renderer.render(scene, camera);
		}

		init();
		animate();
})();