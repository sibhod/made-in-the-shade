import { RootState, useFrame, useThree } from '@react-three/fiber';
import defaultVertexShader from 'glsl/passthrough.vert';
import React, { useCallback, useEffect, useState } from 'react';
import { ShaderMaterial as ShaderMaterialImpl, ShaderMaterialParameters } from 'three';

export type ShaderEvent = 'onEnter' | 'onFrame' | 'onExit';
export type ShaderEventHandler = (material: ShaderMaterialImpl, state: RootState) => void;

export type ShaderMaterialProps = ShaderMaterialParameters & {
  /**
   * @default 'ShaderMaterial'
   */
  name?: string;
  fragmentShader: string;
} & { [K in ShaderEvent]?: ShaderEventHandler };

export const ShaderMaterial = (props: ShaderMaterialProps) => {
  const state = useThree();

  const [material] = useState<ShaderMaterialImpl>(() => {
    const {
      name = 'ShaderMaterial',
      vertexShader = defaultVertexShader,
      onEnter,
    } = props;

    const m = new ShaderMaterialImpl({
      ...props,
      name,
      vertexShader,
    });

    onEnter?.(m, state);

    return m;
  });

  const { onFrame, onExit } = props;

  useEffect(
    () => () => {
      onExit?.(material, state);
      material.dispose();
    },
    [],
  );

  const handleFrame = useCallback(
    (state: RootState) => onFrame?.(material, state),
    [onFrame],
  );

  useFrame(handleFrame);

  return <primitive attach="material" object={material} />;
};
