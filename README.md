# :sparkles: Made In The Shade :sparkles:  :sunglasses:

A simple React/R3F app, made to quickly test and demo shaders.  The scenes are defined in `src/scenes/sceneMetas`, lazy loaded on request, and expose basic utility uniforms (`uTime: IUniform<number>, uMouse: IUniform<Vector2>, uResolution: IUniform<Vector4>`).

If you're only working with a fragment shader, then you scene can simple compose a `QuadMesh`. The component recieves props defined as both `ShaderMaterialParameters` and optional `onEnter`, `onFrame'`, `'onExit'` callbacks, shaped as: `(material: ShaderMaterial, state: R3FState) => void;`.

I just started this, so it's very much WIP.

Based upon the excellent [Vite](https://vitejs.dev/), this lovely [Vite boilerplate](https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier), and [R3F](https://github.com/pmndrs/react-three-fiber).

### (Note to self) Demo inspirations:

- anything inspired by this [amazing folio](https://www.clicktorelease.com/code/)
- [twirly balls and colorific](https://tympanus.net/codrops/2021/01/26/twisted-colorful-spheres-with-three-js/)
- [matcap and distortion](https://tympanus.net/codrops/2021/02/03/rotating-loading-animation-of-3d-shapes-with-three-js/)
- [watery distortions](https://tympanus.net/codrops/2019/10/08/creating-a-water-like-distortion-effect-with-three-js/)
- Can I generate patterns like [this in 2d]?(https://stock.adobe.com/images/id/174043177?as_campaign=Freepik&as_content=api&as_audience=idp&tduid=703681f219c142159a4ff9518023f749&as_channel=affiliate&as_campclass=redirect&as_source=arvato) or 3d even??
- [Mesh gradients](https://meshgradient.in/?ref=producthunt)
- these [waves omg](https://stock.adobe.com/images/3d-abstract-wavy-background-with-modern-gradient-colors-motion-sound-wave-vector-illustration-for-banner-flyer-brochure-booklet-presentation-or-websites-design/485473447?asset_id=481528648)
- fun [2-color weirdness](https://as1.ftcdn.net/v2/jpg/04/81/31/02/1000_F_481310202_cpIUT3ISFVZHznlWL1UxI5hQxW2g1Dhy.jpg)
- instanced geometry and [ repetition ](https://t4.ftcdn.net/jpg/04/70/98/65/240_F_470986542_LyCxmiLTTzowLg9mwhQu4B7kmN4YWXmy.jpg)
- [DIAMONDS](https://tympanus.net/codrops/2019/10/29/real-time-multiside-refraction-in-three-steps/)! Faceted colors and patterns.
- tons of cool [post processing effects](https://docs.pmnd.rs/react-postprocessing/introduction)
- Everything [Erica0](https://www.instagram.com/p/CTNbtLVn27e/)
