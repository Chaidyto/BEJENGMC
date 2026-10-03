"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, ShoppingBag, Home, User, Settings, MessageSquare } from "lucide-react";
import CopyIpButton from "./CopyIpButton";
import { getAssetPath } from "@/lib/assets";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/", icon: Home },
    { name: "STORE", href: "/store", icon: ShoppingBag, isHighlighted: true },
    { name: "PROFILE", href: "/profile", icon: User },
    { name: "SETTINGS", href: "/settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-amber-500/40 p-0.5 group-hover:border-amber-400/70 transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] overflow-hidden">
            <img
              src={getAssetPath("/logo.png")}
              alt="BeJengMC Logo"
              width={44}
              height={44}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="leading-tight">
            <span className="text-xl font-black tracking-wider text-white">
              BeJeng<span className="text-amber-400">MC</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400 font-mono">
              Minecraft Network
            </span>
          </div>
        </Link>

        {/* Desktop Main Navigation: HOME, STORE, PROFILE, SETTINGS */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            if (item.isHighlighted) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black tracking-wider uppercase transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/40"
                      : "bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 hover:border-amber-400 shadow-sm"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                  <span className="rounded bg-amber-400/20 px-1.5 py-0.2 text-[9px] font-mono text-amber-300">
                    SHOP
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-all ${
                  isActive
                    ? "bg-slate-800 text-emerald-400 border border-slate-700"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4 text-slate-400" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-3">
          <CopyIpButton />
          <a
            href="https://discord.gg/wY4ejbNVqB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 px-3 py-2 text-xs font-bold text-indigo-300 transition"
            title="Join our Discord"
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden lg:inline">DISCORD</span>
          </a>
          <Link
            href="/store"
            className="md:hidden inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-2 text-xs font-black text-slate-950 shadow-md hover:brightness-110"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> STORE
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          className="inline-flex md:hidden items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 md:hidden space-y-3">
          <div className="space-y-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold tracking-wider ${
                    item.isHighlighted
                      ? "bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black"
                      : isActive
                      ? "bg-slate-800 text-emerald-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </span>
                  {item.isHighlighted && (
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded">
                      BUY
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <CopyIpButton className="w-full justify-center" />
            <a
              href="https://discord.gg/wY4ejbNVqB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 py-2.5 text-xs font-bold text-indigo-300 transition"
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              JOIN OUR DISCORD
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
