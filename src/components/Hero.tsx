import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";
import { gsap } from "gsap";
import LightRays from "./LightRays";

// --- NEW BLUR TEXT ANIMATION COMPONENT ---
// (Moved useLayoutEffect import here for clarity)

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "chars";
  direction?: "top" | "bottom" | "left" | "right";
  onAnimationComplete?: () => void;
  className?: string;
  // NEW PROP: Signal to start the animation
  startAnimation: boolean;
}

const getDirectionVector = (dir: "top" | "bottom" | "left" | "right") => {
  switch (dir) {
    case "top":
      return { y: 20 };
    case "bottom":
      return { y: -20 };
    case "left":
      return { x: 20 };
    case "right":
      return { x: -20 };
    default:
      return { y: 20 };
  }
};

/**
 * Animates text tokens (words or characters) by fading in, de-blurring, and sliding.
 */
const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
  startAnimation, // Consume the new prop
}) => {
  const tokenRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null); // Ref for GSAP Timeline

  // Split text into tokens, including spaces to preserve layout
  const tokensWithSpaces = [];
  if (animateBy === "words") {
    const words = text.split(/\s+/);
    words.forEach((word, index) => {
      tokensWithSpaces.push(word);
      if (index < words.length - 1) {
        tokensWithSpaces.push(" ");
      }
    });
  } else {
    tokensWithSpaces.push(...text.split(""));
  }

  const offset = getDirectionVector(direction);

  // 1. useLayoutEffect: Create the animation and set the initial state (hidden/blurred)
  // This runs synchronously before paint to hide the text instantly.
  useLayoutEffect(() => {
    if (typeof gsap === "undefined") return;

    const elementsToAnimate = tokenRefs.current.filter(
      (el) => el && el.textContent?.trim() !== ""
    );

    // 1. Kill any existing timeline
    if (tlRef.current) tlRef.current.kill();

    // 2. Set initial state (blurred, invisible, offset)
    // This ensures the tokens are in the correct start position/style before they are painted.
    gsap.set(elementsToAnimate, {
      ...offset,
      opacity: 0,
      filter: "blur(8px)",
      display: "inline-block",
    });

    // 3. Create PAUSED timeline
    const tl = gsap.timeline({
      paused: true,
      delay: delay / 1000,
      onComplete: onAnimationComplete,
    });

    tl.to(elementsToAnimate, {
      ...Object.keys(offset).reduce((acc, key) => ({ ...acc, [key]: 0 }), {}), // Reset offset to 0
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.05,
    });

    tlRef.current = tl;
  }, [text, animateBy, direction, delay]); // Re-create timeline if props change

  // 2. useEffect: Control the timeline based on the 'startAnimation' prop
  // This runs after layout and only when the parent says to start.
  useEffect(() => {
    if (startAnimation && tlRef.current) {
      tlRef.current.play();
    }
  }, [startAnimation]);

  // Render each token
  let tokenIndex = 0;
  return (
    <span className={className}>
      {tokensWithSpaces.map((token, i) => {
        const isSpace = token === " ";
        if (isSpace) {
          return <span key={i}>&nbsp;</span>;
        }

        return (
          <span
            key={i}
            ref={(el) => {
              tokenRefs.current[tokenIndex++] = el;
            }}
            style={{ display: "inline-block" }}
          >
            {token}
          </span>
        );
      })}
    </span>
  );
};

// --- HANDLER FUNCTION ---
const handleAnimationComplete = () => {
  console.log("Blur Text Animation completed!");
};

// --- HERO COMPONENT ---

