/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Gamepad2, X, Maximize2, Search, Play, Music, BookOpen, Home, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MusicSection from './components/MusicSection';
import MangaSection from './components/MangaSection';
import ProxySection from './components/ProxySection';
import gamesData from './games.json';

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

type Tab = 'home' | 'manga' | 'music' | 'proxy';

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const filteredGames = (gamesData as Game[]).filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-600/30 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-xl font-bold tracking-tight hidden sm:block uppercase">
                safe<span className="text-blue-500">haven</span>
              </h1>
            </div>

            <div className="flex-1 max-w-md mx-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeTab !== 'home') setActiveTab('home');
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <button 
                onClick={() => setActiveTab('home')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'home' ? 'text-blue-500' : 'text-white/60 hover:text-white'}`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button 
                onClick={() => setActiveTab('manga')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'manga' ? 'text-blue-500' : 'text-white/60 hover:text-white'}`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Manga</span>
              </button>
              <button 
                onClick={() => setActiveTab('music')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'music' ? 'text-blue-500' : 'text-white/60 hover:text-white'}`}
              >
                <Music className="w-4 h-4" />
                <span>Music</span>
              </button>
              <button 
                onClick={() => setActiveTab('proxy')}
                className={`flex items-center gap-2 transition-colors ${activeTab === 'proxy' ? 'text-blue-500' : 'text-white/60 hover:text-white'}`}
              >
                <Globe className="w-4 h-4" />
                <span>Proxy</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {/* Hero Section */}
              {!searchQuery && (
                <section className="relative py-24 px-4 overflow-hidden min-h-[70vh] flex items-center justify-center">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=1920&q=80" 
                      alt="Blue Sky" 
                      className="w-full h-full object-cover opacity-100 scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/bluesky/1920/1080';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90" />
                  </div>

                  <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="relative inline-block"
                    >
                      <h2 className="text-5xl md:text-[9rem] font-black mb-4 tracking-tighter uppercase leading-none text-white drop-shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                        free<span className="text-blue-500">dom</span>
                      </h2>
                      <div className="absolute inset-0 bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
                    </motion.div>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white max-w-2xl mx-auto text-xl font-semibold mt-12 drop-shadow-[0_2px_8px_rgba(0,0,0,1)]"
                    >
                      Breaking barriers, one game at a time. Access your favorite titles anywhere.
                    </motion.p>
                  </div>
                </section>
              )}

              {/* Games Grid */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredGames.map((game, index) => (
                    <motion.div
                      key={game.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group relative bg-[#151515] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all cursor-pointer shadow-xl"
                      onClick={() => setSelectedGame(game)}
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={game.thumbnail}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-blue-600 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <Play className="w-6 h-6 text-black fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-sm truncate group-hover:text-blue-500 transition-colors uppercase tracking-wider">
                          {game.title}
                        </h3>
                        <p className="text-xs text-white/40 mt-1">Web Game</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {filteredGames.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-white/40 text-lg italic">No games found matching your search.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'manga' && (
            <motion.div
              key="manga"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <MangaSection />
            </motion.div>
          )}

          {activeTab === 'proxy' && (
            <motion.div
              key="proxy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <ProxySection />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Persistent Music Section - Stays mounted to keep music playing */}
        <div className={activeTab === 'music' ? 'block' : 'hidden'}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            <MusicSection />
          </motion.div>
        </div>
      </main>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#151515]">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600/10 p-2 rounded-lg">
                    <Gamepad2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="font-bold text-lg tracking-tight uppercase">{selectedGame.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.open(selectedGame.url, '_blank')}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/60 hover:text-white"
                    title="Open in new tab"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedGame(null)}
                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-white/60 hover:text-red-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Game Iframe */}
              <div className="flex-1 bg-black relative">
                <iframe
                  src={selectedGame.url}
                  className="w-full h-full border-none"
                  title={selectedGame.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-top-navigation"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-[#151515] border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4 text-xs font-medium text-white/40">
                  <span>CONTROLS: KEYBOARD & MOUSE</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
                  <span>GENRE: ARCADE</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-600/10 text-blue-500 rounded text-[10px] font-bold uppercase tracking-widest">
                    Verified Safe
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gamepad2 className="w-5 h-5 text-blue-500" />
            <span className="font-bold tracking-widest text-sm uppercase">safehaven</span>
          </div>
          <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            A curated collection of web games for your entertainment. 
            All games are property of their respective owners.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-xs font-medium text-white/20">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
