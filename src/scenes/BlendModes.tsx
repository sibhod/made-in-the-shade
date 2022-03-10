import { QuadMesh, QuadShaderMesh } from 'components/QuadMesh';
import fragmentShader from 'glsl/blendModes.frag';
import React, { useRef } from 'react';

export const BlendModes = () => {
  const meshRef = useRef<QuadShaderMesh>(null!);

  return <QuadMesh name="BlendModes" fragmentShader={fragmentShader} ref={meshRef} />;
};

export default BlendModes;
