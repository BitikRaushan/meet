import React, { useState } from 'react';
import { MapPin, ArrowRight, Code, BookOpen, Heart, Mic, Trophy, Clock, X, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';

const LandingPage = ({ setPage, user }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const purposes = [
    { label: 'Coding', icon: Code, desc: 'Partner for late-night programming squads.', img: '[https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400)' },
    { label: 'Study', icon: BookOpen, desc: 'Focus buddies for the NITA Central Library.', img: '[https://images.unsplash.com/photo-1521714161819-15534968fc5f?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1521714161819-15534968fc5f?auto=format&fit=crop&q=80&w=400)' },
    { label: 'Dating', icon: Heart, desc: 'Campus connections & coffee dates.', img: '[https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400)' },
    { label: 'Singing', icon: Mic, desc: 'Jam sessions for college fests.', img: '[https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400)' },
    { label: 'Hackathon', icon: Trophy, desc: 'Build dream teams for inter-NIT tech fests.', img: '[https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400)' },
  ];

  return (
    <div className="pt-32 pb-20 space-y-32">
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 text-left">
          <div className="inline-flex gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full items-center"><MapPin size={14}/> Exclusive to NIT Agartala</div>
          <h1 className="text-6xl lg:text-8xl font-black text-zinc-900 tracking-tighter leading-[0.9]">Match with <br/><span className="text-zinc-400 italic font-serif">NITA Tribe.</span></h1>
          <p className="text-lg text-zinc-600 max-w-md font-medium">The smartest way to find partners for study, coding, and fun at NITA.</p>
          <Button className="h-14 px-10 text-lg" onClick={() => setPage(user ? 'dashboard' : 'login')}>Find My Tribe <ArrowRight size={20}/></Button>
        </div>
        <div className="relative bg-zinc-900 rounded-[3rem] p-4 border-[8px] border-zinc-800 w-full max-w-[350px] mx-auto overflow-hidden rotate-2 shadow-2xl transition-all hover:rotate-0">
          <div className="bg-[#FAF9F6] h-[550px] rounded-[2.2rem] p-6 flex flex-col">
            <div className="aspect-[4/5] bg-zinc-100 rounded-2xl mb-4 overflow-hidden border border-zinc-200 shadow-inner">
               <img src="[https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400)" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-zinc-900 text-lg">Aryan, 20</h3>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">CSE • NITA</p>
            <div className="flex gap-2 mt-4"><div className="flex-1 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-300"><X/></div><div className="flex-1 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-white"><Heart size={16} className="fill-white"/></div></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-50/50 border-y border-zinc-100 text-left">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] border border-zinc-100 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[400px]">
          <div className="w-full md:w-1/3 bg-zinc-50 border-r border-zinc-100 p-4 space-y-2">
            {purposes.map((p, i) => (
              <button key={i} onClick={() => setActiveIdx(i)} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${activeIdx === i ? 'bg-zinc-900 text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-100'}`}><p.icon size={18}/>{p.label}</button>
            ))}
          </div>
          <div className="flex-1 p-10 flex flex-col justify-center animate-in fade-in duration-500">
             <div className="flex flex-col md:flex-row items-center gap-10 text-left">
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight text-zinc-900">{purposes[activeIdx].label} Partners</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed text-sm">{purposes[activeIdx].desc}</p>
                  <Button variant="ghost" className="text-zinc-900 p-0 group font-black uppercase text-[10px] tracking-widest" onClick={() => setPage('login')}>Start Matching <ArrowRight size={14} className="group-hover:translate-x-1 transition-all"/></Button>
                </div>
                <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl rotate-3 shrink-0">
                  <img src={purposes[activeIdx].img} className="w-full h-full object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
