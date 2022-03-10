uniform int uBlendMode;
uniform vec4 uResolution;
uniform float uTime;

varying vec2 vUv;

#include 'util/blend/blend';
#include 'util/shapes/circle';

const vec3 blue = vec3(0.286, 0.95, 1.0);
const vec3 pink = vec3(1.0, 0.592, 0.776);
const vec3 purple = vec3(0.192, 0.05, 0.345);
const vec3 yellow = vec3(1.0, 0.894, 0.16);
const vec3 mint = vec3(0.69, 1.0, 0.889);
const vec3 fusia = vec3(0.535, 0.194, 0.9);

float coslerp(float min, float max, float t) {
  return mix(min, max, cos(t) * 0.5 + 0.5);
}

float sinlerp(float min, float max, float t) {
  return mix(min, max, sin(t) * 0.5 + 0.5);
}

float lerp(vec4 val, float t) {
  float st = t * val.z;
  return (val.w > 0.5 ? sinlerp(val.x, val.y, st) : coslerp(val.x, val.y, st));
}

float clamp01(float x) { return clamp(x, 0.0, 1.0); }

vec3 palette[6] = vec3[](blue, purple, yellow, mint, fusia, pink);

struct PolkaDot {
  vec3 position;
  vec4 size;
  vec4 alpha;
  vec4 animation;
};

PolkaDot dot1 =
    PolkaDot(vec3(-30.0, 0.0, -0.45), vec4(0.15, 0.125, 0.29, 1.0),
             vec4(0.55, 0.65, 0.779, 0.0), vec4(1.2, 0.779, -0.6, 0.0));

PolkaDot dot2 =
    PolkaDot(vec3(30.0, 0.0, 0.035), vec4(0.0125, 0.15, 0.30, 0.0),
             vec4(0.45, 0.35, 0.979, 1.0), vec4(-3.0, 6.5, -0.23, 1.0));

PolkaDot dot3 =
    PolkaDot(vec3(0.0, -20.0, 0.05), vec4(0.1, 0.05, -0.14, 0.0),
             vec4(0.25, 0.5, 1.979, 1.0), vec4(8.0, -3.5, 0.33, 1.0));

PolkaDot dot4 =
    PolkaDot(vec3(40.0, 0.0, 0.15), vec4(0.05, 0.2, 0.05, 1.0),
             vec4(0.65, 0.25, 2.979, 0.0), vec4(1.0, 1.0, -0.93, 0.0));

PolkaDot dot5 =
    PolkaDot(vec3(10.0, 10.0, 0.35), vec4(0.05, 0.25, -1.1, 0.0),
             vec4(0.35, 0.65, -0.3, 1.0), vec4(0.25, 0.65, 0.7, 0.0));

PolkaDot dots[5] = PolkaDot[](
    PolkaDot(vec3(8.0, -6.0, -0.2), vec4(0.15, 0.5, 1.3, 0.0),
             vec4(0.15, 0.85, 1.3, 1.0), vec4(1.2, 0.779, -0.4, 1.0)),

    PolkaDot(vec3(-5.0, 2.0, 0.35), vec4(0.05, 0.35, -0.7, 0.0),
             vec4(0.35, 0.65, -0.3, 0.0), vec4(0.25, 0.65, 0.43, 1.0)),

    PolkaDot(vec3(2.9, -3.0, -0.5), vec4(0.1, 0.15, -0.44, 0.0),
             vec4(0.25, 0.75, 0.979, 1.0), vec4(2.0, -3.5, 0.33, 1.0)),

    PolkaDot(vec3(-10.0, 8.0, 0.55), vec4(0.15, 0.2, 0.15, 1.0),
             vec4(0.65, 0.35, 1.979, 0.0), vec4(1.0, 1.5, -0.43, 0.0)),

    PolkaDot(vec3(3.0, 1.0, -0.35), vec4(0.01, 0.6, 0.3, 0.0),
             vec4(0.45, 0.65, 0.979, 1.0), vec4(-2.25, 1.5, -0.53, 1.0)));

const float colorCycleTime = 10.0;
const float colorFadeTime = 2.0;

vec3 getSwatch(int i) {
  int offset = i + int(floor(uTime / colorCycleTime));
  float modTime = mod(uTime, colorCycleTime);

  return mix(palette[offset % 6], palette[(offset + 1) % 6],
             smoothstep(0.0, colorFadeTime, modTime));
}

vec4 renderDot(int i, PolkaDot dot) {
  float time = uTime;
  vec2 res = uResolution.xy;
  vec2 uv = gl_FragCoord.xy;
  vec2 ctr = res * 0.5;

  float ati = time * dot.animation.z;
  vec2 trs = (dot.animation.w > 0.5 ? vec2(cos(ati), sin(ati))
                                    : vec2(sin(ati), cos(ati))) *
             dot.animation.xy * res;

  vec2 pos = ctr + dot.position.xy + trs * dot.position.z;
  float rad = lerp(dot.size, time) * res.y;
  float alp = lerp(dot.alpha, time);

  return vec4(getSwatch(i), alp * circle(uv, pos, rad));
}

void main() {
  vec4 color = blend(uBlendMode, renderDot(0, dot1), renderDot(1, dot2),
                     renderDot(2, dot3), renderDot(3, dot4), renderDot(4, dot5),
                     vec4(getSwatch(5), 1.0));

  color = blend(uBlendMode, renderDot(0, dots[0]), renderDot(1, dots[1]),
                renderDot(2, dots[2]), renderDot(3, dots[3]),
                renderDot(4, dots[4]), color);

  gl_FragColor = vec4(color.rgb, 1.0);
}