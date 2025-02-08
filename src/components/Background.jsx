import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particles = [];
  const fireworks = [];
  let lastMouseMove = 0;
  let mouseX = null, mouseY = null; // Kursor koordinatalari

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

        // Parallax effekt (scroll yoki kursorga bog‘liq harakat)
        if (mouseX !== null && mouseY !== null) {
          let dx = this.x - mouseX;
          let dy = this.y - mouseY;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            this.speedX += dx * 0.005;
            this.speedY += dy * 0.005;
          }
        }

        if (this.lifespan !== null) {
          this.lifespan -= 1;
        }

        // Chegaraga yetganda teskari harakat
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;

        // Glow (yorug‘lik effekti)
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;

        ctx.fill();
        ctx.closePath();
      }
    }

    function initBackgroundParticles() {
      for (let i = 0; i < 50; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let speedX = (Math.random() - 0.5) * 2;
        let speedY = (Math.random() - 0.5) * 2;
        particles.push(
          new Particle(x, y, size, speedX, speedY, "rgba(59, 130, 246, 0.7)")
        );
      }
    }

    function createFirework(x, y) {
      for (let i = 0; i < 15; i++) {
        let size = Math.random() * 4 + 2;
        let speedX = (Math.random() - 0.5) * 6;
        let speedY = (Math.random() - 0.5) * 6;
        let colors = [
          "rgba(59, 130, 246, 1)",
          "rgba(30, 144, 255, 1)",
          "rgba(0, 191, 255, 1)",
          "rgba(70, 130, 180, 1)",
          "rgba(100, 149, 237, 1)",
        ];
        let color = colors[Math.floor(Math.random() * colors.length)];
        fireworks.push(new Particle(x, y, size, speedX, speedY, color, 50));
      }
    }

    function animate() {
      // Parallax effekti uchun sahifani skroll qilishda zarralarni harakatlantirish
      let scrollOffset = window.scrollY * 0.1;

      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.y += scrollOffset; // Parallax effekti
        particle.update();
        particle.draw();
      });

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].draw();
        if (fireworks[i].lifespan <= 0) {
          fireworks.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    }

    const handleMouseDown = (event) => {
      createFirework(event.clientX, event.clientY);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      
      const now = Date.now();
      if (now - lastMouseMove > 20) { // Juda tez harakatni ham sezadi
        createFirework(event.clientX, event.clientY);
        lastMouseMove = now;
      }
    };

    const handleScroll = () => {
      // Sahifa siljinganda zarralarni harakatlantirish
      particles.forEach((particle) => {
        particle.y += window.scrollY * 0.02;
      });
    };

    initBackgroundParticles();
    animate();

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
