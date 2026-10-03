import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-amber-500/40 p-0.5 overflow-hidden shadow-md">
                <img
                  src="/logo.png"
                  alt="BeJengMC Logo"
                  width={40}
                  height={40}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl font-black text-white tracking-wider">
                BeJeng<span className="text-amber-400">MC</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              High-performance Minecraft network running Leaf 1.21.11 with custom cross-platform Java and Bedrock compatibility.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/store" className="hover:text-emerald-400 transition-colors">Store</Link></li>
              <li><Link href="/store" className="hover:text-emerald-400 transition-colors">Vote for Rewards</Link></li>
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Server Rules</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://discord.gg/wY4ejbNVqB" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Discord Server</a></li>
              <li><Link href="/profile" className="hover:text-emerald-400 transition-colors">Player Profile</Link></li>
              <li><a href="https://t.me/to_chaidy" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">Admin Support (Telegram)</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} BEJENGMC Network. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Not an official Minecraft service. Not approved by or associated with Mojang or Microsoft.
          </p>
        </div>
      </div>
    </footer>
  );
}
