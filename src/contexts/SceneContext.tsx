import { useFrame } from '@react-three/fiber';
import React, {
  ComponentType,
  createContext,
  lazy,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { SceneMeta } from 'scenes/SceneMeta';
import { IUniform, Vector2, Vector4 } from 'three';

export interface SceneContextInterface {
  meta?: SceneMeta;
  scene?: ComponentType;
  uniforms: {
    uTime: IUniform<number>;
    uMouse: IUniform<Vector2>;
    uResolution: IUniform<Vector4>;
  };
}

export const SceneContext = createContext<SceneContextInterface>(null!);

type Props = {
  children?: ReactNode;
  meta?: SceneMeta;
};

export const SceneContextProvider = ({ children, meta }: Props) => {
  const scene = useMemo(
    () => meta && lazy(() => import(`/src/${meta.componentPath}`)),
    [meta],
  );

  const [uniforms] = useState<SceneContextInterface['uniforms']>({
    uTime: { value: 0 },
    uMouse: { value: new Vector2() },
    uResolution: { value: new Vector4() },
  });

  useFrame(({ clock, mouse, size }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uMouse.value.copy(mouse);
    uniforms.uResolution.value.set(
      size.width,
      size.height,
      1 / size.width,
      1 / size.height,
    );
  });

  return (
    <SceneContext.Provider value={{ meta, scene, uniforms }}>
      {children}
    </SceneContext.Provider>
  );
};

export const useSceneContext = () => useContext(SceneContext);
