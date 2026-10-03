import { Sparkles, ChevronRight, Coins, MapPin, Package, Terminal } from "lucide-react";
import { RankData } from "@/data/store-data";
import { RankIcon } from "./StoreIcons";

interface RankCardProps {
  rank: RankData;
  onSelect: (rank: RankData) => void;
  onBuy: (rank: RankData) => void;
}

export default function RankCard({ rank, onSelect, onBuy }: RankCardProps) {
  const isHighestTier = rank.id === "somlor";

  return (
    <div
      onClick={() => onSelect(rank)}
      className={`group relative flex flex-col justify-between rounded-3xl border ${
        isHighestTier
          ? "border-amber-400/70 bg-gradient-to-b from-amber-500/20 via-purple-950/40 to-slate-950 ring-2 ring-amber-400/40 shadow-[0_0_40px_rgba(245,158,11,0.35)]"
          : "border-slate-800/90 bg-gradient-to-b " + rank.accentGradient + " shadow-xl"
      } p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${rank.glowColor}`}
    >
      {/* Top Banner: Supreme Badge or Tier Badge & Price */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider border ${
              isHighestTier
                ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border-amber-300 shadow-md animate-pulse"
                : rank.badgeColor
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {isHighestTier ? "★ HIGHEST TIER 6" : `Tier ${rank.tier}`}
          </span>

          <div className="text-right">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block font-mono">
              {rank.duration}
            </span>
            <span className="text-3xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors font-mono">
              ${rank.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Rank Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <RankIcon type={rank.iconType} imageUrl={rank.imageUrl} size="md" />
          <div>
            <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-amber-300 transition-colors">
              {rank.name}
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Duration: <strong className="text-white">{rank.duration}</strong>
            </span>
          </div>
        </div>

        {/* Feature Specs Grid */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-2.5 mb-5 font-mono text-xs">
          {/* Duration */}
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span className="text-slate-400 flex items-center gap-1.5 font-sans font-medium text-xs">
              ⏱ Duration
            </span>
            <span className="font-black text-white uppercase">{rank.duration}</span>
          </div>

          {/* Land Claim */}
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span className="text-slate-400 flex items-center gap-1.5 font-sans font-medium text-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Land Claim
            </span>
            <span className="font-black text-emerald-400">{rank.landClaim}</span>
          </div>

          {/* Money Bonus */}
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span className="text-slate-400 flex items-center gap-1.5 font-sans font-medium text-xs">
              <Coins className="w-3.5 h-3.5 text-amber-400" /> Money Bonus
            </span>
            <span className="font-black text-amber-400">{rank.moneyBonus} MONEY</span>
          </div>

          {/* Kit Included */}
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
            <span className="text-slate-400 flex items-center gap-1.5 font-sans font-medium text-xs">
              <Package className="w-3.5 h-3.5 text-sky-400" /> Kit Included
            </span>
            <span className="font-black text-sky-400 truncate max-w-[140px] text-right" title={rank.kitName}>
              {rank.kitName}
            </span>
          </div>

          {/* Extra Permissions */}
          {rank.extraPermissions.length > 0 && (
            <div className="flex items-center justify-between pt-0.5">
              <span className="text-slate-400 flex items-center gap-1.5 font-sans font-medium text-xs">
                <Terminal className="w-3.5 h-3.5 text-purple-400" /> Permissions
              </span>
              <div className="flex flex-wrap gap-1 justify-end">
                {rank.extraPermissions.map((perm, pIdx) => (
                  <span
                    key={pIdx}
                    className="rounded bg-purple-500/20 border border-purple-400/40 px-1.5 py-0.5 text-[10px] font-black text-purple-300"
                  >
                    {perm}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Short description */}
        <p className="text-xs text-slate-300 leading-relaxed mb-5 min-h-[36px]">
          {rank.shortDesc}
        </p>
      </div>

      {/* Action Buttons: Details + Buy Now */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(rank);
          }}
          className="rounded-xl border border-slate-700 bg-slate-800/70 hover:bg-slate-700 px-4 py-3 text-xs font-bold text-slate-300 transition"
        >
          Details
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onBuy(rank);
          }}
          className={`flex-1 rounded-xl py-3 px-4 text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 shadow-lg ${
            isHighestTier
              ? "bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 shadow-amber-500/30 hover:brightness-110"
              : "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20 hover:brightness-110"
          }`}
        >
          BUY NOW (${rank.price.toFixed(2)}) <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
