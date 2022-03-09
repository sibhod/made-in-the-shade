import React from 'react';

export const MeshGradient = () => {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
      <meshBasicMaterial attach="material" color="purple" wireframe={true} />
    </mesh>
  );
};

export default MeshGradient;
