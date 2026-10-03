"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyIpButtonProps {
  ip?: string;
  className?: string;
}

export default function CopyIpButton({ ip = "bejengmc.lol", className = "" }: CopyIpButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`group relative inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-300 transition-all duration-200 hover:border-emerald-500/50 hover:bg-emerald-500/20 active:scale-95 ${className}`}
      title="Click to copy server IP"
    >
      <span className="font-mono font-semibold tracking-wide text-emerald-400">{ip}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-xs text-emerald-300 font-sans">
          <Check className="h-4 w-4 text-emerald-400" />
          Copied!
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-xs text-slate-400 group-hover:text-emerald-300 font-sans">
          <Copy className="h-3.5 w-3.5" />
          Copy
        </span>
      )}
    </button>
  );
}
