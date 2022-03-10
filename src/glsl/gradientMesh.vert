const float vertDeform = 0.75;
const vec4 activeColors = vec4(0.1, 0.2, 0.3, 1.0);
const vec3 baseColor = vec3(0.1, 0.2, 0.3);
const vec2 globalNoiseFreq = vec2(1.0, 2.0);
const float globalNoiseSpeed = 0.0005;

// deform consts
const float deformIncline = 0.5;
const float offsetTop = -0.5;
const float offsetBottom = -0.5;
const vec2 noiseFreq = vec2(3.0, 4.0);
const float noiseAmp = 2.0;
const float noiseSpeed = 10.0;
const float noiseFlow = 3.0;
const float noiseSeed = 125.0;

uniform float uTime;
uniform vec4 uResolution;

varying vec3 vColor;

#include blend.glsl;
#include noise.glsl;

void main() {
  float time = uTime * globalNoiseSpeed;
  vec2 noiseCoord = uResolution.xy * uv * globalNoiseFreq;
  vec2 st = 1. - uv.xy;

  // Tilting the plane
  //
  // Front-to-back tilt
  float tilt = uResolution.y / 2.0 * uv.y;

  // Left-to-right angle
  float incline = uResolution.x * uv.x / 2.0 * deformIncline;

  // Up-down shift to offset incline
  float offset = uResolution.x / 2.0 * deformIncline * mix(offsetBottom, offsetTop, uv.y);

  // Vertex noise
  float noise = snoise(vec3(
      noiseCoord.x * noiseFreq.x + time * noiseFlow,
    noiseCoord.y * noiseFreq.y,
    time * noiseSpeed + noiseSeed
  )) * noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uv.y), 2.0);
  
  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
      position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  // Vertex color, to be passed to fragment shader
  if (activeColors[0] == 1.) {
      vColor = baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
      if (activeColors[i + 1] == 1.) {
        WaveLayers layer = u_waveLayers[i];
      float noise = smoothstep(
          layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
            noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );
      vColor = blendNormal(vColor, layer.color, pow(noise, 4.));
    }
  }

  // Finish
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}",
    