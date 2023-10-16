'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface ThreeSceneProps {
  parent: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ parent }) => {
  const threeSceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const helper = new THREE.GridHelper(1000, 40, 0x303030, 0x303030);
    helper.position.y = -40;

    //scene.add(helper);

    // Create camera
    const camera = new THREE.PerspectiveCamera(20, 1.2, 1, 1000);
    camera.position.set(0, 0, 0);
    camera.position.z = 5;

    // Create renderer
    const container = document.getElementById(parent);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container!.offsetWidth, container!.offsetHeight);

    renderer.clear();
    renderer.setPixelRatio(window.devicePixelRatio);
    container!.appendChild(renderer.domElement);
    camera.aspect = container!.offsetWidth / container!.offsetHeight;
    camera.updateProjectionMatrix();
    threeSceneRef.current!.innerHTML = '';
    threeSceneRef.current!.appendChild(renderer.domElement);
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    if (threeSceneRef.current) {
      threeSceneRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    const items: number[] = [-0.3, -0.15, 0.15, 0.3];
    controls.autoRotateSpeed = items[Math.floor(Math.random() * items.length)] * 0.8;
    scene.userData.controls = controls; //this allowed continuing scrolling div when in render view
    controls.minDistance = 400; //50
    controls.maxDistance = 800; //400

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;

    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 300;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: 1,
      color: 0xeff876,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);

    scene.add(particlesMesh);

    /*
    const linecolor = 0xffffff;
    const material = new THREE.MeshBasicMaterial({ 
      color: linecolor,
      wireframe: true,
      wireframeLinewidth: 1.3,
    });
    const sphere = new THREE.Mesh(sphereg, material);
    sphere.scale.set(1.1, 1.1, 1.1);

    scene.add(sphere);
    */

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 100, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(1, 1, 0);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 50;
    dirLight.shadow.camera.bottom = -25;
    dirLight.shadow.camera.left = -25;
    dirLight.shadow.camera.right = 25;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 2000;
    dirLight.shadow.mapSize.set(1024, 1024);
    scene.add(dirLight);

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {
      renderer.setPixelRatio(window.devicePixelRatio);
      const container = document.getElementById(parent);
      renderer.setSize(container!.offsetWidth, container!.offsetHeight);
      camera.aspect = container!.offsetWidth / container!.offsetHeight;
      camera.updateProjectionMatrix();
    }

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();

      renderer.render(scene, camera);
    };

    animate();
  }, [parent]);

  return <div ref={threeSceneRef}></div>;
};

export default ThreeScene;
