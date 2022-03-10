float box(in vec2 center, in vec2 size){
    size = vec2(0.5) - size * 0.5;
    
    vec2 uv = smoothstep(
        size,
        size + vec2(0.001),
        center
    );

    uv *= smoothstep(
        size,
        size + vec2(0.001),
        vec2(1.0) - center
    );
    
    return uv.x * uv.y;
}