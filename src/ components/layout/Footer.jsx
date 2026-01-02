import React from 'react';
import { Zap, Linkedin, Github } from 'lucide-react';

const Footer = () => (
  <footer className="py-20 px-6 border-t border-zinc-100 bg-white rounded-t-[4rem]">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
      <div className="space-y-6 text-left">
        <div className="flex items-center gap-2 text-zinc-900">
          <Zap size={20} className="fill-zinc-900" />
          <span className="font-black text-sm uppercase tracking-tighter">NITA CONNECT</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-medium">Empowering the NIT Agartala campus community through meaningful connections.</p>
      </div>
      <div className="space-y-6">
        <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest text-left">Connect with Developers</h4>
        <div className="space-y-4">
          <div className="flex justify-between border-b border-zinc-50 pb-2">
            <span className="text-sm font-bold text-zinc-900">Developer One</span>
            <div className="flex gap-3 text-zinc-300">
              <a href="#" className="hover:text-zinc-900 transition-colors"><Linkedin size={16}/></a>
              <a href="#" className="hover:text-zinc-900 transition-colors"><Github size={16}/></a>
            </div>
          </div>
          <div className="flex justify-between border-b border-zinc-50 pb-2">
            <span className="text-sm font-bold text-zinc-900">Developer Two</span>
            <div className="flex gap-3 text-zinc-300">
              <a href="#" className="hover:text-zinc-900 transition-colors"><Linkedin size={16}/></a>
              <a href="#" className="hover:text-zinc-900 transition-colors"><Github size={16}/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 md:text-right">
        <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Support</h4>
        <ul className="text-xs font-bold text-zinc-900 space-y-3">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Safety Guidelines</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-zinc-300 text-[10px] font-black uppercase tracking-[0.3em] pt-8 border-t border-zinc-50">© 2024 NITA Synergy Network</div>
  </footer>
);

export default Footer;
