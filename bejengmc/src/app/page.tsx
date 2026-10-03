import Link from "next/link";
import CopyIpButton from "@/components/CopyIpButton";
import { Swords, Shield, Zap, Sparkles, ArrowRight, ShoppingBag, ShoppingCart, MessageSquare, Crown, Package } from "lucide-react";
import { STORE_RANKS } from "@/data/store-data";
import { getAssetPath } from "@/lib/assets";

export default function HomePage() {
  const gameModes = [
    {
      name: "Survival SMP",
      desc: "Custom economy, claims, player warps, and dungeons with enhanced 1.21.11 features.",
      tag: "Popular",
      accent: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
    },
    {
      name: "Stable Duels",
      desc: "Ultra low latency competitive PvP with ranked leaderboards and custom arenas.",
      tag: "Competitive",
      accent: "from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400",
    },
    {
      name: "Bejeng Dungeons",
      desc: "Battle custom boss waves, level up skills, and collect mythic loot drops.",
      tag: "PvE",
      accent: "from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400",
    },
  ];

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Server Online &bull; Java &amp; Bedrock Supported (Leaf 1.21.11)
          </div>

          {/* Official Server Logo */}
          <div className="relative mx-auto flex items-center justify-center pt-2">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-amber-500/25 via-red-500/25 to-amber-500/25 blur-3xl opacity-80" />
            <img
              src={getAssetPath("/logo.png")}
              alt="BeJengMC Official Server Logo"
              width={280}
              height={280}
              style={{ maxHeight: "280px", maxWidth: "100%", width: "auto" }}
              className="relative mx-auto h-48 sm:h-64 md:h-72 w-auto object-contain drop-shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Welcome to <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">BeJengMC</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
            Experience the ultimate Minecraft server. High-performance Leaf engine, custom dungeons, balanced economy, and zero pay-to-win.
          </p>

          {/* Prominent Action CTA: STORE & IP */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Primary STORE Button */}
            <Link
              href="/store"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-amber-500/25 transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-slate-950" />
              VISIT SERVER STORE
              <span className="rounded-md bg-slate-950/20 px-2 py-0.5 text-xs font-mono text-slate-950">
                RANKS &amp; ITEMS
              </span>
            </Link>

            {/* Connection Cards */}
            <div className="flex items-center gap-2">
              <CopyIpButton ip="bejengmc.lol" className="py-3 px-4" />
              <div className="rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-md backdrop-blur">
                <span className="block text-[10px] font-semibold uppercase text-slate-400">Bedrock</span>
                <span className="font-mono text-sm font-bold text-emerald-400">62173</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ranks Teaser Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-slate-900/90 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Crown className="w-4 h-4" /> Available Server Ranks
              </div>
              <h2 className="text-2xl font-black text-white mt-1">1 Month Ranks with Land Claims, Money &amp; Kits</h2>
            </div>
            <Link
              href="/store"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:underline"
            >
              View all 6 ranks &amp; full kits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {STORE_RANKS.map((r) => (
              <Link
                key={r.id}
                href="/store"
                className={`group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center transition-all duration-200 hover:-translate-y-1 ${r.glowColor}`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-0.5 border mb-2 ${r.badgeColor}`}>
                  {r.id === "somlor" ? "Supreme Tier 6" : `Tier ${r.tier}`}
                </span>
                <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors">
                  {r.name}
                </h3>
                <span className="text-sm font-black font-mono text-white mt-1">
                  ${r.price.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {r.duration}
                </span>
                <span className="text-[10px] text-emerald-400 mt-1 font-semibold group-hover:underline">
                  BUY &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section id="gamemodes" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Featured Game Modes</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Explore carefully tailored game modes crafted for both casual builders and intense PvP enthusiasts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gameModes.map((gm) => (
            <div
              key={gm.name}
              className={`rounded-2xl border bg-gradient-to-b p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 ${gm.accent}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{gm.name}</h3>
                <span className="rounded-full bg-slate-900/80 px-2.5 py-0.5 text-xs font-semibold text-slate-300 border border-slate-700">
                  {gm.tag}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{gm.desc}</p>
              <div className="flex items-center text-xs font-semibold text-emerald-400 gap-1">
                Play now <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Store Callout Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-slate-900/90 to-emerald-950/30 p-8 sm:p-12 text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Direct Support
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white">
              Visit the Server Shop
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Support server hosting costs and unlock exclusive in-game perks like creative flight, extra homes, silk touch spawners, mythic crate keys, and ancient heavy cores.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/store"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/25 transition hover:brightness-110 active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" /> BROWSE STORE NOW
              </Link>
              <a
                href="https://discord.gg/wY4ejbNVqB"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-800 border border-slate-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" /> Discord Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
