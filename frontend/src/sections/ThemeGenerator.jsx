import React, { useState } from 'react';
import gsap from 'gsap';

const ThemeGenerator = () => {
  const [vibe, setVibe] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to update CSS variables visually with GSAP
  const applyTheme = (themeData) => {
    const root = document.documentElement;
    
    gsap.to(root, {
      '--color-background': themeData.background,
      '--color-primary': themeData.primary,
      '--color-secondary': themeData.secondary,
      '--color-accent': themeData.accent,
      '--color-text-main': themeData.textMain,
      '--color-text-muted': themeData.textMuted,
      '--border-radius-global': themeData.borderRadius,
      duration: 1.5,
      ease: "power2.inOut"
    });
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!vibe) return;
    setLoading(true);

    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vibe }),
      });
      const themeData = await res.json();
      applyTheme(themeData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 p-4 bg-secondary/80 backdrop-blur-md rounded-global border border-white/10 shadow-lg">
      <h3 className="text-text-main font-bold mb-2 text-sm">🎨 AI Theme Engine</h3>
      <form onSubmit={handleGenerate} className="flex gap-2">
        <input 
          type="text" 
          value={vibe}
          onChange={(e) => setVibe(e.target.value)}
          placeholder="e.g., 'Matrix', 'Sunset'"
          className="bg-background/50 border border-white/10 rounded-md px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-primary text-black font-bold px-4 py-2 rounded-md text-sm hover:bg-accent transition-colors disabled:opacity-50"
        >
          {loading ? '🖌️...' : 'Paint'}
        </button>
      </form>
    </div>
  );
};

export default ThemeGenerator;