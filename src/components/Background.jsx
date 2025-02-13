import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const fireworks = useRef([]);
  let lastMouseMove = 0;
  let mouseX = null, mouseY = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    class Particle {
      constructor(x, y, size, speedX, speedY, color, lifespan = null) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.lifespan = lifespan;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Devorga tegsa yo‘nalishini o‘zgartirish
        if (this.x - this.size <= 0 || this.x + this.size >= canvas.width) {
          this.speedX *= -1;
        }
        if (this.y - this.size <= 0 || this.y + this.size >= canvas.height) {
          this.speedY *= -1;
        }

        if (this.lifespan !== null) this.lifespan--;

        // Yorug‘lik effekti
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < 50; i++) {
        let size = Math.random() * 4 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 1.2;
        let speedY = (Math.random() - 0.5) * 1.2;
        particles.current.push(
          new Particle(x, y, size, speedX, speedY, "rgba(59, 130, 246, 0.8)")
        );
      }
    };

    const createFirework = (x, y) => {
      const numParticles = 20;
      const colors = [
        "#3b82f6", "#1e90ff", "#00bfff", "#4682b4",
        "#87CEFA", "#5F9EA0", "#1E3A8A", "#1E40AF"
      ];

      for (let i = 0; i < numParticles; i++) {
        let size = Math.random() * 3 + 2;
        let angle = Math.random() * Math.PI * 2;
        let speed = Math.random() * 3 + 1;

        let speedX = Math.cos(angle) * speed;
        let speedY = Math.sin(angle) * speed * 0.8;

        let color = colors[Math.floor(Math.random() * colors.length)];

        fireworks.current.push(new Particle(x, y, size, speedX, speedY, color, 50));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Tozalash

      particles.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      fireworks.current = fireworks.current.filter((firework) => firework.lifespan > 0);
      fireworks.current.forEach((firework) => {
        firework.update();
        firework.draw();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const now = Date.now();
      if (now - lastMouseMove > 30) {
        createFirework(event.clientX, event.clientY);
        lastMouseMove = now;
      }
    };

    initParticles();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-10" />;
};

export default ParticleBackground;
