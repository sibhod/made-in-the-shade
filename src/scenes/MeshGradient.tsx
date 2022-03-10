import fragmentShader from 'glsl/gradientMesh.frag';
import vertexShader from 'glsl/gradientMesh.vert';
import { ShaderMaterial } from 'materials/ShaderMaterial';
import React, { useEffect, useRef } from 'react';
import { Mesh } from 'three';

export const MeshGradient = () => {
  const meshRef = useRef<Mesh>();

  useEffect(() => {
    return () => {
      // unmount
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <planeBufferGeometry attach="geometry" args={[12, 12, 64, 64]} />
      <ShaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
};

export default MeshGradient;
