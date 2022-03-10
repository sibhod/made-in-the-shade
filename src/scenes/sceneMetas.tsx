import { BlendMode } from 'materials/BlendMode';
import { SceneMeta } from 'scenes/SceneMeta';

export const sceneMetas: SceneMeta[] = [
  {
    name: 'Blend Modes',
    route: 'blend-modes',
    controlsComponentPath: 'containers/BlendModeSelect',
    componentPath: 'scenes/BlendModes',
    uniforms: { uBlendMode: { value: BlendMode.NORMAL } },
  },
  {
    name: 'Color Shift',
    route: 'color-shift',
    componentPath: 'scenes/ColorShift',
  },
  {
    name: 'Spheres',
    route: 'spheres',
    componentPath: 'scenes/Spheres',
  },
  {
    name: 'Mesh Gradient',
    route: 'mesh-gradient',
    componentPath: 'scenes/MeshGradient',
  },
];

/**
 * Util indexing sceneMetas by route and name, for easy reference.
 */
export const sceneMetasMap = new Map<string, SceneMeta>(
  sceneMetas.flatMap((scene) => [
    [scene.name, scene],
    [scene.route, scene],
  ]),
);
