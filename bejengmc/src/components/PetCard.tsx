import { ChevronRight, Sparkles, HeartPulse } from "lucide-react";
import { PetData } from "@/data/store-data";
import { PetIcon } from "./StoreIcons";

interface PetCardProps {
  pet: PetData;
  onSelect: (pet: PetData) => void;
  onBuy: (pet: PetData) => void;
}

export default function PetCard({ pet, onSelect, onBuy }: PetCardProps) {
  return (
    <div
      onClick={() => onSelect(pet)}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-gradient-to-b ${pet.accentGradient} p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${pet.glowColor}`}
    >
      <div>
        {/* Rarity & Pet Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider border ${pet.badgeColor}`}>
            {pet.rarity}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-mono font-bold text-amber-300 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            COMPANION
          </span>
        </div>

        {/* Pet Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <PetIcon type={pet.iconType} size="md" />
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              {pet.name}
            </h3>
            <span className="text-xs text-slate-400 font-mono">Permanent Buff Companion</span>
          </div>
        </div>

        {/* Short description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 min-h-[44px]">
          {pet.shortDesc}
        </p>

        {/* Minecraft Lore Effect Box */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3.5 mb-5 font-mono text-xs space-y-1.5 shadow-inner">
          <div className="flex items-center gap-1.5 text-white font-bold tracking-wide border-b border-slate-800/80 pb-1">
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
            <span>Effect:</span>
          </div>
          <div className="space-y-1 pt-0.5 pl-2">
            {pet.effects.map((eff, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className={`font-bold ${eff.symbolColor}`}>{eff.symbol}</span>
                <span className="text-slate-300 font-semibold">{eff.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Price & Actions */}
      <div className="pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono">Total Price</span>
          <span className="text-2xl font-black text-white font-mono group-hover:text-amber-300 transition-colors">
            ${pet.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(pet);
            }}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white text-center"
          >
            Inspect
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBuy(pet);
            }}
            className="flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-black text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:brightness-110 hover:shadow-amber-500/30 flex items-center justify-center gap-1 active:scale-95 uppercase tracking-wider"
          >
            BUY NOW <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
