import { SceneMeta } from 'scenes/SceneMeta';

export const sceneMetas: SceneMeta[] = [
  {
    name: 'Book of Shaders',
    route: 'book-of-shaders',
    componentPath: 'scenes/BookDemos',
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
