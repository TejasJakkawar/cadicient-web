import { useEffect, useRef } from "react";
import "./home.css";

interface ConstructionElement {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: number;
}

interface BlueprintLine {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  opacity: number;
  dashOffset: number;
  dashSpeed: number;
}

export const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const constructionElements: ConstructionElement[] = [];
    const blueprintLines: BlueprintLine[] = [];
    const maxElements = 15;
    const maxLines = 25;

    for (let i = 0; i < maxElements; i++) {
      constructionElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.floor(Math.random() * 3),
      });
    }

    for (let i = 0; i < maxLines; i++) {
      blueprintLines.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        endX: Math.random() * canvas.width,
        endY: Math.random() * canvas.height,
        opacity: Math.random() * 0.2 + 0.05,
        dashOffset: Math.random() * 50,
        dashSpeed: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255, 107, 74, 0.1)";
      ctx.lineWidth = 0.5;
      const gridSize = 50;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      blueprintLines.forEach((line) => {
        ctx.strokeStyle = `rgba(255, 107, 74, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([10, 5]);
        ctx.lineDashOffset = line.dashOffset;

        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();

        line.dashOffset -= line.dashSpeed;
      });

      ctx.setLineDash([]);

      constructionElements.forEach((element) => {
        element.x += element.vx;
        element.y += element.vy;
        element.rotation += element.rotationSpeed;

        if (
          element.x < -element.size ||
          element.x > canvas.width + element.size
        )
          element.vx *= -1;
        if (
          element.y < -element.size ||
          element.y > canvas.height + element.size
        )
          element.vy *= -1;

        // Keep elements in bounds
        element.x = Math.max(
          -element.size,
          Math.min(canvas.width + element.size, element.x)
        );
        element.y = Math.max(
          -element.size,
          Math.min(canvas.height + element.size, element.y)
        );

        ctx.save();
        ctx.translate(element.x, element.y);
        ctx.rotate(element.rotation);

        if (element.type === 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${element.opacity})`;
          ctx.fillRect(
            -element.size / 2,
            -element.size / 2,
            element.size,
            element.size
          );
          ctx.strokeStyle = `rgba(255, 107, 74, ${element.opacity * 2})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(
            -element.size / 2,
            -element.size / 2,
            element.size,
            element.size
          );
        } else if (element.type === 1) {
          ctx.beginPath();
          ctx.arc(0, 0, element.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${element.opacity})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(255, 107, 74, ${element.opacity * 2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -element.size / 2);
          ctx.lineTo(-element.size / 2, element.size / 2);
          ctx.lineTo(element.size / 2, element.size / 2);
          ctx.closePath();
          ctx.fillStyle = `rgba(255, 255, 255, ${element.opacity})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(255, 107, 74, ${element.opacity * 2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="animated-canvas" />

      <div className="blueprint-overlay" />

      <div className="construction-elements">
        <div className="crane-arm"></div>
        <div className="crane-arm crane-arm-2"></div>
        <div className="building-progress"></div>
        <div className="building-progress building-progress-2"></div>
      </div>

      <div className="technical-lines">
        <div className="tech-line tech-line-1"></div>
        <div className="tech-line tech-line-2"></div>
        <div className="tech-line tech-line-3"></div>
        <div className="tech-line tech-line-4"></div>
      </div>

      <div className="construction-icon icon-1">⚒</div>
      <div className="construction-icon icon-2">🏗</div>
      <div className="construction-icon icon-3">🔧</div>
      <div className="construction-icon icon-4">📐</div>
      <div className="construction-icon icon-5">🏢</div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            INNOVATIVE CIVIL ENGINEERING SERVICES
          </div>
          <h1 className="hero-title">
            Shaping The Future
            <br />
            Of Infrastructure
          </h1>
          <p className="hero-subtitle">
            Welcome to Cadicient — where your vision meets engineering
            excellence
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Our Services</button>
            <button className="btn-secondary">Consult for free</button>
          </div>
        </div>

        {/* <div className="hero-video">
          <div className="video-container">
            <video className="background-video" autoPlay loop muted playsInline>
              <source
                src="https://cadicient.com//wp-content//uploads//2025//03//Untitled-design-14-1-1.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video-overlay"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
