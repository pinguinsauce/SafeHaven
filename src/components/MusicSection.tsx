import React, { useState } from 'react';
import { Sun, Moon, Play, Music, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const MusicSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // The user provided this specific playlist
  const playlistId = "PLCn9BgJyWWcCo6-iXBUJXsggwcYN6knKk"; 
  const embedUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}&si=CD7lAss1tDnRysmg`;

  const themeClasses = isDarkMode 
    ? "bg-[#111] text-white border-white/10" 
    : "bg-white text-gray-900 border-gray-200";

  return (
    <section id="music" className={`mt-20 p-6 rounded-3xl border transition-colors duration-500 ${themeClasses}`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Music className="w-6 h-6 text-black" />
          </div>
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter">Safe<span className="text-blue-500">Tunes</span></h2>
            <p className={`text-xs uppercase tracking-widest font-bold ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>
              tuff diddy blud audios
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-3 rounded-xl border transition-all hover:scale-105 active:scale-95 ${
            isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-100 border-gray-200 hover:bg-gray-200'
          }`}
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-600" />}
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Main Player */}
        <div className="space-y-4">
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black">
            <iframe
              src={embedUrl}
              className="w-full h-full border-none"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>Streaming Playlist</span>
            </div>
            <div className="flex flex-col items-end">
              <div className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-white/20' : 'text-gray-400'}`}>
                Internal Player Mode
              </div>
              <div className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${isDarkMode ? 'text-blue-500/40' : 'text-blue-600/60'}`}>
                it automatically plays/skips da song
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
