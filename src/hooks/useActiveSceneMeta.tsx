import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { sceneMetasMap } from 'scenes/sceneMetas';

export const useActiveSceneMeta = () => {
  const navigate = useNavigate();
  const { scene } = useParams();

  const sceneMeta = sceneMetasMap.get(scene ?? '');

  useEffect(() => {
    scene && !sceneMeta && navigate('/', { replace: true });
  }, [scene]);

  return sceneMeta;
};
