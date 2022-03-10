#define BLEND_ADD 0
float add(float src, float dst) { return min(src + dst, 1.0); }
vec3 add(vec3 src, vec3 dst) { return min(src + dst, vec3(1.0)); }

#define BLEND_AVERAGE 1
vec3 average(vec3 src, vec3 dst) { return (src + dst) / 2.0; }

#define BLEND_COLOR_BURN 2
float colorBurn(float src, float dst) {
  return (dst == 0.0) ? dst : max((1.0 - ((1.0 - src) / dst)), 0.0);
}
vec3 colorBurn(vec3 src, vec3 dst) {
  return vec3(colorBurn(src.r, dst.r), colorBurn(src.g, dst.g),
              colorBurn(src.b, dst.b));
}

#define BLEND_COLOR_DODGE 3
float colorDodge(float src, float dst) {
  return (dst == 1.0) ? dst : min(src / (1.0 - dst), 1.0);
}
vec3 colorDodge(vec3 src, vec3 dst) {
  return vec3(colorDodge(src.r, dst.r), colorDodge(src.g, dst.g),
              colorDodge(src.b, dst.b));
}

#define BLEND_DARKEN 4
float darken(float src, float dst) { return min(src, dst); }
vec3 darken(vec3 src, vec3 dst) {
  return vec3(darken(src.r, dst.r), darken(src.g, dst.g), darken(src.b, dst.b));
}

#define BLEND_DIFFERENCE 5
vec3 difference(vec3 src, vec3 dst) { return abs(src - dst); }

#define BLEND_EXCLUSION 6
vec3 exclusion(vec3 src, vec3 dst) { return src + dst - 2.0 * src * dst; }

#define BLEND_GLOW 7
vec3 glow(vec3 src, vec3 dst) { return reflect(src, dst); }

// BLEND_HARD_LIGHT 8: end of file
// BLEND_HARD_MIX 9: end of file

#define BLEND_LIGHTEN 10
float lighten(float src, float dst) { return max(src, dst); }
vec3 lighten(vec3 src, vec3 dst) {
  return vec3(lighten(src.r, dst.r), lighten(src.g, dst.g),
              lighten(src.b, dst.b));
}

#define BLEND_LINEAR_BURN 11
float linearBurn(float src, float dst) { return max(src + dst - 1.0, 0.0); }
vec3 linearBurn(vec3 src, vec3 dst) {
  return max(src + dst - vec3(1.0), vec3(0.0));
}

#define BLEND_LINEAR_DODGE 12
float linearDodge(float src, float dst) { return min(src + dst, 1.0); }
vec3 linearDodge(vec3 src, vec3 dst) { return min(src + dst, vec3(1.0)); }

#define BLEND_LINEAR_LIGHT 13
float linearLight(float src, float dst) {
  return dst < 0.5 ? linearBurn(src, (2.0 * dst))
                   : linearDodge(src, (2.0 * (dst - 0.5)));
}
vec3 linearLight(vec3 src, vec3 dst) {
  return vec3(linearLight(src.r, dst.r), linearLight(src.g, dst.g),
              linearLight(src.b, dst.b));
}

#define BLEND_MULTIPLY 14
vec3 multiply(vec3 src, vec3 dst) { return src * dst; }

#define BLEND_NEGATION 15
vec3 negation(vec3 src, vec3 dst) {
  return vec3(1.0) - abs(vec3(1.0) - src - dst);
}

#define BLEND_NORMAL 16
vec3 normal(vec3 src, vec3 dst) { return src; }

#define BLEND_OVERLAY 17
float overlay(float src, float dst) {
  return src < 0.5 ? (2.0 * src * dst)
                   : (1.0 - 2.0 * (1.0 - src) * (1.0 - dst));
}
vec3 overlay(vec3 src, vec3 dst) {
  return vec3(overlay(src.r, dst.r), overlay(src.g, dst.g),
              overlay(src.b, dst.b));
}

#define BLEND_PHOENIX 18
vec3 phoenix(vec3 src, vec3 dst) {
  return min(src, dst) - max(src, dst) + vec3(1.0);
}

#define BLEND_PIN_LIGHT 19
float pinLight(float src, float dst) {
  return (dst < 0.5) ? darken(src, (2.0 * dst))
                     : lighten(src, (2.0 * (dst - 0.5)));
}
vec3 pinLight(vec3 src, vec3 dst) {
  return vec3(pinLight(src.r, dst.r), pinLight(src.g, dst.g),
              pinLight(src.b, dst.b));
}

#define BLEND_REFLECT 20
float reflect(float src, float dst) {
  return (dst == 1.0) ? dst : min(src * src / (1.0 - dst), 1.0);
}
vec3 reflect(vec3 src, vec3 dst) {
  return vec3(reflect(src.r, dst.r), reflect(src.g, dst.g),
              reflect(src.b, dst.b));
}

#define BLEND_SCREEN 21
float screen(float src, float dst) { return 1.0 - ((1.0 - src) * (1.0 - dst)); }
vec3 screen(vec3 src, vec3 dst) {
  return vec3(screen(src.r, dst.r), screen(src.g, dst.g), screen(src.b, dst.b));
}

#define BLEND_SOFT_LIGHT 22
float softLight(float src, float dst) {
  return (dst < 0.5)
             ? (2.0 * src * dst + src * src * (1.0 - 2.0 * dst))
             : (sqrt(src) * (2.0 * dst - 1.0) + 2.0 * src * (1.0 - dst));
}
vec3 softLight(vec3 src, vec3 dst) {
  return vec3(softLight(src.r, dst.r), softLight(src.g, dst.g),
              softLight(src.b, dst.b));
}

#define BLEND_SUBTRACT 23
float subtract(float src, float dst) { return max(src + dst - 1.0, 0.0); }
vec3 subtract(vec3 src, vec3 dst) {
  return max(src + dst - vec3(1.0), vec3(0.0));
}

#define BLEND_VIVID_LIGHT 24
float vividLight(float src, float dst) {
  return (dst < 0.5) ? colorBurn(src, (2.0 * dst))
                     : colorDodge(src, (2.0 * (dst - 0.5)));
}
vec3 vividLight(vec3 src, vec3 dst) {
  return vec3(vividLight(src.r, dst.r), vividLight(src.g, dst.g),
              vividLight(src.b, dst.b));
}

#define BLEND_HARD_LIGHT 8
vec3 hardLight(vec3 src, vec3 dst) { return overlay(src, dst); }

#define BLEND_HARD_MIX 9
float hardMix(float src, float dst) {
  return (vividLight(src, dst) < 0.5) ? 0.0 : 1.0;
}
vec3 hardMix(vec3 src, vec3 dst) {
  return vec3(hardMix(src.r, dst.r), hardMix(src.g, dst.g),
              hardMix(src.b, dst.b));
}