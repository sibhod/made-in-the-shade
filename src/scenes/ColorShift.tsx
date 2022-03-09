import { QuadMesh } from 'components/QuadMesh';
import colorShiftFragmentShader from 'glsl/colorShift.frag';
import React from 'react';

export const ColorShift = () => {
  return <QuadMesh name="ColorShift" fragmentShader={colorShiftFragmentShader} />;
};

export default ColorShift;
