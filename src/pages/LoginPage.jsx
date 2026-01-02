import React from 'react';
import InputField from '../components/ui/InputField';
import Button from '../components/ui/Button';

const LoginPage = ({ onLogin }) => (
  <div className="min-h-screen flex items-center justify-center p-6">
    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-zinc-100 w-full max-w-md text-center animate-in zoom-in-95 duration-500">
      <h2 className="text-4xl font-bold mb-8 tracking-tighter">NITA Portal</h2>
      <div className="space-y-4">
        <InputField label="Enrollment ID" placeholder="e.g. 21BCE045" />
        <InputField label="Password" type="password" />
        <Button className="w-full h-14" onClick={() => onLogin('NITA Student')}>Sign In</Button>
        <div className="relative pt-4">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-100"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-white px-2 text-zinc-300 font-bold">Or</span></div>
        </div>
        <button onClick={() => onLogin('Google User')} className="w-full h-12 border border-zinc-200 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm hover:bg-zinc-50 transition-all">
          <img src="[https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg](https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg)" className="w-5 h-5" alt="Google" /> Google Login
        </button>
      </div>
    </div>
  </div>
);

export default LoginPage;