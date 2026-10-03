"use client";

import { useState } from "react";
import { X, Send, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { RankData, StoreItemData, getTelegramOrderUrl, TELEGRAM_USERNAME, TELEGRAM_LINK } from "@/data/store-data";
import { RankIcon, ItemIcon } from "./StoreIcons";

interface CheckoutModalProps {
  product: RankData | StoreItemData | null;
  onClose: () => void;
}

export default function CheckoutModal({ product, onClose }: CheckoutModalProps) {
  const [username, setUsername] = useState("");
  const [edition, setEdition] = useState<"JAVA" | "BEDROCK">("JAVA");

  if (!product) return null;

  const isRank = "commands" in product;
  const telegramUrl = getTelegramOrderUrl(product.name, product.price, username, edition);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-sky-500/40 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/30">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 border border-sky-400/40">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Buy with Telegram</h3>
              <span className="text-[11px] text-sky-400 font-mono">@{TELEGRAM_USERNAME}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Item Order Summary Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {isRank ? (
                <RankIcon type={product.iconType} imageUrl={product.imageUrl} size="sm" />
              ) : (
                <ItemIcon type={product.iconType} imageUrl={product.imageUrl} size="sm" />
              )}
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Selected Product</span>
                <h4 className="text-base font-black text-white">{product.name}</h4>
                <p className="text-xs text-slate-400">
                  {isRank ? "Permanent Lifetime Rank" : `Deliverable (${(product as StoreItemData).amount})`}
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl font-black text-amber-400 font-mono">${product.price.toFixed(2)}</span>
              <span className="block text-[10px] text-slate-500 font-medium">USD</span>
            </div>
          </div>

          {/* Minecraft Username */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span>Your Minecraft Username (IGN)</span>
              <span className="text-[11px] text-emerald-400 lowercase font-normal">*for delivery</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Steve, Alex, Notch"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>

          {/* Edition Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Minecraft Edition
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setEdition("JAVA")}
                className={`rounded-xl border py-2.5 px-3 text-xs font-bold transition ${
                  edition === "JAVA"
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                    : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white"
                }`}
              >
                ☕ Java Edition
              </button>
              <button
                type="button"
                onClick={() => setEdition("BEDROCK")}
                className={`rounded-xl border py-2.5 px-3 text-xs font-bold transition ${
                  edition === "BEDROCK"
                    ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                    : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white"
                }`}
              >
                📱 Bedrock (PE / Console)
              </button>
            </div>
          </div>

          {/* Telegram Instructions Box */}
          <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-slate-950 to-blue-950/20 p-4 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Direct Admin Purchase
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We accept payments via <strong>ABA Bank, Bakong (KHQR), Wing, Local Bank Transfers, and USDT / Crypto</strong>.
            </p>
            <p className="text-[11px] text-slate-400">
              Clicking below will open Telegram chat with <strong className="text-sky-300 font-mono">@to_chaidy</strong> with your order pre-filled!
            </p>
          </div>

          {/* Action Button: Connect on Telegram */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 px-4 py-4 text-sm font-black text-slate-950 shadow-xl shadow-sky-500/30 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5 text-slate-950" />
            OPEN TELEGRAM TO BUY (${product.price.toFixed(2)})
          </a>

          {/* Direct Link */}
          <div className="text-center pt-1">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-sky-400 hover:underline font-mono"
            >
              Direct Link: https://t.me/to_chaidy <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
