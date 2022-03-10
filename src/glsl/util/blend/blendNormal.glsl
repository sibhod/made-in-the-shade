vec4 blendNormal(vec4 src, vec4 dst){
  float srcA = src.a;
  return (src * srcA) + (dst * (1.0 - srcA));
}
