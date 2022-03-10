# :sparkles: Made In The Shade :sparkles: :sunglasses:

A simple React/R3F app, made to quickly test and demo shaders. The scenes are defined in `src/scenes/sceneMetas`, lazy loaded on request, and expose basic utility uniforms (`uTime: IUniform<number>, uMouse: IUniform<Vector2>, uResolution: IUniform<Vector4>`).

If you're only working with a fragment shader, then you scene can simple compose a `QuadMesh`. The component recieves props defined as both `ShaderMaterialParameters` and optional `onEnter`, `onFrame'`, `'onExit'` callbacks, shaped as: `(material: ShaderMaterial, state: R3FState) => void;`.

I just started this, so it's very much WIP.

Based upon the excellent [Vite](https://vitejs.dev/), this lovely [Vite boilerplate](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier), and [R3F](https://github.com/pmndrs/react-three-fiber).
