import { IUniform } from 'three';

export type SceneMeta = {
  readonly name: string;
  readonly route: string;
  readonly controlsComponentPath?: string;
  readonly componentPath: string;
  readonly uniforms?: { [uniform: string]: IUniform } | undefined;
};
