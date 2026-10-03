"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, User, ShieldCheck, Sparkles, Key, ShoppingBag, ExternalLink } from "lucide-react";
import CopyIpButton from "@/components/CopyIpButton";

export default function ProfilePage() {
  const [username, setUsername] = useState("Steve");
  const [isLinked, setIsLinked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Navigation */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO HOME
          </Link>
          <Link
            href="/store"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-black text-slate-950 shadow-md hover:brightness-110"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> OPEN STORE
          </Link>
        </div>

        {/* Profile Header Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 via-slate-800 to-slate-900 border-2 border-emerald-500/40 shadow-xl overflow-hidden">
              <User className="h-12 w-12 text-emerald-400" />
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-white">{username}</h1>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                  PLAYER
                </span>
                <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-mono text-slate-400">
                  JAVA &bull; BEDROCK
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Link your in-game Minecraft character to sync your purchases, ranks, and crate deliveries.
              </p>
            </div>
          </div>
        </div>

        {/* Account Linking Instructions */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <Key className="w-5 h-5" />
            <h2 className="text-lg font-bold text-white">How to Link Your Minecraft Account</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            For maximum security, Minecraft account ownership is verified entirely inside the game server, never trusted blindly from a browser.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">1</span>
              <div>
                <strong className="text-white block mb-0.5">Join the Minecraft Server</strong>
                Connect with IP: <code className="text-emerald-400 font-mono font-bold">bejengmc.lol</code> (Bedrock port 62173).
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">2</span>
              <div>
                <strong className="text-white block mb-0.5">Generate your Link Code</strong>
                Type <code className="text-amber-400 font-mono font-bold">/link</code> in in-game chat to obtain a unique 6-digit security pin.
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-xs">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">3</span>
              <div>
                <strong className="text-white block mb-0.5">Instant Verification</strong>
                Your rank badges, permissions, and deliveries will automatically be synced to your profile.
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/store"
            className="flex-1 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-amber-600/10 p-5 text-center transition hover:border-amber-500/70"
          >
            <h3 className="text-base font-bold text-white mb-1">Browse Server Store</h3>
            <p className="text-xs text-slate-400">Unlock VIP, MVP, SKOR, OMBIL, BEJENG, or SOMLOR ranks.</p>
          </Link>

          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center">
            <h3 className="text-base font-bold text-white mb-1">Discord Community</h3>
            <p className="text-xs text-slate-400 mb-3">Sync your discord roles and chat with fellow players.</p>
            <a
              href="https://discord.gg/wY4ejbNVqB"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:underline"
            >
              Open Discord <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
