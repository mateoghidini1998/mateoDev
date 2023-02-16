import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Sphere = () => {
  const numItems = 10; // Número de elementos en la lista de tecnologías
  const items = ['ReactJs', 'React Native', 'NextJs', 'NodeJs', 'MySQL', 'MongoDB', 'Laravel', 'Wordpress', 'GraphQL', 'Docker']; // Lista de tecnologías

  // Función para generar una posición aleatoria dentro de la esfera
  const randomSpherePoint = (radius) => {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return [x, y, z];
  };

  return (
    <Canvas camera={{ position: [5, 5, -5], fov: 75 }}>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial  metalness={0.2} opacity={0.5} transparent />
        {items.map((item, index) => {
          const position = randomSpherePoint(3.8); // Generar una posición aleatoria dentro de la esfera
          return (
            <mesh key={index} position={position}>
              
              <meshStandardMaterial color="#8BC34A"/>
            </mesh>
          );
        })}
        <spotLight position={[10, 15, 10]} angle={0.3} />
      </mesh>
    </Canvas>
  );
};

export default Sphere;
