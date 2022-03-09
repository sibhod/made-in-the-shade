import { useSceneContext } from 'contexts/SceneContext';
import React, { Suspense } from 'react';
import { LoadingScene } from 'scenes/LoadingScene';

export const SuspenseScene = () => {
  const { scene: SceneComponent } = useSceneContext();

  return (
    <Suspense fallback={<LoadingScene />}>
      {SceneComponent && <SceneComponent />}
    </Suspense>
  );
};
