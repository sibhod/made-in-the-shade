import React from 'react';

export const Spheres = () => {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
      <meshBasicMaterial attach="material" color="blue" wireframe={true} />
    </mesh>
  );
};

export default Spheres;
