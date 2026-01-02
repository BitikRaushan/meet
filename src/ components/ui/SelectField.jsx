export default function SelectField({ label, options, ...props }) {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-xs font-bold uppercase text-zinc-400">
            {label}
          </label>
        )}
        <select {...props} className="w-full px-4 py-3 border rounded-xl">
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    );
  }
  