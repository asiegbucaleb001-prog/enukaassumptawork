// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
});

// Scroll-triggered animations
const sections = document.querySelectorAll('section, .card');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < trigger){
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Particle background (soft floating crosses like medical care symbols)
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for(let i=0;i<60;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: 8+Math.random()*6,
    speedX: (Math.random()-.5)*0.4,
    speedY: (Math.random()-.5)*0.4,
    opacity: 0.3+Math.random()*0.5
  });
}

function drawCross(x,y,size,opacity){
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = '#06d6a0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x-size/2,y);
  ctx.lineTo(x+size/2,y);
  ctx.moveTo(x,y-size/2);
  ctx.lineTo(x,y+size/2);
  ctx.stroke();
  ctx.restore();
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += p.speedX;
    p.y += p.speedY;
    if(p.x<0||p.x>canvas.width) p.speedX*=-1;
    if(p.y<0||p.y>canvas.height) p.speedY*=-1;
    drawCross(p.x,p.y,p.size,p.opacity);
  });
  requestAnimationFrame(animate);
}
animate();

// Mobile nav toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});
