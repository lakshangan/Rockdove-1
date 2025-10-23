import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
declare const gsap: any;

export const Hero: React.FC = () => {
  const threeJsContainerRef = useRef<HTMLDivElement>(null);
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    if (!threeJsContainerRef.current) return;

    let airplaneGroup: THREE.Group | null = null;
    let isHovered = false;
    const mouse = new THREE.Vector2();

    // === Scene, Camera, Renderer ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeJsContainerRef.current.appendChild(renderer.domElement);

    // === Lighting ===
    scene.add(new THREE.AmbientLight(0xffffff, 0.6)); // soft ambient base

    // Key light (front-right)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 4, 6);
    scene.add(keyLight);

    // Fill light (back-left)
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
    fillLight.position.set(-4, 2, -3);
    scene.add(fillLight);

    // Top light – adds glow from above
    const topLight = new THREE.SpotLight(0xffffff, 10, 20, Math.PI / 3, 0.5, 1);
    topLight.position.set(0, 6, 0);
    topLight.target.position.set(0, 0, 0);
    scene.add(topLight);
    scene.add(topLight.target);

    // Bottom light – adds a nice reflective brightness from below
    const bottomLight = new THREE.PointLight(0x80ffff, 10, 15);
    bottomLight.position.set(0, -4, 0);
    scene.add(bottomLight);

    // Optional subtle rim light from behind for cinematic feel
    const rimLight = new THREE.DirectionalLight(0x99ccff, 0.5);
    rimLight.position.set(0, 0, -6);
    scene.add(rimLight);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxAzimuthAngle = Math.PI / 10;
    controls.minAzimuthAngle = -Math.PI / 10;
    controls.minPolarAngle = Math.PI / 2.15;
    controls.maxPolarAngle = Math.PI / 2.2;

    const raycaster = new THREE.Raycaster();
    const loader = new GLTFLoader();

    // === Load model ===
    loader.load(
      "/heroflight.glb",
      (gltf: GLTF) => {
        airplaneGroup = gltf.scene;
        airplaneGroup.scale.set(0.25, 0.25, 0.25);
        airplaneGroup.position.set(0, -0.1, 0); // ✅ plane above heading now

        airplaneGroup.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            if (mesh.material) {
              const material = mesh.material;
              if (Array.isArray(material)) {
                mesh.material = material.map((mat) => {
                  const m = mat.clone();
                  m.transparent = true;
                  m.opacity = 1;
                  return m;
                });
              } else {
                const m = material.clone();
                m.transparent = true;
                m.opacity = 1;
                mesh.material = m;
              }
            }
            mesh.userData.originalPos = mesh.position.clone();
          }
        });

        scene.add(airplaneGroup);
        setIsHeroReady(true);
      },
      undefined,
      () => {
        console.error("Model failed to load");
        setTimeout(() => setIsHeroReady(true), 500);
      }
    );

    // === Hover animation ===
    function animateParts(expand: boolean) {
      if (!airplaneGroup || typeof gsap === "undefined") return;
      const spreadFactor = 2;

      airplaneGroup.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const original = mesh.userData.originalPos;
          if (!original) return;

          gsap.to(mesh.position, {
            x: expand
              ? original.x + (Math.random() - 0.5) * spreadFactor
              : original.x,
            y: expand
              ? original.y + (Math.random() - 0.5) * spreadFactor * 0.5
              : original.y,
            z: expand
              ? original.z + (Math.random() - 0.5) * spreadFactor
              : original.z,
            duration: 1.5,
            ease: "power3.out",
          });
        }
      });
    }

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);

      if (airplaneGroup) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(
          airplaneGroup.children,
          true
        );

        if (intersects.length > 0 && !isHovered) {
          isHovered = true;
          document.body.style.cursor = "pointer";
          animateParts(true);
        } else if (intersects.length === 0 && isHovered) {
          isHovered = false;
          document.body.style.cursor = "default";
          animateParts(false);
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background 3D Canvas */}
      <div
        ref={threeJsContainerRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Text Content */}
      <div
        className={`relative z-10 text-center px-6 md:px-12 mt-[350px] transition-opacity duration-1000 ${
          isHeroReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Parts, Service and <span className="text-cyan-400">Solution</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8">
          The one-stop destination for all of your aircraft components and
          servicing for a safe flight.
        </p>

        <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full shadow-lg transition-all duration-300">
          Know more
        </button>
      </div>
    </section>
  );
};
