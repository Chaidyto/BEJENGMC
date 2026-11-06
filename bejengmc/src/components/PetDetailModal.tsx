"use client";

import { useEffect } from "react";
import { X, ArrowLeft, ShoppingCart, Send, Sparkles, HeartPulse, Terminal, ShieldCheck } from "lucide-react";
import { PetData, getTelegramOrderUrl } from "@/data/store-data";
import { PetIcon } from "./StoreIcons";

interface PetDetailModalProps {
  pet: PetData | null;
  onClose: () => void;
  onBuy: (pet: PetData) => void;
}

export default function PetDetailModal({ pet, onClose, onBuy }: PetDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (pet) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pet, onClose]);

  if (!pet) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Top Header Banner */}
        <div className={`relative px-6 py-6 sm:px-8 border-b border-slate-800 bg-gradient-to-r ${pet.accentGradient}`}>
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Store
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
              <PetIcon type={pet.iconType} size="lg" />
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border ${pet.badgeColor}`}>
                    {pet.rarity} Companion
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide mt-1">
                  {pet.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-1">
                  {pet.shortDesc}
                </p>
              </div>
            </div>

            {/* Price Display */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-center sm:text-right shrink-0">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block font-mono">
                Permanent Pet
              </span>
              <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                ${pet.price.toFixed(2)}
              </span>
              <span className="block text-[11px] text-slate-400 font-medium mt-0.5">USD</span>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
          {/* Detailed Lore & Effect Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-4 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              <Sparkles className="w-4 h-4 text-amber-400" /> In-Game Companion Effects
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 font-mono text-sm space-y-2">
              <div className="flex items-center gap-2 text-white font-bold border-b border-slate-800 pb-1.5">
                <HeartPulse className="w-4 h-4 text-rose-400" />
                <span>Effect:</span>
              </div>
              <div className="space-y-1.5 pt-1 pl-3">
                {pet.effects.map((eff, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <span className={`text-base font-bold ${eff.symbolColor}`}>{eff.symbol}</span>
                    <span className="text-slate-200 font-semibold tracking-wide">{eff.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-300 leading-relaxed">
            {pet.fullDesc}
          </div>

          {/* Delivery & Command info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Delivery Method
              </span>
              <p className="text-xs text-slate-300">
                {pet.deliveryInfo}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> In-Game Command
              </span>
              <p className="text-xs text-slate-300 font-mono">
                Use <strong className="text-white">/pet</strong> to equip or summon your companion.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
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
              Selected: <strong className="text-white">{pet.name}</strong> (${pet.price.toFixed(2)})
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getTelegramOrderUrl(pet.name, pet.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-xs font-bold text-sky-300 shadow-md transition hover:bg-sky-500/20 hover:border-sky-400 flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Order on Telegram
            </a>

            <button
              onClick={() => {
                onClose();
                onBuy(pet);
              }}
              type="button"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              PURCHASE ${pet.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
