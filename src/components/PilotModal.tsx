import { useState, FormEvent } from 'react';
import { X, Check } from 'lucide-react';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facilityType: 'Household',
    location: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-xl border border-white/[0.1] bg-[#0c0d12] p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Pilot Program
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">
              Join the TerraFIQ pilot
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              Register your household or facility for early deployment of the Power Profile Box and local Agent Hub.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jordan Ellis"
                  className="w-full px-3 py-2 rounded-md bg-[#08090c] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jordan@domain.com"
                  className="w-full px-3 py-2 rounded-md bg-[#08090c] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  Property type
                </label>
                <select
                  value={formData.facilityType}
                  onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-[#08090c] border border-white/[0.08] text-sm text-zinc-100 focus:outline-none focus:border-zinc-400"
                >
                  <option value="Household">Household / Residence</option>
                  <option value="SME">Small / Medium Business</option>
                  <option value="School">School / Campus</option>
                  <option value="Clinic">Clinic / Healthcare</option>
                  <option value="Factory">Factory / Light Industrial</option>
                  <option value="Utility">Utility / Municipality</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  Location (City, Country)
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="London, UK"
                  className="w-full px-3 py-2 rounded-md bg-[#08090c] border border-white/[0.08] text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-2 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white transition-colors cursor-pointer"
                >
                  Submit application
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-display text-white">
              Application submitted
            </h3>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
              Thank you, {formData.name}. We have received your pilot registration for {formData.location}. We will be in touch at {formData.email}.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-md bg-zinc-800 text-zinc-200 text-xs font-medium hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
