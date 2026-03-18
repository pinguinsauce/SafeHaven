import React from 'react';
import { BookOpen } from 'lucide-react';

const MangaSection = () => {
  return (
    <section id="manga" className="w-full h-[80vh] bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col mt-8">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#151515]">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600/10 p-2 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-500" />
          </div>
          <h2 className="font-bold text-lg tracking-tight uppercase">Manga<span className="text-blue-500">Taro</span></h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-600/10 text-blue-500 rounded text-[10px] font-bold uppercase tracking-widest">
            External Reader
          </span>
        </div>
      </div>
      <div className="flex-1 bg-black relative">
        <iframe
          src="https://mangataro.org/home"
          className="w-full h-full border-none"
          title="MangaTaro"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </section>
  );
};

export default MangaSection;
