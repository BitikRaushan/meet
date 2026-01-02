import React, { useState, useEffect } from 'react';
import { Zap, Bell, MessageSquare, MoreVertical, User, Lock, LogOut, CheckCircle2, AlertCircle } from 'lucide-react';

const Navbar = ({ user, setPage, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('landing')}>
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center"><Zap className="text-white w-5 h-5 fill-white" /></div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">NITA Connect</span>
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <button onClick={() => setPage('dashboard')} className="text-sm font-bold text-zinc-500 hover:text-zinc-900 hidden md:block">Dashboard</button>
            <div className="relative">
              <button onClick={() => setShowStatus(!showStatus)} className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-600 relative"><Bell size={20} /><span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span></button>
              {showStatus && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-zinc-100 p-4 z-[100] animate-in fade-in slide-in-from-top-2">
                  <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 px-2">Recent Updates</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-[10px] font-bold text-emerald-700 flex gap-2"><CheckCircle2 size={14}/> Request Accepted</div>
                    <div className="p-3 bg-red-50 rounded-2xl border border-red-100 text-[10px] font-bold text-red-700 flex gap-2"><AlertCircle size={14}/> Request Rejected</div>
                  </div>
                </div>
              )}
            </div>
            <button onClick={() => setPage('chat')} className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-600"><MessageSquare size={20} /></button>
            <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-zinc-100 cursor-pointer" onClick={() => setPage('onboarding')}>
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=NITA`} className="w-full h-full object-cover" />
            </div>
            <div className="relative group">
              <button className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-600"><MoreVertical size={20} /></button>
              <div className="absolute top-full right-0 mt-3 w-40 bg-white rounded-2xl shadow-xl border border-zinc-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all p-2 duration-200 z-50">
                <button className="w-full text-left px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-50 rounded-xl flex items-center gap-2"><User size={14}/> Account</button>
                <div className="h-[1px] bg-zinc-50 my-1"></div>
                <button onClick={onLogout} className="w-full text-left px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl flex items-center gap-2"><LogOut size={14}/> Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button onClick={() => setPage('login')} className="text-sm font-bold text-zinc-600 px-4">Login</button>
            <button onClick={() => setPage('login')} className="bg-zinc-900 text-white px-6 py-2.5 rounded-full font-bold text-sm">Join NITA</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
