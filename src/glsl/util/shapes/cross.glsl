#include util/shapes/box.glsl;

float cross(in vec2 center, float size, float width){
    return (
        box(center, vec2(size,width)) +
        box(center, vec2(width,size))
    );
}