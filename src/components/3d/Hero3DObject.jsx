import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, Zap, Star, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Hero3DObject() {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    // 2. WebGL Renderer with Alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Cinematic Ambient + Dual Colored Point Lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const orangeLight = new THREE.PointLight(0xff6a00, 4, 20);
    orangeLight.position.set(4, 3, 5);
    scene.add(orangeLight);

    const amberLight = new THREE.PointLight(0xf59e0b, 3, 20);
    amberLight.position.set(-4, -2, 4);
    scene.add(amberLight);

    const rimLight = new THREE.PointLight(0xffffff, 2, 15);
    rimLight.position.set(0, 5, -3);
    scene.add(rimLight);

    // 4. Main 3D Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // A. Glowing Inner Radiant Core Sphere
    const coreGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x110803,
      emissive: 0xff5500,
      emissiveIntensity: 0.7,
      roughness: 0.1,
      metalness: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // B. Geometric Wireframe Cage (Icosahedron)
    const cageGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const cageMaterial = new THREE.MeshStandardMaterial({
      color: 0xff7a1a,
      emissive: 0xff6a00,
      emissiveIntensity: 0.6,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    mainGroup.add(cageMesh);

    // C. Gyroscopic Ring 1 (Horizontal Torus)
    const ring1Geo = new THREE.TorusGeometry(2.15, 0.035, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xffaa33,
      emissive: 0xff6a00,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    mainGroup.add(ring1Mesh);

    // D. Gyroscopic Ring 2 (Orbital Cross Torus)
    const ring2Geo = new THREE.TorusGeometry(2.45, 0.03, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xff8800,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    mainGroup.add(ring2Mesh);

    // E. Glowing Node Spheres on the Outer Ring
    const nodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xff6a00,
      emissiveIntensity: 1.5,
    });

    const nodes = [];
    const nodeCount = 5;
    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      mainGroup.add(node);
      nodes.push(node);
    }

    // F. Swirling Stardust Particle Field (200 particles)
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 1.6 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Gradient color from orange to gold to white
      if (i % 3 === 0) {
        colors[i3] = 1.0; colors[i3 + 1] = 0.42; colors[i3 + 2] = 0.0; // Orange
      } else if (i % 3 === 1) {
        colors[i3] = 1.0; colors[i3 + 1] = 0.8; colors[i3 + 2] = 0.2; // Gold
      } else {
        colors[i3] = 1.0; colors[i3 + 1] = 1.0; colors[i3 + 2] = 1.0; // Bright white
      }
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // 5. Mouse Interaction Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Ambient continuous rotations
      cageMesh.rotation.y = elapsedTime * 0.25;
      cageMesh.rotation.x = elapsedTime * 0.15;

      coreMesh.rotation.y = -elapsedTime * 0.2;

      ring1Mesh.rotation.z = elapsedTime * 0.35;
      ring2Mesh.rotation.x = -elapsedTime * 0.3;
      ring2Mesh.rotation.y = elapsedTime * 0.2;

      particleSystem.rotation.y = elapsedTime * 0.08;
      particleSystem.rotation.z = elapsedTime * 0.05;

      // Orbiting nodes around ring 1
      nodes.forEach((node, idx) => {
        const angle = elapsedTime * 0.8 + (idx * Math.PI * 2) / nodeCount;
        const radius = 2.15;
        node.position.x = Math.cos(angle) * radius;
        node.position.y = Math.sin(angle) * radius * Math.cos(Math.PI / 3);
        node.position.z = Math.sin(angle) * radius * Math.sin(Math.PI / 3);
      });

      // Mouse Parallax Lerp
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;

      // Gentle floating bob
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] flex items-center justify-center select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Radiant Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-gradient-to-tr from-orange-600/30 via-amber-500/20 to-transparent blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Cybernetic Grid Aura Behind 3D Object */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-orange-500/20 animate-spin-slow opacity-60" />
        <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-white/15 animate-spin-slow opacity-40" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* 3D WebGL Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* =========================================================================
          FLOATING 3D GLASS TELEMETRY HUD CARDS (ORBITING AROUND 3D OBJECT)
      ========================================================================= */}

      {/* Card 1: Top-Left Revenue Surge */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-2 left-2 sm:left-4 z-20 rounded-2xl border border-orange-200 bg-white p-3.5 sm:p-4 shadow-xl flex items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400">
          <TrendingUp size={20} />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Search Growth</span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="text-base sm:text-lg font-black text-slate-900 font-mono flex items-center gap-1">
            <span>+340%</span>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">Organic</span>
          </div>
        </div>
      </motion.div>

      {/* Card 2: Bottom-Right ROAS Multiplier */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute -bottom-2 right-2 sm:right-4 z-20 rounded-2xl border border-orange-200 bg-white p-3.5 sm:p-4 shadow-xl flex items-center gap-3.5"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400">
          <BarChart3 size={20} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Paid Acquisition</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-base sm:text-lg font-black text-slate-900 font-mono">4.8x ROAS</span>
            <span className="text-[10px] text-orange-400 font-bold">Google & Meta</span>
          </div>
        </div>
      </motion.div>

      {/* Card 3: Interactive Sparkline Floating Badge (Bottom-Left) */}
      <motion.div
        animate={{
          x: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="hidden sm:flex absolute bottom-16 left-0 z-20 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl shadow-lg"
      >
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
          <Zap size={12} />
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-neutral-200">
          <span>₹18Cr+ Pipeline Created</span>
          <span className="text-orange-400">↗</span>
        </div>
      </motion.div>

      {/* Card 4: Top-Right Verified Clutch / Google Partner */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="hidden sm:flex absolute top-12 right-0 z-20 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-xl shadow-lg"
      >
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill="currentColor" />
          ))}
        </div>
        <span className="text-[11px] font-bold text-neutral-200">4.9★ Rated Agency</span>
      </motion.div>
    </div>
  );
}
