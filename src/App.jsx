import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, BookOpen, MapPin, Code, Search, MessageSquare, 
  User, LogOut, Send, ArrowRight, ChevronLeft, X, 
  CheckCircle2, Plus, Bell, Heart, Star, Sparkles, Loader2,
  GraduationCap, MapPinIcon, Calendar, Info, Trophy, Mic, Activity, Flame, Zap,
  MoreVertical, Phone, Video, Paperclip, Smile, Camera, Image as ImageIcon, Compass,
  Lock, Tent, Clock, Github, Linkedin, AlertCircle
} from 'lucide-react';

/**
 * NITA Connect - NIT Agartala Exclusive
 * Updated: Navbar with Notification Status (Accepted/Rejected) and More (Three-dot) Menu.
 */

// --- Shared UI Components ---

const Button = ({ children, variant = 'primary', className = '', loading = false, ...props }) => {
  const variants = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:bg-zinc-400',
    secondary: 'bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-300',
    ghost: 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors',
    outline: 'border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all',
  };

  return (
    <button 
      className={`px-6 py-3 rounded-full font-bold transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 ${variants[variant]} ${className}`}
      disabled={loading}
      {...props}
    >
      {loading ? <Loader2 className="animate-spin" size={20} /> : children}
    </button>
  );
};

