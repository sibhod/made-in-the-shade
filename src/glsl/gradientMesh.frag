const float shadowPower = 5.0;
const float darkenTop = 1.0;

uniform vec4 uResolution;

varying vec3 vColor;

void main() {
  vec3 color = vColor;

  if (darkenTop == 1.0) {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, shadowPower) * 0.4;
  }

  gl_FragColor = vec4(color, 1.0);
}
