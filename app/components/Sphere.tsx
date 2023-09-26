import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface SphereProps {
    parent: string;
  }

const Sphere: React.FC<SphereProps> = ({ parent }) => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const helper = new THREE.GridHelper( 1000, 40, 0x303030, 0x303030 )
    helper.position.y = -40

    //scene.add(helper)

    // Create camera
    var camera = new THREE.PerspectiveCamera( 35, 1.2, 1, 1000 )
    camera.position.set( 0, 0, 0 )
    camera.position.z = 5

    // Create renderer
    const container = document.getElementById(parent)
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container!.offsetWidth, container!.offsetHeight)

    renderer.clear()
    renderer.setPixelRatio( window.devicePixelRatio )
    container!.appendChild(renderer.domElement)
    camera.aspect =container!.offsetWidth/container!.offsetHeight
    camera.updateProjectionMatrix()
    sphereRef.current!.innerHTML = ''
    sphereRef.current!.appendChild( renderer.domElement )
    renderer.setClearColor( 0xffffff, 0)
    renderer.setPixelRatio( window.devicePixelRatio )

    if (sphereRef.current) {
      sphereRef.current.appendChild(renderer.domElement);
    }

    var insidecolor = 0x000000
    var linecolor = 0xFFFFFF

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enabled = false
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = (Math.random() * 3) - 1.5;
    scene.userData.controls = controls //this allowed continuing scrolling div when in render view
    controls.minDistance = 400 //50
    controls.maxDistance = 800 //400

    const loadingManager = new THREE.LoadingManager();
    const progressBar = document.getElementById('progress-bar');

    

    // Create a sphere geometry
    const sphereg = new THREE.SphereGeometry( 90, 15, 17, 0, 2*Math.PI, 0, 5.7428 )
    const sphereM = new THREE.MeshBasicMaterial(  { color: insidecolor } )
    const spheremesh = new THREE.Mesh( sphereg, sphereM )

    const material = new THREE.MeshBasicMaterial( { color: linecolor , wireframe: true, wireframeLinewidth: 1.3 } )
    const sphere = new THREE.Mesh( sphereg, material )
    sphere.scale.set(1.1, 1.1, 1.1)

    scene.add( sphere )
    scene.add( spheremesh )

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 )
    hemiLight.position.set( 0, 100, 0 )
    scene.add( hemiLight )

    const dirLight = new THREE.DirectionalLight( 0xffffff )
    dirLight.position.set( - 0, 40, 50 )
    dirLight.castShadow = true
    dirLight.shadow.camera.top = 50
    dirLight.shadow.camera.bottom = - 25
    dirLight.shadow.camera.left = - 25
    dirLight.shadow.camera.right = 25
    dirLight.shadow.camera.near = 0.1
    dirLight.shadow.camera.far = 200
    dirLight.shadow.mapSize.set( 1024, 1024 )
    scene.add( dirLight )

    window.addEventListener( 'resize', onWindowResize, false )

    function onWindowResize(){
        renderer.setPixelRatio( window.devicePixelRatio )
        const container = document.getElementById(parent)
        renderer.setSize(container!.offsetWidth, container!.offsetHeight)
        camera.aspect =container!.offsetWidth/container!.offsetHeight
        camera.updateProjectionMatrix()
    }

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={sphereRef}></div>;
};

export default Sphere;