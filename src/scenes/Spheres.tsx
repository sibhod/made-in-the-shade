import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Mesh, Vector3 } from 'three';

export const Spheres = () => {
  const meshRef = useRef<Mesh>();
  const angleRef = useRef(0);

  useEffect(() => {
    VEC3.random().subScalar(0.5).normalize();
    angleRef.current = Math.PI * 4 * Math.random() - Math.PI * 2;

    return () => {
      // unmount
    };
  }, []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    angleRef.current += delta * 0.75;

    mesh.setRotationFromAxisAngle(VEC3, angleRef.current);
  });

  return (
    <mesh ref={meshRef}>
      <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
      <meshBasicMaterial attach="material" color="purple" wireframe={true} />
    </mesh>
  );
};

const VEC3 = new Vector3();

export default Spheres;
