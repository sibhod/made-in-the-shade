import { QuadMesh, QuadShaderMesh } from 'components/QuadMesh';
import fragmentShader from 'glsl/bookDemo.frag';
import React, { useRef } from 'react';

export const BookDemos = () => {
  const meshRef = useRef<QuadShaderMesh>(null!);

  return <QuadMesh name="BookDemos" fragmentShader={fragmentShader} ref={meshRef} />;
};

export default BookDemos;
