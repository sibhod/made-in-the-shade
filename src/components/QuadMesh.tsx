import { ScreenQuad } from '@react-three/drei';
import { useSceneContext } from 'contexts/SceneContext';
import { ShaderMaterial, ShaderMaterialProps } from 'materials/ShaderMaterial';
import React, { forwardRef } from 'react';
import { BufferGeometry, Mesh, ShaderMaterial as ShaderMaterialImpl } from 'three';

export type QuadShaderMesh = Mesh<BufferGeometry, ShaderMaterialImpl>;

export const QuadMesh = forwardRef<QuadShaderMesh, ShaderMaterialProps>(
  (props, forwardedRef) => {
    const { uniforms } = useSceneContext();
    console.log('forwardedRef', forwardedRef);
    return (
      <ScreenQuad ref={forwardedRef}>
        <ShaderMaterial
          {...props}
          uniforms={{ ...uniforms, ...(props.uniforms ?? {}) }}
        />
      </ScreenQuad>
    );
  },
);
