import { ScreenQuad } from '@react-three/drei';
import { useSceneContext } from 'contexts/SceneContext';
import { ShaderMaterial, ShaderMaterialProps } from 'materials/ShaderMaterial';
import React from 'react';

export const QuadMesh = (props: ShaderMaterialProps) => {
  const { uniforms } = useSceneContext();
  return (
    <ScreenQuad>
      <ShaderMaterial {...props} uniforms={{ ...uniforms, ...(props.uniforms ?? {}) }} />
    </ScreenQuad>
  );
};