export const Hero: React.FC = () => {
  const threeJsContainerRef = useRef<HTMLDivElement>(null);
  // NEW STATE: Control when the text animation starts
  const [isHeroReady, setIsHeroReady] = useState(false);

  // === Three.js Setup (Runs on Mount) ===
  useEffect(() => {
    // ... (existing THREE.js setup code, truncated for brevity) ...

    if (!threeJsContainerRef.current) return;

    let airplaneGroup: THREE.Group | null = null;
    let isHovered: boolean = false;
    const mouse: THREE.Vector2 = new THREE.Vector2();

    // === Scene, Camera, Renderer ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    threeJsContainerRef.current.appendChild(renderer.domElement);

    // === Lighting, Controls, Reflection Plane (Existing code) ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(0, 5, 5).normalize();
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
    fillLight.position.set(-5, 2, -5).normalize();
    scene.add(fillLight);

    const spotLight = new THREE.SpotLight(
      0xffffff,
      0.8,
      10,
      Math.PI / 6,
      0.5,
      0.5
    );
    spotLight.position.set(0, 5, 3);
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);
    scene.add(spotLight.target);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxAzimuthAngle = 0;
    controls.minAzimuthAngle = 0;
    controls.minPolarAngle = Math.PI / 2.0;
    controls.maxPolarAngle = Math.PI / 2.0;
    controls.target.set(0, 0, 0);

    const raycaster = new THREE.Raycaster();

    const reflectionGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMirror = new Reflector(reflectionGeometry, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: new THREE.Color(0x222222), // Use THREE.Color
    });
    groundMirror.position.y = -0.99;
    groundMirror.rotation.x = -Math.PI / 2;
    scene.add(groundMirror);

    // ... (Existing GLTF loading code) ...
    const loader = new GLTFLoader();

    loader.load(
      "/heroflight.glb",
      (gltf: GLTF) => {
        airplaneGroup = gltf.scene;
        airplaneGroup.scale.set(0.17, 0.17, 0.17);
        const initialGroupY = -0.8;
        airplaneGroup.position.set(0, initialGroupY, -0.3);

        airplaneGroup.traverse((child: THREE.Object3D) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              mesh.castShadow = true;
              const material: THREE.Material | THREE.Material[] = mesh.material;

              if (Array.isArray(material)) {
                mesh.material = material.map((mat) => {
                  const newMaterial = mat.clone();
                  newMaterial.transparent = true;
                  newMaterial.opacity = 1;
                  return newMaterial;
                });
              } else {
                const newMaterial = material.clone();
                newMaterial.transparent = true;
                newMaterial.opacity = 1;
                mesh.material = newMaterial;
              }
            }
            mesh.userData.originalPos = mesh.position.clone();
          }
        });
        scene.add(airplaneGroup);
        console.log("✅ Model loaded successfully!");

        // --- FIX 2: Set Hero Ready upon model load (a better trigger than setTimeout) ---
        setIsHeroReady(true);
      },
      (progress) => {
        console.log(
          `Loading progress: ${(progress.loaded / progress.total) * 100}%`
        );
      },
      (error: unknown) => {
        console.error(
          "❌ Error loading model! Hover animation will not contain model parts.",
          error
        );
        // If model fails to load, still allow the text animation to proceed after a short delay
        setTimeout(() => setIsHeroReady(true), 500);
      }
    );

    // ... (Existing animateParts function) ...
    function animateParts(expand: boolean): void {
      if (!airplaneGroup) return;

      const spreadFactor = 2;

      airplaneGroup.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const original: THREE.Vector3 = mesh.userData.originalPos;

          if (!original) return;

          if (expand) {
            gsap.to(mesh.position, {
              x: original.x + (Math.random() - 0.5) * spreadFactor,
              y: original.y + (Math.random() - 0.5) * spreadFactor * 0.5,
              z: original.z + (Math.random() - 0.5) * spreadFactor,
              duration: 1.5,
              ease: "power3.out",
            });
          } else {
            gsap.to(mesh.position, {
              x: original.x,
              y: original.y,
              z: original.z,
              duration: 1.5,
              ease: "power3.inOut",
            });
          }
        }
      });
    }

    // --- REMOVED ARBITRARY setTimeout ---

    // ... (Existing Event Listeners and Animation Loop) ...
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const fbo: THREE.WebGLRenderTarget | undefined =
        groundMirror.getRenderTarget();
      if (fbo) {
        fbo.setSize(
          window.innerWidth * window.devicePixelRatio,
          window.innerHeight * window.devicePixelRatio
        );
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onWindowResize);

    function animate() {
      const animationId = requestAnimationFrame(animate);

      if (airplaneGroup) {
        raycaster.setFromCamera(mouse, camera);
        const intersects: THREE.Intersection[] = raycaster.intersectObjects(
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
      return animationId;
    }

    const animationId = animate();

    // 3. Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []); // Runs only on mount

  // === React Component JSX ===
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div
        ref={threeJsContainerRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 md:px-12">
        {/* Title */}
        {/* FIX 1: Use conditional opacity and a CSS transition on the wrapper to prevent the flash */}
        <h1
          className={`text-[10em] font-bold tracking-[50px] text-white/80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] m-0 translate-x-[-15%] translate-y-[-55%] pointer-events-none -z-1000 transition-opacity duration-300 ${
            isHeroReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <BlurText
            text="ROCKDOVE"
            delay={300}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="inline-block"
            startAnimation={isHeroReady} // Pass the state to control the start
          />
        </h1>
      </div>
      <div className="absolute inset-0 z-[5] bg-black opacity-30 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={1.5}
          fadeDistance={1.5}
          lightSpread={2}
          rayLength={3}
          saturation={0}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </section>
  );
};
