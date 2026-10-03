"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sliders, Volume2, Globe, Bell, Shield, Sparkles } from "lucide-react";

export default function SettingsPage() {
  const [soundEffects, setSoundEffects] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [notifications, setNotifications] = useState(true);
  const [animations, setAnimations] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO HOME
          </Link>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Preferences &amp; Display
          </span>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-emerald-400" /> Settings
          </div>
          <h1 className="text-3xl font-black text-white">Store &amp; Interface Preferences</h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Customize how BEJENGMC web store and interface elements display on your device.
          </p>
        </div>

        {/* Settings List */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6 divide-y divide-slate-800/80">
          {/* Currency setting */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-0.5">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" /> Currency Display
              </span>
              <p className="text-xs text-slate-400">Default currency for store pricing</p>
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs font-mono font-bold text-amber-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="CAD">CAD ($)</option>
            </select>
          </div>

          {/* Sound effects */}
          <div className="flex items-center justify-between pt-6">
            <div className="space-y-0.5">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-emerald-400" /> Minecraft UI Sounds
              </span>
              <p className="text-xs text-slate-400">Play button clicks and reward chime effects</p>
            </div>
            <button
              type="button"
              onClick={() => setSoundEffects(!soundEffects)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                soundEffects ? "bg-emerald-500" : "bg-slate-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  soundEffects ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Glow & Visual animations */}
          <div className="flex items-center justify-between pt-6">
            <div className="space-y-0.5">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" /> Particle &amp; Glow Animations
              </span>
              <p className="text-xs text-slate-400">Enable glowing rank halos and ambient particle effects</p>
            </div>
            <button
              type="button"
              onClick={() => setAnimations(!animations)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                animations ? "bg-emerald-500" : "bg-slate-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  animations ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Order Delivery notifications */}
          <div className="flex items-center justify-between pt-6">
            <div className="space-y-0.5">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-emerald-400" /> Order Status Notifications
              </span>
              <p className="text-xs text-slate-400">Receive webhook delivery updates</p>
            </div>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications ? "bg-emerald-500" : "bg-slate-800"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
