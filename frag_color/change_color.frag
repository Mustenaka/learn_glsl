#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main(){
    float r=abs(sin(u_time));
    float g=abs(cos(u_time));
    float b=abs(cos(u_time));
    gl_FragColor=vec4(r,g,b,1.);
}
