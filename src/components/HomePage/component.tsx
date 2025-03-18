import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect';

// Explicitly type the Three.js objects
const HomePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;
  let effect: AsciiEffect;
  let sphere: THREE.Mesh;
  let plane: THREE.Mesh;

  useEffect(() => {
    init();

    const onDocumentMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = (event.clientY / window.innerHeight) * 2 - 1;

      const rotationX = mouseY * (Math.PI / 8);
      const rotationY = mouseX * (Math.PI / 8);

      sphere.rotation.x = THREE.MathUtils.clamp(rotationX, -Math.PI / 8, Math.PI / 8);
      sphere.rotation.y = THREE.MathUtils.clamp(rotationY, -Math.PI / 8, Math.PI / 8);
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);

    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);

      // Cleanup Three.js objects
      if (containerRef.current && containerRef.current.contains(effect.domElement)) {
        containerRef.current.removeChild(effect.domElement);
      }
      
      renderer.dispose();

      if (sphere) {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      }
      
      if (plane) {
        plane.geometry.dispose();
        (plane.material as THREE.Material).dispose();
      }
    };
  }, []);

  const init = () => {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 600;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    const pointLight1 = new THREE.PointLight(0xffffff, 2.5, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
    sphere.position.x = 0;
    scene.add(sphere);

    plane = new THREE.Mesh(new THREE.PlaneGeometry(5000, 4000), new THREE.MeshBasicMaterial({ color: 0xe0e0e0 }));
    plane.position.y = -200;
    scene.add(plane);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    effect = new AsciiEffect(renderer, ' .:-+*=%@#', {resolution: .18});
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = 'black';
    effect.domElement.style.backgroundColor = 'white';

    if (containerRef.current) {
      containerRef.current.appendChild(effect.domElement);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', onWindowResize);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    effect.render(scene, camera);
  };

  return (
    <section id='home'>
      <div id="three-container" ref={containerRef} style={{display: "flex", justifyContent: "center", alignItems: "center", height:"97vh", overflow: "hidden"}}/>
    </section>
  );
};

export default HomePage;
