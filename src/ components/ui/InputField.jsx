import React from 'react';

const InputField = ({ label, error, ...props }) => (
  <div className="w-full text-left">
    {label && <label className="block text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-2 px-1">{label}</label>}
    <input className={`w-full px-5 py-4 bg-white border rounded-2xl focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-900 outline-none transition-all ${error ? 'border-red-500' : 'border-zinc-200'}`} {...props} />
    {error && <p className="text-red-500 text-[10px] mt-1 font-bold ml-1">{error}</p>}
  </div>
);

export default InputField;

  