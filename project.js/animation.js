const canvas = document getElementByld("canvas");
const ctx= canvas getContext("2d");
const particles = [];
const total = 1800;
let time = 0;
function resizeCanvas() {
    canvas width= window.innerWidth;
    canvas height= window.innerHeight;
}
class particles {
    constructor(x,y) {
        this.baseX = x;
        this.baseY = y;
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*1.8 + 0.8;
        this.angle = Math.random()*Math.PI*2;
        this.speed = Math.random()* 0.015 + 0.008;
        this.alpha = Math.random()* 0.5 + 0.5; 
}
update() {
    this.angle += this.speed;
    const beat = 1 + Math.sin(time*0.05)*0.025;
    const centerX = canvas.width/2;
    const centerY = canvas.height/2;
    const moveX = Math.cos(this.angle)*2;
    const moveY = Math.sin(this.angle)*2;
    const targetX = centerX +
        (this.baseX - centerX)*beat + moveX;
    const targetY = centerY +
         (this.baseY - centerY)* beat + moveY;
    this.x += (targetX - this.x)* 0.010;
    this.y += (targetY - this.y)* 0.010;
}
draw() {
    ctx.beginPath();
    ctx.activeViewTransition(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle = `rgba(255,40,85,${this.alpha})`;
    ctx.fill();
}
function isInsideHeart(x,y) {
    return {
        Math.pow(x*x+y*y-1,3)-
        
    }
}