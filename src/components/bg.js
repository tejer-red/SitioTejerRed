import React, { useEffect, useRef, useState } from 'react';
import Trama from '../assets/illustrations/tramaBG_Trama.svg'; // Importa la trama como SVG

const GenerativeBackground = () => {
  const bgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [markers, setMarkers] = useState([]);
  const [groups, setGroups] = useState({});
  const [tramaOffset, setTramaOffset] = useState({ x: 0, y: 0 });

  // Guarda el path principal generado solo una vez y en resize
  const [mainPathD, setMainPathD] = useState('');
  const [mainPathSegments, setMainPathSegments] = useState([]);

  // Genera el path principal y segmentos para el círculo rojo
  useEffect(() => {
    if (markers.length < 2) {
      setMainPathD('');
      setMainPathSegments([]);
      return;
    }
    // Genera el path principal (línea principal, sin ramificaciones)
    const sorted = [...markers].sort((a, b) => a.y - b.y);
    let d = `M${sorted[0].x},${sorted[0].y}`;
    const segments = [];
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      d += ` L${curr.x},${curr.y}`;
      const dx = curr.x - prev.x;
      const dy = curr.y - prev.y;
      const len = Math.sqrt(dx * dx + dy * dy);
      segments.push({ from: prev, to: curr, len, dx, dy });
    }
    setMainPathD(d);
    setMainPathSegments(segments);
  }, [markers, dimensions.width, dimensions.height]);

  // Utilidad para obtener un punto exacto sobre el path principal según el progreso (t: 0 a 1)
  function getPointOnMainPath(segments, t) {
    if (!segments.length) return null;
    let totalLen = segments.reduce((acc, seg) => acc + seg.len, 0);
    if (totalLen === 0) return { x: segments[0].from.x, y: segments[0].from.y, angle: 0 };
    let target = t * totalLen;
    for (let seg of segments) {
      if (target <= seg.len) {
        const ratio = target / seg.len;
        const x = seg.from.x + seg.dx * ratio;
        const y = seg.from.y + seg.dy * ratio;
        const angle = Math.atan2(seg.dy, seg.dx);
        return { x, y, angle };
      }
      target -= seg.len;
    }
    const lastSeg = segments[segments.length - 1];
    return {
      x: lastSeg.to.x,
      y: lastSeg.to.y,
      angle: Math.atan2(lastSeg.dy, lastSeg.dx)
    };
  }

  // Animación del círculo rojo (abre/cierra y sigue el scroll) - optimizada con setInterval
  const [circleAnim, setCircleAnim] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let dir = 1;
    const interval = setInterval(() => {
      setCircleAnim(prev => {
        let next = prev + dir * 0.04;
        if (next > 1) {
          next = 1;
          dir = -1;
        } else if (next < 0) {
          next = 0;
          dir = 1;
        }
        return next;
      });
    }, 40); // ~25fps
    return () => clearInterval(interval);
  }, []);

  // Debounce para scroll y resize
  function debounce(fn, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  }

  // Calcula el progreso del scroll (0 = top, 1 = bottom) - optimizado con debounce
  useEffect(() => {
    const handleScroll = debounce(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);
    }, 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Actualiza tamaño del SVG - optimizado con debounce
  useEffect(() => {
    const updateSize = debounce(() => {
      setDimensions({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      });
    }, 80);
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Extrae marcadores del DOM - optimizado con debounce y sin logs
  useEffect(() => {
    const updateMarkers = debounce(() => {
      const markerElements = Array.from(document.querySelectorAll('.marker'));
      const newMarkers = markerElements.map(el => {
        const rect = el.getBoundingClientRect();
        const parent = el.parentElement;
        const parentId =
          parent?.dataset?.id || parent?.id || parent?.className || 'unknown';
        return {
          id: el.id,
          parentId,
          x: rect.left + rect.width / 2 + window.scrollX,
          y: rect.top + rect.height / 2 + window.scrollY,
        };
      });
      // Agrupar por parentId + alineación horizontal
      const groupMap = {};
      newMarkers.forEach(marker => {
        const groupKey = `${marker.parentId}_${Math.round(marker.x / 20) * 20}`;
        if (!groupMap[groupKey]) groupMap[groupKey] = [];
        groupMap[groupKey].push(marker.id);
      });
      setMarkers(newMarkers);
      setGroups(groupMap);
    }, 80);

    // Si los markers no cambian dinámicamente, puedes quitar el MutationObserver
    // const observer = new MutationObserver(updateMarkers);
    // observer.observe(document.body, { childList: true, subtree: true });

    updateMarkers();
    window.addEventListener('resize', updateMarkers);
    window.addEventListener('scroll', updateMarkers);

    return () => {
      // observer.disconnect();
      window.removeEventListener('resize', updateMarkers);
      window.removeEventListener('scroll', updateMarkers);
    };
  }, []);

  // Parallax para Trama SVG
  useEffect(() => {
    function handleParallax() {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollX = window.scrollX || window.pageXOffset;
      // Ajusta los factores para el efecto deseado
      setTramaOffset({
        x: scrollX * 0.1,
        y: scrollY * 0.25,
      });
    }
    window.addEventListener('scroll', handleParallax, { passive: true });
    window.addEventListener('resize', handleParallax, { passive: true });
    handleParallax();
    return () => {
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('resize', handleParallax);
    };
  }, []);

  function getSiblingGroup(marker, groups) {
    if (!marker.parentId) return null;
  
    const groupKey = Object.keys(groups).find(
      key =>
        key.startsWith(`${marker.parentId}_`) &&
        groups[key].includes(marker.id)
    );
  
    return groupKey ? groups[groupKey] : null;
  }
  

  function buildHierarchy(markerDivs) {
    const hierarchyMap = {};
    const groupsMap = {};
  
    markerDivs.forEach(div => {
      const parent = div.parentElement;
      if (!parent) return;
  
      const parentId = parent.dataset.id || parent.id || parent.className || 'unknown';
  
      if (!hierarchyMap[parentId]) hierarchyMap[parentId] = [];
      hierarchyMap[parentId].push(div.id);
  
      const groupKey = `${parentId}_${Math.round(div.getBoundingClientRect().left / 20) * 20}`;
      if (!groupsMap[groupKey]) groupsMap[groupKey] = [];
      groupsMap[groupKey].push(div.id);
    });
  
    return { hierarchyMap, groupsMap };
  }

  function getMapStylePath(markers, groups) {
    if (markers.length < 2) return [];
  
    const paths = [];
    const visited = new Set();
    const sorted = [...markers].sort((a, b) => a.y - b.y);
  
    let last = sorted[0];
    visited.add(last.id);
  
    let currentPath = `M${last.x},${last.y}`;
  
    for (let i = 1; i < sorted.length; i++) {
      const curr = sorted[i];
      if (visited.has(curr.id)) continue;
  
      const siblings = getSiblingGroup(curr, groups);
      const unvisitedSiblings = siblings
        ? siblings.filter(id => !visited.has(id))
        : [];
  
      if (unvisitedSiblings.length > 1) {
        const siblingMarkers = sorted.filter(m =>
          unvisitedSiblings.includes(m.id)
        );
        siblingMarkers.forEach(m => visited.add(m.id));
  
        const splitY = Math.min(...siblingMarkers.map(m => m.y)) - 80;
        currentPath += ` V${splitY}`;
        paths.push(currentPath);
  
        siblingMarkers.forEach((m, idx) => {
          const ctrlY = splitY + 30;
          const path = `M${last.x},${splitY} Q${m.x},${ctrlY} ${m.x},${m.y}`;
          paths.push(path);
        });
  
        last = siblingMarkers.at(-1);
        currentPath = `M${last.x},${last.y}`;
      } else {
        visited.add(curr.id);
        if (curr.x !== last.x) currentPath += ` H${curr.x}`;
        if (curr.y !== last.y) currentPath += ` V${curr.y}`;
        last = curr;
      }
    }
  
    if (currentPath.length > 1) {
      paths.push(currentPath);
    }
  
    return paths;
  }

  // Dibuja líneas de "mapa" entre cada par de puntos consecutivos (sin ramificaciones) con ligeras curvas y mayor grosor
  function getSimpleMapLines(markers) {
    if (markers.length < 2) return [];
    const sorted = [...markers].sort((a, b) => a.y - b.y);
    const lines = [];
    for (let i = 1; i < sorted.length; i++) {
      const prev = sorted[i - 1];
      const curr = sorted[i];
      // Curva suave: control point a mitad de camino, desplazado en X
      const cx = (prev.x + curr.x) / 2;
      lines.push(
        `M${prev.x},${prev.y} Q${cx},${prev.y} ${cx},${(prev.y + curr.y) / 2} T${curr.x},${curr.y}`
      );
    }
    return lines;
  }

  const mainPathPoint = getPointOnMainPath(mainPathSegments, scrollProgress);

  return (
    <>
      <Trama
        style={{
          position: 'fixed',
          top: "-50vw",
          left: "-50vw",
          transform: `translate(${tramaOffset.x}px, ${tramaOffset.y}px)`,
          transition: 'transform 0.1s cubic-bezier(.4,0,.2,1)',
          zIndex: -1,
          width: '200vw',
          height: '200vh',
          pointerEvents: 'none',
          opacity: "0.3",
        }}
      />
      <div
        ref={bgRef}
        className="bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          style={{ display: 'block', position: 'absolute', top: 0, left: 0 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="markerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
            </filter>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.2" />
            </pattern>
            <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#gridPattern)" opacity="0.3" />

          {/* Líneas de mapa simples entre puntos */}
          {markers.length > 1 &&
            getSimpleMapLines(markers).map((d, idx) => (
              <path
                key={`simplemap-${idx}`}
                d={d}
                fill="none"
                stroke="#444"
                strokeWidth={7} // grosor mayor
                opacity={0.5}
                strokeDasharray="14,10"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            ))
          }

          {/* Dibuja el path principal solo una vez */}
          {mainPathD && (
            <path
              d={mainPathD}
              fill="none"
              stroke="#444"
              strokeWidth={6}
              opacity={0.1}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          )}

          {markers.length > 1 &&
            getMapStylePath(markers, groups).map((d, idx) => (
              <path
                key={idx}
                d={d}
                fill="none"
                stroke={idx === 0 ? 'url(#lineGradient)' : 'url(#branchGradient)'}
                strokeWidth={idx === 0 ? 4 : 3}
                opacity={0.9}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            ))
          }

          {/* Círculo rojo animado que acompaña la navegación, exacto sobre el path */}
          {mainPathPoint && (
            <circle
              cx={mainPathPoint.x}
              cy={mainPathPoint.y}
              r={230 + 10 * circleAnim}
              fill="none"
              stroke="#EF4444"
              strokeWidth={5}
              opacity={0.1 + (circleAnim / 4)}
            />
          )}

          {markers.map((m, i) => (
            <g key={m.id || i} transform={`translate(${m.x}, ${m.y})`}>
              <circle
                r={14}
                fill="#fff"
                stroke={getSiblingGroup(m, groups) ? '#EC4899' : '#2563EB'}
                strokeWidth={3}
                filter="url(#markerShadow)"
              />
              <text
                textAnchor="middle"
                dy=".3em"
                fontSize="10"
                fontWeight="bold"
                fill={getSiblingGroup(m, groups) ? '#EC4899' : '#2563EB'}
              >
                {i + 1}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
};

export default GenerativeBackground;
