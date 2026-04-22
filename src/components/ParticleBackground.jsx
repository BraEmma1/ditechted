import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect capabilities and settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Simple mobile detection (touch screens or small width)
    const isMobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window);

    // Config
    const PARTICLE_COUNT = isMobile ? 35 : 60;
    const MOUSE_RADIUS = 180;

    let width = 0;
    let height = 0;
    let particles = [];
    let mouse = { x: null, y: null };
    let animationFrameId;

    // Elegant tech colors
    const colors = [
      'rgba(0, 199, 252, 0.4)',  // Brand Accent (Cyan)
      'rgba(0, 113, 197, 0.3)',  // Brand Primary (Blue)
      'rgba(148, 163, 184, 0.2)', // Slate-400 (Neutral)
    ];

    // Resize handler
    const resize = () => {
      // Get parent container dimensions
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      
      // Handle high DPI displays for crisp rendering
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.8;
        
        // Slower base speed for an elegant, non-distracting feel
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        
        // Weight affects how much it moves from cursor
        this.weight = Math.random() * 2 + 1;
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Mix of shapes: 0 = circle, 1 = rect, 2 = glowing node
        this.shape = Math.floor(Math.random() * 3);
      }

      draw() {
        ctx.beginPath();
        if (this.shape === 0) {
          // Circle
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else if (this.shape === 1) {
          // Subtle Square
          ctx.rect(this.x, this.y, this.size * 1.8, this.size * 1.8);
          ctx.fillStyle = this.color;
          ctx.fill();
        } else {
          // Glowing Node
          ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 12;
          ctx.shadowColor = this.color;
          ctx.fill();
          ctx.shadowBlur = 0; // reset for next particle
        }
      }

      update() {
        if (!prefersReducedMotion) {
          // Ambient movement
          this.x += this.vx;
          this.y += this.vy;

          // Wrap around edges for infinite field effect
          if (this.x < -10) this.x = width + 10;
          if (this.x > width + 10) this.x = -10;
          if (this.y < -10) this.y = height + 10;
          if (this.y > height + 10) this.y = -10;
        }

        // Desktop Interactive Mouse Effect
        if (!isMobile && mouse.x != null && !prefersReducedMotion) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < MOUSE_RADIUS) {
            // Gentle repulsion with easing
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            
            // Push away slowly
            const moveX = forceDirectionX * force * this.weight * 0.6;
            const moveY = forceDirectionY * force * this.weight * 0.6;
            
            this.x -= moveX;
            this.y -= moveY;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Event Listeners
    window.addEventListener('resize', resize);
    
    // Track mouse over the hero section
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    if (!isMobile) {
      canvas.parentElement.addEventListener('mousemove', handleMouseMove);
      canvas.parentElement.addEventListener('mouseleave', handleMouseOut);
    }

    // Start
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (!isMobile && canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseOut);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-70 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
