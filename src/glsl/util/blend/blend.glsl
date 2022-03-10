#include './modes.glsl'

vec3 blend(int mode, vec3 src, vec3 dst) {
  switch (mode) {
  case BLEND_ADD:
    return add(src, dst);

  case BLEND_AVERAGE:
    return average(src, dst);

  case BLEND_COLOR_BURN:
    return colorBurn(src, dst);

  case BLEND_COLOR_DODGE:
    return colorDodge(src, dst);

  case BLEND_DARKEN:
    return darken(src, dst);

  case BLEND_DIFFERENCE:
    return difference(src, dst);

  case BLEND_EXCLUSION:
    return exclusion(src, dst);

  case BLEND_GLOW:
    return glow(src, dst);

  case BLEND_HARD_LIGHT:
    return hardLight(src, dst);

  case BLEND_HARD_MIX:
    return hardMix(src, dst);

  case BLEND_LIGHTEN:
    return lighten(src, dst);

  case BLEND_LINEAR_BURN:
    return linearBurn(src, dst);

  case BLEND_LINEAR_DODGE:
    return linearDodge(src, dst);

  case BLEND_LINEAR_LIGHT:
    return linearLight(src, dst);

  case BLEND_MULTIPLY:
    return multiply(src, dst);

  case BLEND_NEGATION:
    return negation(src, dst);

  case BLEND_NORMAL:
    return normal(src, dst);

  case BLEND_OVERLAY:
    return overlay(src, dst);

  case BLEND_PHOENIX:
    return phoenix(src, dst);

  case BLEND_PIN_LIGHT:
    return pinLight(src, dst);

  case BLEND_REFLECT:
    return reflect(src, dst);

  case BLEND_SCREEN:
    return screen(src, dst);

  case BLEND_SOFT_LIGHT:
    return softLight(src, dst);

  case BLEND_SUBTRACT:
    return subtract(src, dst);

  case BLEND_VIVID_LIGHT:
    return vividLight(src, dst);
  }

  return vec3(0.0);
}

// Blend util that selects a blend operation based on `mode`,
// and runs a GL_SRC_ALPHA -> GL_ONE_MINUS_SRC_ALPHA alpha blend.
vec4 blend(int mode, vec4 src, vec4 dst) {
  vec3 rgb = blend(mode, src.rgb, dst.rgb);
  return (vec4(rgb, src.a) * src.a + dst * (1.0 - src.a));
}

vec4 blend(int mode, vec4 c0, vec4 c1, vec4 c2) {
  return blend(mode, c0, blend(mode, c1, c2));
}

vec4 blend(int mode, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {
  return blend(mode, c0, c1, blend(mode, c2, c3));
}

vec4 blend(int mode, vec4 c0, vec4 c1, vec4 c2, vec4 c3, vec4 c4) {
  return blend(mode, c0, c1, c2, blend(mode, c3, c4));
}

vec4 blend(int mode, vec4 c0, vec4 c1, vec4 c2, vec4 c3, vec4 c4, vec4 c5) {
  return blend(mode, c0, c1, c2, c3, blend(mode, c4, c5));
}
