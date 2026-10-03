"use client";

import { useEffect } from "react";
import { X, ArrowLeft, Check, Terminal, Shield, Zap, Sparkles, ShoppingCart, Send, Eye, MapPin, Coins, Package } from "lucide-react";
import { RankData, getTelegramOrderUrl } from "@/data/store-data";
import { RankIcon } from "./StoreIcons";

interface RankDetailModalProps {
  rank: RankData | null;
  onClose: () => void;
  onBuy: (rank: RankData) => void;
}

export default function RankDetailModal({ rank, onClose, onBuy }: RankDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (rank) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [rank, onClose]);

  if (!rank) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Dark backdrop with blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col rounded-3xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Top Header Banner */}
        <div className={`relative px-6 py-6 sm:px-8 border-b border-slate-800 bg-gradient-to-r ${rank.accentGradient}`}>
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Ranks
            </button>

            <button
              onClick={onClose}
              type="button"
              className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-4">
              <RankIcon type={rank.iconType} imageUrl={rank.imageUrl} size="lg" />
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border ${rank.badgeColor}`}>
                    Tier {rank.tier}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider font-mono">
                    Duration: {rank.duration}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide mt-1">
                  {rank.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                  {rank.shortDesc}
                </p>
              </div>
            </div>

            {/* Prominent Price Display */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-center sm:text-right shrink-0">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block font-mono">
                {rank.duration}
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                ${rank.price.toFixed(2)}
              </span>
              <span className="block text-[11px] text-slate-400 font-medium mt-0.5">USD</span>
            </div>
          </div>
        </div>

        {/* Scrollable Body: Full Permissions & Benefits */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
          {/* Key Rank Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl border border-slate-800 bg-slate-950 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider block font-sans">⏱ Duration</span>
              <span className="text-white font-black text-sm">{rank.duration}</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1 font-sans">
                <MapPin className="w-3 h-3 text-emerald-400" /> Land Claim
              </span>
              <span className="text-emerald-400 font-black text-sm">{rank.landClaim}</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1 font-sans">
                <Coins className="w-3 h-3 text-amber-400" /> Bonus
              </span>
              <span className="text-amber-400 font-black text-sm">{rank.moneyBonus}</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1 font-sans">
                <Package className="w-3 h-3 text-sky-400" /> Kit
              </span>
              <span className="text-sky-400 font-black text-sm truncate block" title={rank.kitName}>
                {rank.kitName}
              </span>
            </div>
          </div>


          {/* Detailed Description */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300 leading-relaxed">
            {rank.fullDesc}
          </div>

          {/* Extra Permissions Bar */}
          {rank.extraPermissions.length > 0 && (
            <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-4 space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-purple-400" /> Extra Unlocked Permissions
              </div>
              <div className="flex flex-wrap gap-2">
                {rank.extraPermissions.map((perm, idx) => (
                  <span
                    key={idx}
                    className="rounded-xl border border-purple-400/50 bg-slate-950 px-3 py-1 font-mono text-xs font-bold text-purple-300 shadow-sm"
                  >
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Commands Bar */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Terminal className="w-4 h-4 text-emerald-400" />
              Command Shortcuts
            </div>
            <div className="flex flex-wrap gap-2">
              {rank.commands.map((cmd, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1 font-mono text-xs font-semibold text-emerald-400 shadow-sm"
                >
                  {cmd}
                </span>
              ))}
            </div>
          </div>

          {/* Categorized Permissions Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Full Benefits &amp; Privileges
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rank.fullPermissions.map((group, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> {group.category}
                  </h4>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              Back
            </button>
            <div className="hidden sm:block text-xs text-slate-400 font-mono">
              Selected: <strong className="text-white">{rank.name} Rank</strong> (${rank.price.toFixed(2)})
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getTelegramOrderUrl(rank.name, rank.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-xs font-bold text-sky-300 shadow-md transition hover:bg-sky-500/20 hover:border-sky-400 flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Order on Telegram
            </a>

            <button
              onClick={() => {
                onClose();
                onBuy(rank);
              }}
              type="button"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              PURCHASE ${rank.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
