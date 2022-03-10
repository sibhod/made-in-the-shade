float circle2(in vec2 center, in float radius, in float aspect){
    vec2 dist = center - vec2(0.5, 0.5);
	  return 1.0 - smoothstep(radius-(radius*0.01),
                       radius+(radius*0.01),
                       dot(dist,dist)*4.0);
}

/**
 * Draw a circle at vec2 `pos` with radius `rad` and
 * color `color`.
 */
float circle(vec2 uv, vec2 pos, float rad) {
	float d = length(pos - uv) - rad;
	return 1.0 - clamp(d, 0.0, 1.0);
}

