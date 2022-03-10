import { useActiveSceneMeta } from 'hooks/useActiveSceneMeta';
import React, { lazy, Suspense, useMemo } from 'react';

export const ControlsContainer = () => {
  const meta = useActiveSceneMeta();

  const ControlsComponent = useMemo(
    () =>
      meta?.controlsComponentPath
        ? lazy(() => import(`/src/${meta.controlsComponentPath}`))
        : undefined,
    [meta?.controlsComponentPath],
  );

  return ControlsComponent ? (
    <Suspense fallback={false}>
      <ControlsComponent uniforms={meta?.uniforms} />
    </Suspense>
  ) : null;
};
