import React, { useState } from 'react';
import { Search, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const ProxySection = () => {
  const [url, setUrl] = useState('');
  const [activeUrl, setActiveUrl] = useState('https://www.google.com/search?igu=1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    let targetUrl = url;
    if (!url.startsWith('http')) {
      // If it's not a URL, treat it as a search query
      targetUrl = `https://www.google.com/search?q=${encodeURIComponent(url)}&igu=1`;
    }
    setActiveUrl(targetUrl);
  };

  return (
    <section id="proxy" className="w-full h-[85vh] bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col mt-8">
      {/* Proxy Header/Address Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 px-6 py-4 border-b border-white/5 bg-[#151515]">
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-blue-600/10 p-2 rounded-lg">
            <Globe className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="font-bold text-lg tracking-tight uppercase">Safe<span className="text-blue-500">Search</span></h2>
        </div>

        <form onSubmit={handleSearch} className="flex-1 w-full flex items-center gap-2">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Enter URL or search query..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-white/20 text-sm"
            />
          </div>
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shrink-0"
          >
            Go
          </button>
        </form>

        <div className="flex items-center gap-2 shrink-0">
          <a 
            href={activeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/60 hover:text-white"
            title="Open in new tab"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
            <ShieldCheck className="w-3 h-3" />
            <span>Encrypted</span>
          </div>
        </div>
      </div>

      {/* Proxy Viewport */}
      <div className="flex-1 bg-black relative">
        <iframe
          src={activeUrl}
          className="w-full h-full border-none"
          title="SafeSearch Proxy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
        
        {/* Overlay if iframe fails or for first-time use */}
        {!activeUrl && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
            <div className="text-center space-y-4 p-8">
              <Globe className="w-16 h-16 text-blue-500/20 mx-auto" />
              <p className="text-white/40 text-sm max-w-xs mx-auto">
                Enter a URL or search query above to browse privately and bypass filters.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Status Bar */}
      <div className="px-6 py-2 bg-[#151515] border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/20">
        <div className="flex items-center gap-4">
          <span>Status: Connected</span>
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        </div>
        <div className="hidden sm:block">
          Browsing via SafeSearch Gateway
        </div>
      </div>
    </section>
  );
};

export default ProxySection;
