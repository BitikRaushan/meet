import React, { useState, useEffect } from 'react';


import { 
  Heart, 
  X, 
  User, 
  Settings, 
  MessageCircle, 
  CheckCircle, 
  ChevronRight,
  Sparkles,
  MapPin,
  Zap,
  Star,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  Compass,
  Download,
  Shield,
  Users,
  Send,
  ArrowLeft,
  LogIn,
  Info
} from 'lucide-react';

// --- MOCK DATA ---
const INTERESTS = [
  { id: 'cricket', label: 'Cricket', icon: '🏏', color: 'from-emerald-400 to-teal-500' },
  { id: 'singing', label: 'Singing', icon: '🎤', color: 'from-rose-400 to-pink-500' },
  { id: 'library', label: 'Library', icon: '📚', color: 'from-amber-400 to-orange-500' },
  { id: 'gym', label: 'Gym', icon: '💪', color: 'from-blue-400 to-indigo-500' },
  { id: 'coding', label: 'Coding', icon: '💻', color: 'from-violet-400 to-fuchsia-500' },
  { id: 'music', label: 'Music', icon: '🎸', color: 'from-purple-400 to-indigo-600' },
  { id: 'dating', label: 'Dating', icon: '💖', color: 'from-pink-400 to-rose-600' },
  { id: 'coffee', label: 'Coffee', icon: '☕', color: 'from-orange-500 to-amber-700' },
];


const MOCK_PROFILES = [
  {
    id: 1,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/bitik.jpeg',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 2,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/b.jpeg',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 3,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/a.jpeg',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 4,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/c.jpeg',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 5,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/UI.png',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 6,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/kholi.jpg',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 7,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/sunny_45.jpg',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 8,
    name: 'Bitik Raushan',
    age: 21,
    major: 'ECE',
    dist: '1.2 miles away',
    match: '98',
    bio: 'Looking for a coding partner and someone to play cricket with! 🏏 Let\'s build the next big thing.',
    interests: ['cricket', 'coding', 'POetry'],
    avatar: '/UI.png',
    verified: true,
    lastMsg: "Let's catch up at the library!"
  },
  {
    id: 9,
    name: 'Ishani Iyer',
    age: 20,
    major: 'Psychology',
    dist: '0.5 miles away',
    match: '92',
    bio: 'I spend 90% of my time in the library. Come say hi if you like singing or debating! 🎤📚',
    interests: ['library', 'singing', 'coffee'],
    avatar: '/general.jpeg',

    verified: true,
    lastMsg: "Are you coming to the music fest?"
  },
  {
    id: 10,
    name: 'Kabir Verma',
    age: 22,
    major: 'Business Admin',
    dist: '2.4 miles away',
    match: '85',
    bio: 'Gym is life. Also looking for meaningful conversations over a hot cup of coffee. ☕💪',
    interests: ['gym', 'dating', 'coffee'],
    avatar: '/solu.jpeg',
    verified: false,
    lastMsg: "Great workout session today!"
  }
];

// --- SIMULATED BACKEND API ---
const api = {
  login: async (email) => {
    return new Promise(resolve => setTimeout(() => resolve({ id: 'u1', name: 'Alex Johnson', email }), 800));
  },
  fetchProfiles: async () => {
    return new Promise(resolve => setTimeout(() => resolve(MOCK_PROFILES), 600));
  },
  sendConnection: async (profileId) => {
    return new Promise(resolve => setTimeout(() => resolve({ success: true }), 500));
  }
};

// --- STYLES & ANIMATIONS ---
const GlobalStyles = () => (
  <style>{`
    @keyframes float-y { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
    @keyframes rotate-3d { 0%, 100% { transform: rotateX(10deg) rotateY(-10deg); } 50% { transform: rotateX(15deg) rotateY(10deg); } }
    @keyframes entrance { from { opacity: 0; transform: translateY(30px); filter: blur(10px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
    @keyframes mesh-pulse { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.25; transform: scale(1.1); } }
    .animate-float { animation: float-y 6s ease-in-out infinite; }
    .animate-3d { animation: rotate-3d 12s ease-in-out infinite; }
    .animate-in { animation: entrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    .animate-mesh { animation: mesh-pulse 10s ease-in-out infinite; }
  `}</style>
);

