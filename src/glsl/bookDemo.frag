uniform vec4 uResolution;
uniform float uTime;

varying vec2 vUv;

#include util/blend/blendNormal.glsl;
#include util/shapes/circle.glsl;

const vec3 blue = vec3(0.286, 0.95, 1.0);
const vec3 pink = vec3(1.0, 0.592, 0.776);
const vec3 purple = vec3(0.192, 0.05, 0.345);
const vec3 mint = vec3(0.9019, 1.0, 0.968);
const vec3 r = vec3(1.0, 0.0, 0.0);
const vec3 g = vec3(0.0, 1.0, 0.0);
const vec3 b = vec3(0.0, 0.0, 1.0);
const vec3 white = vec3(1.0, 1.0, 1.0);

float coslerp(float min, float max, float t) {
  return mix(min, max, cos(t) * 0.5 + 0.5);
}

float sinlerp(float min, float max, float t) {
  return mix(min, max, sin(t) * 0.5 + 0.5);
}

float clamp01(float x) {
  return clamp(x, 0.0, 1.0);
}

vec3 normal(vec3 src, vec3 dst, float opacity) {
	return (src * opacity) + dst * (1.0 - opacity);
}

void main() {
  float aspect = uResolution.x / uResolution.y;

  vec2 translate1 = vec2(cos(uTime),sin(uTime)) * uResolution.xy;
  float timeInv = -uTime * 1.33;
  vec2 translate2 = vec2(cos(timeInv),sin(timeInv)) * uResolution.xy;

  vec2 st = uResolution.xy * 0.5;

  vec2 c1pos = st - vec2(30.0, 0.0) - translate1 * 0.45;
  float c1rad = sinlerp(0.15, 0.25, uTime * 2.5) * uResolution.y;
  float c1 = circle(gl_FragCoord.xy, c1pos, c1rad);
  float c1a = c1 * sinlerp(0.55, 0.85, uTime * 0.779);

  vec2 c2pos = st + vec2(30.0, 0.0) + translate2 * 0.35;
  float c2rad = coslerp(0.05, 0.25, uTime * 3.0 )* uResolution.y;
  float c2 = circle(gl_FragCoord.xy, c2pos, c2rad);
  float c2a = c2 * coslerp(0.65, 0.95, uTime * 0.979);

  vec3 color = normal(blue, pink, c1a);
  color = normal(purple, color, c2a);

  gl_FragColor = vec4(color, 1.0);
}