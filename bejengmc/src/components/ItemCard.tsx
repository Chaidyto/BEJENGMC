import { ChevronRight, PackageCheck } from "lucide-react";
import { StoreItemData } from "@/data/store-data";
import { ItemIcon } from "./StoreIcons";

interface ItemCardProps {
  item: StoreItemData;
  onSelect: (item: StoreItemData) => void;
  onBuy: (item: StoreItemData) => void;
}

export default function ItemCard({ item, onSelect, onBuy }: ItemCardProps) {
  return (
    <div
      onClick={() => onSelect(item)}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${item.glowColor}`}
    >
      <div>
        {/* Rarity & Amount */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider border ${item.badgeColor}`}>
            {item.rarity}
          </span>
          <span className="inline-flex items-center gap-1 rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-mono font-bold text-slate-200 border border-slate-700">
            <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
            {item.amount}
          </span>
        </div>

        {/* Item Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <ItemIcon type={item.iconType} imageUrl={item.imageUrl} size="md" />
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              {item.name}
            </h3>
            <span className="text-xs text-slate-400">Server In-Game Item</span>
          </div>
        </div>

        {/* Short description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4 min-h-[44px]">
          {item.shortDesc}
        </p>

        {/* Minecraft Lore Preview */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 mb-5 font-mono text-[11px] text-slate-300 space-y-0.5">
          {item.minecraftLore.slice(0, 3).map((lore, idx) => (
            <p key={idx} className="truncate">
              {lore.replace(/§[0-9a-fk-or]/g, "")}
            </p>
          ))}
        </div>
      </div>

      {/* Price & Actions */}
      <div className="pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Total Price</span>
          <span className="text-2xl font-black text-white font-mono group-hover:text-amber-300 transition-colors">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item);
            }}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white text-center"
          >
            Inspect
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onBuy(item);
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