// --- REUSABLE COMPONENTS ---

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-[#FF4B2B] via-[#FF416C] to-[#9124D6] text-white shadow-2xl hover:shadow-rose-500/50 hover:-translate-y-1',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10',
    white: 'bg-white text-black hover:bg-gray-100 shadow-xl',
    danger: 'bg-rose-500/10 border border-rose-500/20 text-rose-500 hover:bg-rose-500 hover:text-white',
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`px-10 py-5 rounded-[2.5rem] font-black transition-all duration-300 flex items-center justify-center gap-3 uppercase text-sm tracking-tighter active:scale-95 relative overflow-hidden ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

const Campus3DIllustration = () => (
  <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center perspective-1000">
    <img src="UI.png" alt="" />
    <div className="relative w-64 h-[440px] bg-gradient-to-br from-gray-800 to-black rounded-[3rem] border-8 border-gray-700 shadow-2xl animate-3d flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full h-full bg-indigo-900/40 rounded-[2.2rem] flex flex-col items-center p-4 relative">
        <div className="w-20 h-1 bg-white/20 rounded-full mb-8"></div>
        <div className="w-full space-y-4">
          <div className="w-full h-32 bg-white/10 rounded-2xl animate-pulse"></div>
          <div className="w-3/4 h-4 bg-white/10 rounded-full"></div>
          <div className="w-1/2 h-4 bg-white/10 rounded-full"></div> 
          <img src="c.jpeg" alt="" />
          

        </div>
      </div>
     
    </div>

    <div className="absolute top-[10%] left-[0%] w-44 h-52 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl p-5 flex flex-col animate-float transform rotate-[-12deg] z-20">
      <div className="w-16 h-16 bg-indigo-500 rounded-3xl mb-4 overflow-hidden shadow-lg ring-4 ring-white/10">
        <img src="a.jpeg" alt="" />
        
      </div>
      <div className="h-3 w-2/3 bg-white/40 rounded-full mb-2"></div>
      <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
      <div className="absolute top-4 right-4 text-rose-500 animate-pulse"><Heart size={16} fill="currentColor" /></div>
    </div>

    <div className="absolute bottom-[10%] right-[0%] w-44 h-52 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl p-5 flex flex-col animate-float transform rotate-[8deg] z-20" style={{ animationDelay: '1s' }}>
      <div className="w-16 h-16 bg-rose-500 rounded-3xl mb-4 overflow-hidden shadow-lg ring-4 ring-white/10">
        <img src="bitik.jpeg" alt="" />
      </div>
      <div className="h-3 w-3/4 bg-white/40 rounded-full mb-2"></div>
      <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
      <div className="absolute top-4 right-4 text-emerald-400"><BadgeCheck size={18} fill="currentColor" className="text-white" /></div>
    </div>

    <div className="absolute top-[-5%] right-[20%] text-6xl drop-shadow-2xl animate-float" style={{ animationDelay: '2s' }}>🏏</div>
    <div className="absolute bottom-[-5%] left-[10%] text-6xl drop-shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>🎸</div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
  </div>
);

// --- PAGES ---

const Landing = ({ onGetStarted }) => (
  <div className="min-h-screen bg-[#020202] relative flex flex-col items-center p-6 overflow-hidden">
    <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-rose-600/10 rounded-full blur-[160px] animate-mesh" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[90%] h-[90%] bg-indigo-600/10 rounded-full blur-[160px] animate-mesh" style={{ animationDelay: '-5s' }} />

    {/* Header Navigation */}
    <nav className="absolute top-10 left-0 w-full px-8 lg:px-20 flex justify-between items-center z-50 animate-in">
      <div className="flex items-center gap-4 bg-white/5 backdrop-blur-3xl border border-white/10 px-6 py-3 rounded-[2rem] shadow-xl">
        <div className="bg-white p-2 rounded-xl flex items-center justify-center">
          <Compass size={24} className="text-[#FF4B2B]" strokeWidth={2.5} />
        </div>
        <span className="text-white text-2xl font-black tracking-tighter uppercase italic">CampusCircle</span>
      </div>

      <div className="hidden lg:flex items-center gap-10 bg-white/5 backdrop-blur-2xl border border-white/10 px-10 py-4 rounded-[2.5rem] shadow-xl">
        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group">
          <Shield size={16} /> <span className="text-[10px] font-black uppercase tracking-[0.2em]">Safety</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group">
          <Users size={16} /> <span className="text-[10px] font-black uppercase tracking-[0.2em]">Community</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer group">
          <Download size={16} /> <span className="text-[10px] font-black uppercase tracking-[0.2em]">Download</span>
        </div>
      </div>
    </nav>

    <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16 z-10 pt-48 lg:pt-0">
    
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 animate-in">
        
        <div className="px-6 py-2 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 inline-flex items-center gap-3">
          <Sparkles size={18} className="text-yellow-400" />
          <span className="text-white font-black text-xs tracking-widest uppercase">The #1 Campus Network</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
          MEET YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B2B] via-[#FF416C] to-[#9124D6]">
            CIRCLE.
          </span>
        </h1>
        
        <p className="text-white/40 text-2xl max-w-xl font-semibold leading-tight italic">
          Navigate campus life with the real people who match your vibe.
        </p>

        <Button onClick={onGetStarted} className="w-full max-w-md lg:max-w-xs py-7 rounded-[2.5rem]">
          START SWIPING <ChevronRight strokeWidth={5} />
        </Button>
      </div>

      <div className="flex-1 w-full max-w-xl animate-in" style={{ animationDelay: '0.4s' }}>
        <Campus3DIllustration />
      </div>
    </div>
  </div>
);



const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = await api.login(email);
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-indigo-600/5 rounded-full blur-[160px]" />
      <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3.5rem] shadow-2xl animate-in z-10">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <LogIn className="text-indigo-400" size={32} />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Welcome Back</h2>
          <p className="text-white/30 text-sm mt-2">Sign in with your campus email</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] px-2">University Email</label>
            <input required type="email" placeholder="name@university.edu" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" />
          </div>
          <Button disabled={loading} className="w-full py-6 rounded-2xl">
            {loading ? 'Authenticating...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
};

const Signup = ({ onFinish }) => {
  const [selected, setSelected] = useState([]);
  return (
    <div className="min-h-screen bg-[#050508] p-8 pt-24 flex flex-col items-center">
      <div className="w-full max-w-md z-10 animate-in">
        <h2 className="text-5xl font-black text-white tracking-tighter mb-12 uppercase leading-none">PICK YOUR <br/>SQUAD VIBE.</h2>
        <div className="grid grid-cols-2 gap-4 mb-24">
          {INTERESTS.map((int) => (
            <button key={int.id} onClick={() => setSelected(prev => prev.includes(int.id) ? prev.filter(i => i !== int.id) : [...prev, int.id])} className={`flex items-center gap-3 px-6 py-5 rounded-3xl border-2 transition-all duration-300 ${selected.includes(int.id) ? `bg-white text-black border-white scale-105 shadow-2xl` : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'}`}>
              <span className="text-2xl">{int.icon}</span>
              <span className="font-black uppercase text-[10px] tracking-widest">{int.label}</span>
            </button>
          ))}
        </div>
        <div className="fixed bottom-10 left-0 right-0 px-8 flex justify-center">
          <Button onClick={onFinish} disabled={selected.length < 2} className="w-full max-w-md py-7">Finalize Setup</Button>
        </div>
      </div>
    </div>
  );
};