const InputField = ({ label, error, ...props }) => (
  <div className="w-full">
    {label && <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest px-1 mb-2">{label}</label>}
    <input 
      className={`w-full px-5 py-4 bg-white border rounded-2xl focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all placeholder:text-zinc-300 font-medium ${error ? 'border-red-500' : 'border-zinc-200'}`}
      {...props}
    />
    {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
  </div>
);

const SelectField = ({ label, options, error, ...props }) => (
  <div className="w-full">
    {label && <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest px-1 mb-2">{label}</label>}
    <select 
      className={`w-full px-5 py-4 bg-white border rounded-2xl focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all font-medium appearance-none cursor-pointer ${error ? 'border-red-500' : 'border-zinc-200'}`}
      {...props}
    >
      <option value="">Select an option</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

// --- Navbar Component ---

const Navbar = ({ user, setPage, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('landing')}>
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">NITA Connect</span>
        </div>

        {user ? (
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden md:flex items-center gap-6 mr-2">
              <button onClick={() => setPage('dashboard')} className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors">Dashboard</button>
              <button onClick={() => setPage('matches')} className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors">Explore</button>
            </div>

            {/* Request Status / Notification Icon */}
            <div className="relative">
              <button 
                onClick={() => setShowStatus(!showStatus)}
                className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-600 relative transition-all active:scale-90"
                title="Requests Status"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
              </button>
              
              {showStatus && (
                <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-zinc-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-[100]">
                  <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3 px-2">Recent Updates</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-emerald-900">Request Accepted</p>
                        <p className="text-[10px] text-emerald-600">Sneha accepted your coding invite.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-2xl border border-red-100">
                      <AlertCircle className="text-red-500 w-4 h-4 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-red-900">Request Declined</p>
                        <p className="text-[10px] text-red-600">Library buddy session rejected.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => setPage('chat')} className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-600 relative transition-all active:scale-90">
              <MessageSquare size={20} />
            </button>

            <div className="h-8 w-[1px] bg-zinc-200 hidden sm:block"></div>

            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setPage('onboarding')}>
              <div className="text-right hidden lg:block">
                <p className="text-sm font-bold text-zinc-900 leading-none">{user.name || 'NITian'}</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1 tracking-widest">Profile</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden bg-zinc-100 hover:ring-2 hover:ring-zinc-900 transition-all">
                <img src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=NITA`} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Tree Dot / More Menu Button */}
            <div className="relative group">
              <button className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-600 transition-all active:scale-90">
                <MoreVertical size={20} />
              </button>
              <div className="absolute top-full right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-zinc-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] py-2">
                <button className="w-full text-left px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 flex items-center gap-3">
                  <User size={16} /> Account
                </button>
                <button className="w-full text-left px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 flex items-center gap-3">
                  <Lock size={16} /> Privacy
                </button>
                <div className="h-[1px] bg-zinc-100 my-1 mx-2"></div>
                <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-3">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="px-4" onClick={() => setPage('login')}>Login</Button>
            <Button variant="primary" onClick={() => setPage('login')}>Join NITA</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

// --- Landing Page ---

const LandingPage = ({ setPage, user }) => {
  const [prefs, setPrefs] = useState({
    purpose: 'hackathon',
    timing: 'evening',
    gender: 'any'
  });

  const [activePurposeIdx, setActivePurposeIdx] = useState(0);

  const purposes = [
    { 
      id: 'coding', 
      label: 'Coding', 
      icon: Code, 
      desc: 'Late-night coding or project squads for NITA devs.',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400'
    },
    { 
      id: 'library', 
      label: 'Study', 
      icon: BookOpen, 
      desc: 'Focus buddies for NITA Central Library sessions.',
      img: 'https://images.unsplash.com/photo-1521714161819-15534968fc5f?auto=format&fit=crop&q=80&w=400'
    },
    { 
      id: 'dating', 
      label: 'Dating', 
      icon: Heart, 
      desc: 'Genuine campus connections & canteen coffee dates.',
      img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400'
    },
    { 
      id: 'singing', 
      label: 'Singing', 
      icon: Mic, 
      desc: 'Jam sessions and musical collabs for college fests.',
      img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=400'
    },
    { 
      id: 'hackathon', 
      label: 'Hackathon', 
      icon: Trophy, 
      desc: 'Build winning teams for inter-NIT tech hackathons.',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400'
    },
  ];

  const timings = [
    { id: 'morning', label: 'Morning', icon: Clock },
    { id: 'evening', label: 'Evening', icon: Clock },
    { id: 'night', label: 'Late Night', icon: Clock },
  ];

  return (
    <div className="pt-32 pb-20 space-y-32">
      {/* Hero Section */}
      <section className="px-6 animate-in fade-in duration-700">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Exclusively for NIT Agartala Students</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight">
              Match with your <br />
              <span className="text-zinc-500 italic font-serif">NITA Tribe.</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Connect with NITA students for projects, late-night coding, trips, or sports based on your schedule.
            </p>

            <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-xl shadow-zinc-200/40 space-y-6 max-w-xl">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-1">Initial Preference</label>
                <div className="flex flex-wrap gap-2">
                  {purposes.map(p => (
                    <button 
                      key={p.id}
                      onClick={() => setPrefs({...prefs, purpose: p.id})}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-sm transition-all ${
                        prefs.purpose === p.id ? 'bg-zinc-900 border-zinc-900 text-white shadow-lg' : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-300'
                      }`}
                    >
                      <p.icon size={16} /> {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-1">Timing?</label>
                  <div className="flex flex-col gap-2">
                    {timings.map(t => (
                      <button 
                        key={t.id}
                        onClick={() => setPrefs({...prefs, timing: t.id})}
                        className={`flex items-center gap-3 px-4 py-2 rounded-xl border font-bold text-xs transition-all ${
                          prefs.timing === t.id ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-300'
                        }`}
                      >
                        <t.icon size={14} /> {t.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-1">Gender Pref.</label>
                  <div className="flex flex-col gap-2">
                    {['Any', 'Male', 'Female'].map(g => (
                      <button 
                        key={g}
                        onClick={() => setPrefs({...prefs, gender: g.toLowerCase()})}
                        className={`flex items-center justify-center px-4 py-2 rounded-xl border font-bold text-xs transition-all ${
                          prefs.gender === g.toLowerCase() ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-300'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="primary" className="w-full h-14 text-lg group" onClick={() => setPage(user ? 'dashboard' : 'login')}>
                {user ? 'Go to Dashboard' : 'Find My Tribe'} 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-zinc-200/50 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="relative bg-zinc-900 rounded-[3rem] p-4 shadow-2xl border-[8px] border-zinc-800 w-full max-w-[380px] mx-auto overflow-hidden">
              <div className="bg-[#FAF9F6] rounded-[2.2rem] h-[600px] overflow-hidden flex flex-col p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=NITA_STUDENT" alt="avatar" />
                  </div>
                  <MessageSquare className="w-6 h-6 text-zinc-400" />
                </div>
                <div className="bg-white rounded-3xl p-5 shadow-sm border border-zinc-100 flex-grow mb-4">
                  <div className="aspect-[4/5] bg-zinc-100 rounded-2xl mb-4 overflow-hidden relative shadow-inner">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Student Life" />
                  </div>
                  <h3 className="font-bold text-zinc-900 text-lg">NITA Connect</h3>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Matching Students Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Purpose Showcase */}
      <section className="px-6 py-20 bg-zinc-50/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">One App, Many Tribes.</h2>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">What are you connecting for today?</p>
          </div>

          <div className="bg-white rounded-[3rem] border border-zinc-100 shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row items-stretch min-h-[400px]">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-1/3 bg-zinc-50/50 border-r border-zinc-100 p-4 space-y-2">
              {purposes.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePurposeIdx(idx)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                    activePurposeIdx === idx 
                    ? 'bg-zinc-900 text-white shadow-lg' 
                    : 'text-zinc-500 hover:bg-zinc-100'
                  }`}
                >
                  <p.icon size={18} />
                  <span className="font-bold text-sm">{p.label}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center animate-in fade-in duration-500">
               <div className="flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1 space-y-4 text-center md:text-left">
                   <h3 className="text-3xl font-bold text-zinc-900 tracking-tight">{purposes[activePurposeIdx].label} Partners</h3>
                   <p className="text-zinc-500 font-medium leading-relaxed">{purposes[activePurposeIdx].desc}</p>
                   <Button variant="ghost" className="mt-2 text-zinc-900 font-black group" onClick={() => setPage('login')}>
                     Start Matching <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </div>
                 {/* SMALL REAL IMAGE */}
                 <div className="w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl rotate-3 shrink-0">
                    <img 
                      src={purposes[activePurposeIdx].img} 
                      className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                      alt={purposes[activePurposeIdx].label} 
                    />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Onboarding Flow ---

const OnboardingForm = ({ setGlobalUser, onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', age: '', dept: '', year: '', interests: [], bio: '', gender: 'Male'
  });

  const interestOptions = ['Coding', 'Music', 'Gym', 'Travel', 'Startups', 'Gaming', 'Cricket', 'AI/ML'];

  const handleComplete = () => {
    setLoading(true);
    setTimeout(() => {
      setGlobalUser(prev => ({ ...prev, ...formData }));
      setLoading(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto pt-40 pb-20 px-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-zinc-100 shadow-xl space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Setup Your NITA Profile</h2>
          <p className="text-zinc-500 mt-2">Step {step} of 2</p>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
             <InputField label="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
             <div className="grid grid-cols-2 gap-4">
               <InputField label="Age" type="number" value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} />
               <SelectField label="Year" options={['1st', '2nd', '3rd', '4th']} value={formData.year} onChange={e => setFormData({...formData, year: e.target.value})} />
             </div>
             <InputField label="Department" value={formData.dept} placeholder="e.g. CSE, ECE, Mechanical" onChange={e => setFormData({...formData, dept: e.target.value})} />
             <Button className="w-full h-14 text-lg" onClick={() => setStep(2)}>Next Step <ArrowRight size={20} /></Button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-1">Your Interests</label>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map(opt => (
                  <button 
                    key={opt} 
                    onClick={() => setFormData(p => ({...p, interests: p.interests.includes(opt) ? p.interests.filter(i => i !== opt) : [...p.interests, opt]}))}
                    className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${formData.interests.includes(opt) ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-white border-zinc-100 text-zinc-500 hover:border-zinc-300'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <InputField label="Short Bio" placeholder="Tell other NITA students about you..." value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})} />
            <div className="flex gap-4 pt-4">
              <Button variant="secondary" className="flex-1 h-14" onClick={() => setStep(1)}>Back</Button>
              <Button className="flex-[2] h-14" loading={loading} onClick={handleComplete}>Save & Explore</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Dashboard Component ---

const Dashboard = ({ user, setPage }) => {
  const categories = [
    { id: 'dating', title: 'Campus Dating', icon: <Heart className="fill-red-500 text-red-500" />, desc: 'Find that special connection.' },
    { id: 'hackathon', title: 'Hackathon Partner', icon: <Trophy className="text-amber-500" />, desc: 'Form the ultimate tech squad.' },
    { id: 'trip', title: 'Camp/Trip', icon: <Tent className="text-emerald-500" />, desc: 'Join or host an adventure.' },
    { id: 'study', title: 'Study Buddy', icon: <BookOpen className="text-blue-500" />, desc: 'Focus on your goals together.' },
    { id: 'night', title: 'Night Canteen Buddy', icon: <Clock className="text-orange-500" />, desc: 'Late night snack companion.' },
    { id: 'coding', title: 'Coding Match', icon: <Code className="text-zinc-600" />, desc: 'Pair program and build things.' },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 space-y-16 animate-in fade-in duration-500">
      <div className="bg-zinc-900 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em]">Smart Matching Live</div>
          <h2 className="text-5xl font-bold tracking-tight leading-tight">Welcome to NITA Tribe, <br/><span className="italic font-serif text-zinc-400">{user?.name?.split(' ')[0] || 'NITian'}</span></h2>
          <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-md">Your perfect partner for {user?.interests?.[0] || 'projects'} is ready to connect.</p>
          <Button onClick={() => setPage('matches')} className="bg-white text-zinc-900 px-10 h-14 rounded-2xl">Start Exploring <ArrowRight /></Button>
        </div>
        <div className="w-full lg:w-1/3 aspect-square bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-inner">
           {/* <MapPin size={120} className="text-white/10" /> */}
           <img
             src="b.png"
             alt="college"
             className="rounded-xl"
           />

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer" onClick={() => setPage('matches')}>
            <div className="mb-6 w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">{cat.title}</h3>
            <p className="text-zinc-500 font-medium leading-relaxed">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- App Root ---

export default function App() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);

  const handleLogin = (enrollment) => {
    const mockUser = {
      uid: enrollment || 'nita-user-123',
      name: enrollment || 'NITA Student',
      avatar: null,
      interests: []
    };
    setUser(mockUser);
    setPage('onboarding');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('landing');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar user={user} setPage={setPage} onLogout={handleLogout} />
      
      <main>
        {page === 'landing' && <LandingPage setPage={setPage} user={user} />}
        
        {page === 'login' && (
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-zinc-100 w-full max-w-md animate-in zoom-in-95 duration-500">
               <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">NITA Connect</h2>
                  <p className="text-zinc-500 mt-2 font-medium">NIT Agartala Enrollment Portal</p>
               </div>
               <div className="space-y-4">
                 <button onClick={() => handleLogin('Google User')} className="w-full h-14 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center gap-4 hover:bg-zinc-50 transition-all font-bold">
                   <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" />
                   <span>Google for NITA</span>
                 </button>
                 <div className="relative">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-100"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-zinc-300 font-bold">Or Enrollment</span></div>
                 </div>
                 <InputField label="Enrollment ID" placeholder="e.g. 21BCE045" />
                 <InputField label="Password" type="password" />
                 <Button onClick={() => handleLogin()} className="w-full h-14 text-lg">Sign In</Button>
               </div>
            </div>
          </div>
        )}

        {page === 'onboarding' && <OnboardingForm setGlobalUser={setUser} onComplete={() => setPage('dashboard')} />}
        {page === 'dashboard' && <Dashboard user={user} setPage={setPage} />}
        {page === 'chat' && (
           <div className="pt-40 px-6 text-center">
             <MessageSquare size={48} className="mx-auto text-zinc-200 mb-6" />
             <h2 className="text-2xl font-bold">Chats are coming soon!</h2>
             <Button variant="ghost" onClick={() => setPage('dashboard')}>Back</Button>
           </div>
        )}
        {page === 'matches' && (
           <div className="max-w-7xl mx-auto pt-32 pb-20 px-6 space-y-12 animate-in fade-in duration-500 text-center">
              <h2 className="text-5xl font-black text-zinc-900 tracking-tighter">Discover NITA Tribes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[1,2,3,4,5,6,7,8].map(i => (
                   <div key={i} className="bg-white p-8 rounded-[3rem] border border-zinc-100 shadow-sm flex flex-col items-center group hover:shadow-xl transition-all">
                      <div className="w-20 h-20 rounded-[2rem] bg-zinc-50 mb-6 overflow-hidden border-2 border-white shadow-md">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=NITA_${i}`} alt="student" />
                      </div>
                      <h4 className="font-bold text-lg mb-1">NITian {i}</h4>
                      <p className="text-zinc-400 text-[10px] font-black uppercase mb-6 tracking-widest">NITA • CSE • 2nd Year</p>
                      <div className="flex gap-2 w-full">
                         <Button variant="secondary" className="flex-1 rounded-2xl text-[10px] h-10 px-0">Profile</Button>
                         <Button onClick={() => setPage('chat')} className="flex-1 rounded-2xl text-[10px] h-10 px-0">Connect</Button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        )}
      </main>

      <footer className="py-20 px-6 border-t border-zinc-100 bg-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-900">
                <Zap size={20} className="fill-zinc-900" />
                <span className="text-sm font-black tracking-tight uppercase">NITA CONNECT</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                The exclusive synergy network for NIT Agartala students to match, meet, and collaborate.
              </p>
            </div>

            {/* Developer Profiles */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Core Developers</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between group border-b border-zinc-50 pb-2">
                  <span className="text-sm font-bold text-zinc-900">Bitik</span>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com/in/username1" target="_blank" className="text-zinc-300 hover:text-zinc-900 transition-colors"><Linkedin size={16}/></a>
                    <a href="https://github.com/username1" target="_blank" className="text-zinc-300 hover:text-zinc-900 transition-colors"><Github size={16}/></a>
                  </div>
                </div>
                <div className="flex items-center justify-between group border-b border-zinc-50 pb-2">
                  <span className="text-sm font-bold text-zinc-900">Ishan </span>
                  <div className="flex gap-3">
                    <a href="https://linkedin.com/in/username2" target="_blank" className="text-zinc-300 hover:text-zinc-900 transition-colors"><Linkedin size={16}/></a>
                    <a href="https://github.com/username2" target="_blank" className="text-zinc-300 hover:text-zinc-900 transition-colors"><Github size={16}/></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:text-right">
              <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Platform</h4>
              <ul className="text-xs font-bold text-zinc-900 space-y-3">
                <li><a href="#" className="hover:underline">Safety Center</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 font-bold uppercase tracking-widest text-[9px]">
            <p>© 2024 NIT Agartala Synergy Network</p>
            <p>Made for Campus Innovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}