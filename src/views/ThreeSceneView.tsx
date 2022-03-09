import { CanvasCard } from 'components/CanvasCard';
import { InsetFlexContainer } from 'components/InsetContainer';
import { SceneContextProvider } from 'contexts/SceneContext';
import { useActiveSceneMeta } from 'hooks/useActiveSceneMeta';
import React from 'react';
import { SuspenseScene } from 'scenes/SuspenseScene';

export const ThreeSceneView = () => {
  const meta = useActiveSceneMeta();

  return (
    <InsetFlexContainer>
      <CanvasCard width={800} height={600}>
        <SceneContextProvider meta={meta}>
          <SuspenseScene />
        </SceneContextProvider>
      </CanvasCard>
    </InsetFlexContainer>
  );
};