const Discover = ({ onAction, onProfile, onChat }) => {
  const [profiles, setProfiles] = useState([]);
  const [idx, setIdx] = useState(0);
  const [swipe, setSwipe] = useState(null);

  useEffect(() => {
    api.fetchProfiles().then(setProfiles);
  }, []);

  if (profiles.length === 0) return <div className="min-h-screen bg-black flex items-center justify-center text-white/20 font-black animate-pulse uppercase tracking-[0.5em]">Searching Campus...</div>;

  const current = profiles[idx];

  const handleSwipe = async (dir) => {
    setSwipe(dir);
    if (dir === 'right') await api.sendConnection(current.id);
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % profiles.length);
      setSwipe(null);
      if (dir === 'right') onAction("REQUEST SENT! ✨");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#08080a] flex flex-col overflow-hidden text-white">
      <nav className="px-8 py-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/10">
          <Compass className="text-[#FF4B2B]" size={22} strokeWidth={2.5} />
          <span className="font-black text-2xl tracking-tighter uppercase italic">CampusCircle</span>
        </div>
        <div className="flex gap-4">
          <button onClick={onChat} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"><MessageCircle size={22} /></button>
          <button onClick={onProfile} className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"><User size={22} /></button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <div className={`w-full max-w-sm transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${swipe === 'right' ? 'translate-x-[150%] rotate-45 opacity-0' : swipe === 'left' ? '-translate-x-[150%] -rotate-45 opacity-0' : 'opacity-100'}`}>
          <div className="relative bg-[#0d0d12]/90 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] overflow-hidden flex flex-col h-[600px] shadow-2xl">
            <div className="h-2/3 relative">
              <img src={current.avatar} className="w-full h-full object-cover bg-gray-900" alt="" />
              <div className="absolute top-8 left-8">
                <div className="bg-gradient-to-r from-emerald-500/90 to-teal-600/90 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/20">{current.match}% Match</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#0d0d12] to-transparent">
                <div className="flex items-end gap-3 mb-1">
                  <h3 className="text-4xl font-black tracking-tighter">{current.name}</h3>
                  <span className="text-2xl font-bold opacity-40">{current.age}</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF4B2B] font-black text-[10px] uppercase tracking-widest"><MapPin size={12} strokeWidth={3} /> {current.dist}</div>
              </div>
            </div>
            <div className="p-10 pt-4 flex-1 flex flex-col">
              <span className="text-white/30 font-black text-[11px] uppercase tracking-[0.2em] mb-3">{current.major}</span>
              <p className="text-white/60 text-lg font-medium leading-tight italic line-clamp-2">"{current.bio}"</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {current.interests.map(i => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 text-white/50 text-[9px] font-black rounded-xl border border-white/10 uppercase tracking-widest">{i}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12 pt-6 px-10 flex justify-center items-center gap-8 z-50">
        <button onClick={() => handleSwipe('left')} className="w-20 h-20 rounded-[2.5rem] bg-white/5 border border-white/10 text-white/20 hover:text-rose-500 transition-all flex items-center justify-center shadow-xl"><X size={40} /></button>
        <button onClick={() => handleSwipe('right')} className="w-24 h-24 rounded-[3rem] bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-transform"><Heart size={44} fill="black" /></button>
        <button className="w-20 h-20 rounded-[2.5rem] bg-white/5 border border-white/10 text-white/20 flex items-center justify-center shadow-xl"><Zap size={36} /></button>
      </div>
    </div>
  );
};

