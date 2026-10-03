"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Sparkles, ShoppingBag, Package, Zap, HelpCircle, Search, Send, Layers } from "lucide-react";
import { STORE_RANKS, STORE_ITEMS, RankData, StoreItemData, TELEGRAM_USERNAME } from "@/data/store-data";
import RankCard from "@/components/RankCard";
import ItemCard from "@/components/ItemCard";
import RankDetailModal from "@/components/RankDetailModal";
import ItemDetailModal from "@/components/ItemDetailModal";
import CheckoutModal from "@/components/CheckoutModal";

export default function StorePage() {
  const [activeTab, setActiveTab] = useState<"RANK" | "ITEMS">("RANK");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRank, setSelectedRank] = useState<RankData | null>(null);
  const [selectedItem, setSelectedItem] = useState<StoreItemData | null>(null);
  const [checkoutProduct, setCheckoutProduct] = useState<RankData | StoreItemData | null>(null);

  // Filter items or ranks based on search query
  const filteredRanks = STORE_RANKS.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.kitName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItems = STORE_ITEMS.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.amount.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Back Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO HOME
            </Link>
            <div className="h-4 w-px bg-slate-800" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              ● Official Network Store
            </span>
          </div>

          {/* Currency / Region badge */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-slate-200">
              Currency: <strong className="text-amber-400">USD ($)</strong>
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-emerald-400">
              <Zap className="w-3.5 h-3.5" /> Instant Delivery
            </span>
          </div>
        </div>

        {/* Store Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/15 via-slate-900/90 to-purple-950/30 p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-2xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" /> BeJengMC Official Store
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Upgrade Your Experience
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Purchase <strong>Ranks, Kits, Items, Money, Keys, Mace, DailyPass, and Wolf Spawners</strong>. Connect directly on Telegram (<strong className="text-sky-400 font-mono">@{TELEGRAM_USERNAME}</strong>) for instant in-game delivery.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <img
              src="/logo.png"
              alt="BeJengMC Server Logo"
              width={176}
              height={176}
              style={{ maxWidth: "176px", maxHeight: "176px" }}
              className="h-32 w-32 sm:h-44 sm:w-44 object-contain drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Main Store Navigation: 2 Main Categories (RANK & ITEMS) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-1.5 shadow-inner">
            <button
              type="button"
              onClick={() => {
                setActiveTab("RANK");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-extrabold tracking-wider transition-all duration-200 ${
                activeTab === "RANK"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Shield className="w-4 h-4" />
              1. RANKS
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${activeTab === "RANK" ? "bg-slate-950/40 text-white font-bold" : "bg-slate-800 text-slate-400"}`}>
                {STORE_RANKS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("ITEMS");
                setSearchQuery("");
              }}
              className={`flex items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-extrabold tracking-wider transition-all duration-200 ${
                activeTab === "ITEMS"
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.02]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Package className="w-4 h-4" />
              2. ITEMS
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${activeTab === "ITEMS" ? "bg-slate-950/20 text-slate-950 font-bold" : "bg-slate-800 text-slate-400"}`}>
                {STORE_ITEMS.length}
              </span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Category Header & Items Container */}
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 space-y-6">
          {/* Category Title & Back Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                  {activeTab === "RANK" ? "Server Ranks" : "Server In-Game Items"}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {activeTab === "RANK"
                  ? "Select a rank to inspect full permissions, land claims, and monthly perks."
                  : "DailyPass, OP Keys, Standalone Kits, Heavy Mace, In-Game Money, and Wolf Spawners."}
              </p>
            </div>

            {/* Category Toggle Back Button */}
            <button
              onClick={() => setActiveTab(activeTab === "RANK" ? "ITEMS" : "RANK")}
              type="button"
              className="inline-flex items-center gap-1.5 self-start rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              Switch to {activeTab === "RANK" ? "Items" : "Ranks"}
            </button>
          </div>

          {/* Grid Layout */}
          {activeTab === "RANK" ? (
            /* Ranks Grid (6 exact ranks in order: VIP -> MVP -> SKOR -> OMBIL -> BEJENG -> SOMLOR) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRanks.map((rank) => (
                <RankCard
                  key={rank.id}
                  rank={rank}
                  onSelect={(r) => setSelectedRank(r)}
                  onBuy={(r) => setCheckoutProduct(r)}
                />
              ))}
            </div>
          ) : (
            /* Items Grid (7 items) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onSelect={(i) => setSelectedItem(i)}
                  onBuy={(i) => setCheckoutProduct(i)}
                />
              ))}
            </div>
          )}

          {/* Empty search results fallback */}
          {((activeTab === "RANK" && filteredRanks.length === 0) ||
            (activeTab === "ITEMS" && filteredItems.length === 0)) && (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-base font-semibold text-slate-300">No {activeTab.toLowerCase()} match your search.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-amber-400 hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

        {/* Telegram Direct Connect Banner */}
        <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-slate-900/90 to-blue-950/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <Send className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/30">
                  Telegram Only Checkout
                </span>
                <span className="text-xs text-slate-400 font-mono">@{TELEGRAM_USERNAME}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Fast &amp; Direct Admin Purchase
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                No credit card or PayPal needed! Contact our administrator directly on Telegram to purchase ranks, kits, keys, spawners, or money with local banks (ABA / Bakong / Wing) or Crypto.
              </p>
            </div>
          </div>

          <a
            href="https://t.me/to_chaidy"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 px-6 py-4 text-sm font-black text-slate-950 shadow-xl shadow-sky-500/25 transition hover:brightness-110 active:scale-95"
          >
            <Send className="w-4 h-4 text-slate-950" />
            CHAT ON TELEGRAM (@to_chaidy)
          </a>
        </div>

        {/* Store Information / FAQ footer banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Instant Fulfillment</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ranks and items are delivered immediately to your in-game username upon confirmation.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Safe &amp; Secure</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct peer-to-peer verification through Telegram ensures zero fraudulent transactions.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-white">Need Assistance?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Join our official <a href="https://discord.gg/wY4ejbNVqB" target="_blank" rel="noreferrer" className="text-indigo-400 font-semibold hover:underline">Discord Community</a> or chat directly with our admin on <a href="https://t.me/to_chaidy" target="_blank" rel="noreferrer" className="text-sky-400 font-semibold hover:underline">Telegram (@to_chaidy)</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Rank Permissions Modal */}
      <RankDetailModal
        rank={selectedRank}
        onClose={() => setSelectedRank(null)}
        onBuy={(rank) => {
          setSelectedRank(null);
          setCheckoutProduct(rank);
        }}
      />

      {/* Detailed Item Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onBuy={(item) => {
          setSelectedItem(null);
          setCheckoutProduct(item);
        }}
      />

      {/* Telegram Checkout Modal */}
      <CheckoutModal
        product={checkoutProduct}
        onClose={() => setCheckoutProduct(null)}
      />
    </div>
  );
}
