"use client";

import { useEffect } from "react";
import { X, ArrowLeft, PackageCheck, ShoppingCart, ShieldCheck, Sparkles, Send } from "lucide-react";
import { StoreItemData, getTelegramOrderUrl, TELEGRAM_USERNAME } from "@/data/store-data";
import { ItemIcon } from "./StoreIcons";

interface ItemDetailModalProps {
  item: StoreItemData | null;
  onClose: () => void;
  onBuy: (item: StoreItemData) => void;
}

export default function ItemDetailModal({ item, onClose, onBuy }: ItemDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Dark backdrop with blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col rounded-3xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Top Header */}
        <div className="relative px-6 py-6 sm:px-8 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Items
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
              <ItemIcon type={item.iconType} imageUrl={item.imageUrl} size="lg" />
              <div>
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border ${item.badgeColor}`}>
                    {item.rarity}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-800 px-2 py-0.5 text-xs font-mono font-bold text-slate-200">
                    <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Amount: {item.amount}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1">
                  {item.name}
                </h2>
                <span className="text-xs text-slate-400">Server In-Game Deliverable Item</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-center sm:text-right shrink-0">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block">Total Price</span>
              <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                ${item.price.toFixed(2)}
              </span>
              <span className="block text-[11px] text-slate-400 font-medium mt-0.5">{item.amount} included</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
          {/* Item Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Item Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              {item.fullDesc}
            </p>
          </div>

          {/* Minecraft Tooltip Box (Dark Purple Obsidian Lore Box) */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              In-Game Item Tooltip Lore
            </h3>
            <div className="rounded-xl border-2 border-purple-900/60 bg-[#100720] p-4 shadow-inner shadow-purple-950/50 font-mono text-xs sm:text-sm space-y-1">
              {item.minecraftLore.map((line, idx) => {
                const cleanText = line.replace(/§[0-9a-fk-or]/g, "");
                let textColor = "text-slate-300";
                if (line.includes("§d") || line.includes("§5")) textColor = "text-fuchsia-400 font-bold";
                else if (line.includes("§b") || line.includes("§3") || line.includes("§9")) textColor = "text-cyan-400";
                else if (line.includes("§a") || line.includes("§2")) textColor = "text-emerald-400";
                else if (line.includes("§e") || line.includes("§6")) textColor = "text-amber-400";
                else if (line.includes("§c") || line.includes("§4")) textColor = "text-rose-400";
                else if (line.includes("§7")) textColor = "text-slate-400";

                return (
                  <p key={idx} className={`${textColor} leading-tight`}>
                    {cleanText}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Delivery & Security Note */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex items-start gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200 block mb-0.5">Automated In-Game Delivery</strong>
              {item.deliveryInfo} Once your payment completes, BejengWebBridge instantly dispatches this item to your player account.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
          >
            Back
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
            <a
              href={getTelegramOrderUrl(item.name, item.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-xs font-bold text-sky-300 shadow-md transition hover:bg-sky-500/20 hover:border-sky-400 flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Order on Telegram
            </a>

            <button
              onClick={() => {
                onClose();
                onBuy(item);
              }}
              type="button"
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              BUY {item.amount} FOR ${item.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