const Chat = ({ onBack }) => (
  <div className="min-h-screen bg-[#050508] text-white flex flex-col">
    <nav className="p-8 border-b border-white/5 flex items-center gap-6">
      <button onClick={onBack} className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"><ArrowLeft size={20} /></button>
      <h2 className="text-2xl font-black uppercase tracking-tighter italic">Messages</h2>
    </nav>
    <div className="flex-1 flex overflow-hidden">
      <div className="w-full md:w-80 border-r border-white/5 p-6 space-y-4 overflow-y-auto">
        {MOCK_PROFILES.map(p => (
          <div key={p.id} className="flex items-center gap-4 p-5 bg-white/5 rounded-[2rem] border border-white/10 cursor-pointer hover:bg-white/10 transition-all">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/10"><img src={p.avatar} alt="" /></div>
            <div className="flex-1 min-w-0">
              <h4 className="font-black text-sm uppercase tracking-tight">{p.name}</h4>
              <p className="text-xs text-white/30 truncate italic">{p.lastMsg}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-1 flex-col items-center justify-center p-20 text-center opacity-20">
        <MessageCircle size={100} strokeWidth={1} className="mb-8" />
        <h3 className="text-2xl font-black uppercase tracking-widest">Select a Circle</h3>
        <p className="font-medium italic">Start a conversation with your connections.</p>
      </div>
    </div>
  </div>
);

const Profile = ({ onBack, onLogout }) => (
  <div className="min-h-screen bg-[#050508] p-8 flex flex-col items-center text-white overflow-y-auto">
    <div className="w-full max-w-md animate-in py-10">
      <div className="flex justify-between items-center mb-16">
        <button onClick={onBack} className="p-4 bg-white/5 border border-white/10 rounded-2xl"><ArrowLeft /></button>
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 italic">Identity</h3>
        <button className="p-4 bg-white/5 border border-white/10 rounded-2xl"><Settings /></button>
      </div>
      <div className="text-center mb-16">
        <div className="relative inline-block mb-8">
           <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full"></div>
           <div className="w-44 h-44 rounded-[4rem] border-[12px] border-white/5 shadow-2xl overflow-hidden bg-white/5 relative z-10">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=CurrentUser" alt="" />
           </div>
        </div>
        <h3 className="text-5xl font-black tracking-tighter uppercase">ALEX J.</h3>
        <p className="text-[#FF4B2B] font-black uppercase tracking-[0.2em] text-[10px] mt-2">Visual Design • Senior Year</p>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-[3.5rem] p-12 mb-12 backdrop-blur-xl">
        <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] block mb-4">The Narrative</label>
        <p className="text-white/80 font-medium text-xl leading-snug italic">"Designing systems and playing electric guitar. Looking for creative souls to build the future with."</p>
      </div>
      <Button variant="danger" onClick={onLogout} className="w-full py-8 text-xl">Disconnect</Button>
    </div>
  </div>
);

// --- MAIN APP ROUTER ---

export default function App() {
  const [view, setView] = useState('landing');
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const renderView = () => {
    switch (view) {
      case 'landing': 
        return <Landing onGetStarted={() => setView(user ? 'discover' : 'login')} />;
      case 'login': 
        return <Login onLogin={(u) => { setUser(u); setView('signup'); }} />;
      case 'signup': 
        return <Signup onFinish={() => setView('discover')} />;
      case 'discover': 
        return <Discover onAction={showToast} onProfile={() => setView('profile')} onChat={() => setView('chat')} />;
      case 'chat': 
        return <Chat onBack={() => setView('discover')} />;
      case 'profile': 
        return <Profile onBack={() => setView('discover')} onLogout={() => { setUser(null); setView('landing'); }} />;
      default: 
        return <Landing onGetStarted={() => setView('login')} />;
    }
  };

  return (
    <div className="font-sans antialiased bg-[#020202] text-white selection:bg-rose-500/30">
      <GlobalStyles />
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-[300] transition-all duration-700 ${toast.show ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="bg-white text-black px-10 py-5 rounded-[2.5rem] shadow-2xl flex items-center gap-5 border border-white/20">
          <div className="bg-emerald-500 p-2 rounded-full shadow-lg"><CheckCircle className="text-white" size={24} /></div>
          <span className="font-black text-lg tracking-tight uppercase italic">{toast.message}</span>
        </div>
      </div>
      {renderView()}
    </div>
  );
  
}