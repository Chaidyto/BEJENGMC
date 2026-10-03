import React from "react";

interface IconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function RankIcon({ type, imageUrl, className = "", size = "md" }: { type: string; imageUrl?: string } & IconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-28 h-28",
  };

  if (imageUrl) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700/80 p-2 shadow-lg overflow-hidden group ${sizeClasses[size]} ${className}`}>
        <img
          src={imageUrl}
          alt={type}
          className="w-full h-full object-contain [image-rendering:pixelated] drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-transform duration-200 group-hover:scale-110"
        />
      </div>
    );
  }

  switch (type) {
    case "vip":
      // VIP: Blue
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent border border-blue-500/40 p-2 shadow-[0_0_15px_rgba(59,130,246,0.25)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            <path d="M12 2L3 7V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V7L12 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6L13.5 9.5L17 10L14.5 12.5L15 16L12 14.2L9 16L9.5 12.5L7 10L10.5 9.5L12 6Z" fill="#60A5FA" />
          </svg>
        </div>
      );

    case "mvp":
      // MVP: Red/Gold
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500/25 via-amber-500/15 to-transparent border border-red-500/50 p-2 shadow-[0_0_18px_rgba(239,68,68,0.3)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            <path d="M6 3H18L22 9L12 22L2 9L6 3Z" fill="#EF4444" fillOpacity="0.25" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 9H22M12 22L7 9M12 22L17 9M6 3L10 9M18 3L14 9" stroke="#FBBF24" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case "skor":
      // SKOR: Cyan/Blue
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-transparent border border-cyan-400/50 p-2 shadow-[0_0_20px_rgba(6,182,212,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
            <path d="M3 18H21L19 7L14 11L12 4L10 11L5 7L3 18Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="4" r="1.5" fill="#67E8F9" />
            <circle cx="5" cy="7" r="1.2" fill="#67E8F9" />
            <circle cx="19" cy="7" r="1.2" fill="#67E8F9" />
            <path d="M4 19H20" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "ombil":
      // OMBIL: Purple
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 via-fuchsia-600/15 to-transparent border border-purple-500/50 p-2 shadow-[0_0_20px_rgba(168,85,247,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.85)]">
            <path d="M12 2C9 5 7 8 7 11C7 14 9 16 11 16C12 16 13 15 13 14C13 12 12 11 12 9C14 10 16 12 16 15C16 18.5 13.5 21 10.5 21C6.5 21 4 17.5 4 13C4 7.5 8 3 12 2Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 6C17 9 19 12 19 15C19 19 16 22 12 22C16 22 20 18 20 14C20 9 16 5 14 6Z" fill="#C084FC" />
          </svg>
        </div>
      );

    case "bejeng":
      // BEJENG: Diamond Blue
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/30 via-cyan-500/20 to-blue-900/30 border border-sky-400/70 p-2 shadow-[0_0_25px_rgba(56,189,248,0.45)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.95)]">
            <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" fill="#38BDF8" />
            <path d="M12 6V9M12 15V18M6 12H9M15 12H18" stroke="#E0F2FE" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "somlor":
    default:
      // SOMLOR: Gold/Purple (Highest Supreme Tier)
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/30 via-purple-600/25 to-amber-950/40 border border-amber-400/80 p-2 shadow-[0_0_35px_rgba(245,158,11,0.55)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-300 drop-shadow-[0_0_14px_rgba(245,158,11,0.95)]">
            <path d="M12 2L4 6V12C4 18 8 21.5 12 23C16 21.5 20 18 20 12V6L12 2Z" fill="#A855F7" fillOpacity="0.25" stroke="#F59E0B" strokeWidth="1.8" />
            <path d="M12 5L14 9H18L15 12L16 16L12 14L8 16L9 12L6 9H10L12 5Z" fill="#FDE047" />
            <circle cx="12" cy="12" r="1.5" fill="#FFF" />
          </svg>
        </div>
      );
  }
}

export function ItemIcon({ type, imageUrl, className = "", size = "md" }: { type: string; imageUrl?: string } & IconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-28 h-28",
  };

  if (imageUrl) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700/80 p-2 shadow-lg overflow-hidden group ${sizeClasses[size]} ${className}`}>
        <img
          src={imageUrl}
          alt={type}
          className="w-full h-full object-contain [image-rendering:pixelated] drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-transform duration-200 group-hover:scale-110"
        />
      </div>
    );
  }

  switch (type) {
    case "dailypass":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/25 via-amber-600/15 to-transparent border border-amber-500/50 p-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.85)]">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" fill="#78350F" fillOpacity="0.3" />
            <line x1="8" y1="5" x2="8" y2="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2" />
            <polygon points="14,9 15,12 18,12 15.5,14 16.5,17 14,15 11.5,17 12.5,14 10,12 13,12" fill="#FDE047" />
          </svg>
        </div>
      );

    case "op_key":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 via-pink-600/15 to-transparent border border-purple-500/50 p-2 shadow-[0_0_22px_rgba(168,85,247,0.4)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]">
            <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="2" fill="#581C87" fillOpacity="0.4" />
            <polygon points="8,5 9,7 11,8 9,9 8,11 7,9 5,8 7,7" fill="#F472B6" />
            <path d="M12 12L21 21M17 17L19 15M19 19L21 17" stroke="#E879F9" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "bejeng_kit":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/30 via-cyan-600/20 to-transparent border border-sky-400/60 p-2 shadow-[0_0_25px_rgba(56,189,248,0.4)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">
            <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="#0369A1" fillOpacity="0.35" />
            <rect x="2" y="5" width="20" height="5" rx="1.5" stroke="#7DD3FC" strokeWidth="1.6" fill="#0284C7" />
            <rect x="10" y="8" width="4" height="4" rx="0.5" fill="#FBBF24" />
          </svg>
        </div>
      );

    case "ombil_kit":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 via-fuchsia-600/20 to-transparent border border-purple-500/60 p-2 shadow-[0_0_25px_rgba(168,85,247,0.4)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.9)]">
            <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="#581C87" fillOpacity="0.4" />
            <rect x="2" y="5" width="20" height="5" rx="1.5" stroke="#E9D5FF" strokeWidth="1.6" fill="#7E22CE" />
            <rect x="10" y="8" width="4" height="4" rx="0.5" fill="#F472B6" />
          </svg>
        </div>
      );

    case "mace_op":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/25 via-slate-700/30 to-transparent border border-cyan-400/50 p-2 shadow-[0_0_22px_rgba(34,211,238,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.85)]">
            <line x1="5" y1="19" x2="14" y2="10" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="12" y="4" width="7" height="7" rx="1" transform="rotate(45 15.5 7.5)" stroke="#67E8F9" strokeWidth="1.8" fill="#1E293B" />
            <circle cx="15.5" cy="7.5" r="1.5" fill="#38BDF8" />
          </svg>
        </div>
      );

    case "money":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 via-amber-500/20 to-transparent border border-emerald-500/50 p-2 shadow-[0_0_22px_rgba(16,185,129,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.85)]">
            <polygon points="12,3 17,8 14,17 10,17 7,8" fill="#10B981" fillOpacity="0.4" stroke="#34D399" strokeWidth="1.8" />
            <text x="12" y="11" font-size="7" font-weight="900" fill="#FDE047" text-anchor="middle" dominant-baseline="middle">$</text>
            <ellipse cx="6" cy="18" rx="4" ry="2" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />
            <ellipse cx="18" cy="18" rx="4" ry="2" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />
          </svg>
        </div>
      );

    case "wolf_spawner":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/25 via-red-600/20 to-transparent border border-amber-500/50 p-2 shadow-[0_0_22px_rgba(245,158,11,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.85)]">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="#0F172A" fillOpacity="0.6" />
            <line x1="8" y1="3" x2="8" y2="21" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="16" y1="3" x2="16" y2="21" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="3" y1="8" x2="21" y2="8" stroke="#94A3B8" strokeWidth="1.2" />
            <line x1="3" y1="16" x2="21" y2="16" stroke="#94A3B8" strokeWidth="1.2" />
            <circle cx="12" cy="12" r="3" fill="#EF4444" fillOpacity="0.6" />
          </svg>
        </div>
      );

    case "gapple":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 via-purple-600/15 to-transparent border border-yellow-500/40 p-2 shadow-[0_0_20px_rgba(234,179,8,0.3)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.85)]">
            <path d="M12 3C11 2 9 2 8 3C7 4 8 6 9 7" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 6C9 6 6 8 6 12C6 17 9 21 12 21C15 21 18 17 18 12C18 8 15 6 12 6Z" fill="#FACC15" fillOpacity="0.4" stroke="#FDE047" strokeWidth="1.8" />
            <circle cx="10" cy="10" r="1.5" fill="#FEF08A" />
            <circle cx="14" cy="13" r="1" fill="#FEF08A" />
          </svg>
        </div>
      );

    case "trident":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-cyan-600/15 to-transparent border border-cyan-500/40 p-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.85)]">
            <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 3V9C7 11.5 9 13.5 12 13.5C15 13.5 17 11.5 17 9V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 3L5 5M17 3L19 5M12 2L10 4M12 2L14 4" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "beacon":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/25 via-amber-500/15 to-transparent border border-sky-400/50 p-2 shadow-[0_0_25px_rgba(56,189,248,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">
            <rect x="5" y="7" width="14" height="14" rx="2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <rect x="8" y="10" width="8" height="8" rx="1" fill="#38BDF8" fillOpacity="0.5" stroke="#BAE6FD" strokeWidth="1.5" />
            <path d="M12 1V7" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
            <path d="M10 2L12 1L14 2" stroke="#BAE6FD" strokeWidth="2" />
          </svg>
        </div>
      );

    case "heavy_core":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/25 via-slate-700/30 to-transparent border border-rose-500/40 p-2 shadow-[0_0_25px_rgba(244,63,94,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.85)]">
            <rect x="4" y="4" width="16" height="16" rx="2" fill="#1E293B" stroke="currentColor" strokeWidth="2" />
            <path d="M8 8H16V16H8V8Z" fill="currentColor" fillOpacity="0.3" stroke="#FB7185" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="#FDA4AF" />
            <path d="M4 12H8M16 12H20M12 4V8M12 16V20" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </div>
      );

    case "crate_key":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/25 via-amber-600/15 to-transparent border border-yellow-500/40 p-2 shadow-[0_0_20px_rgba(234,179,8,0.35)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.85)]">
            <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
            <circle cx="8" cy="8" r="2" fill="#FEF08A" />
            <path d="M12 12L21 21M17 17L19 15M19 19L21 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "elytra":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 via-purple-600/15 to-transparent border border-indigo-500/40 p-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.85)]">
            <path d="M12 3C10 7 4 10 3 16C2 21 8 22 11 17C12 15 12 3 12 3Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 3C14 7 20 10 21 16C22 21 16 22 13 17C12 15 12 3 12 3Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 3V19" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      );

    case "spawner":
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 via-slate-800/40 to-transparent border border-emerald-500/40 p-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.85)]">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="#064E3B" fillOpacity="0.4" />
            <path d="M8 3V21M16 3V21M3 8H21M3 16H21" stroke="#34D399" strokeWidth="1.4" />
            <circle cx="12" cy="12" r="3" fill="#10B981" />
          </svg>
        </div>
      );

    case "netherite":
    default:
      return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-400/20 via-zinc-700/30 to-transparent border border-slate-400/40 p-2 shadow-[0_0_15px_rgba(148,163,184,0.25)] ${sizeClasses[size]} ${className}`}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-slate-300 drop-shadow-[0_0_8px_rgba(203,213,225,0.7)]">
            <path d="M4 4L20 4L17 20L7 20L4 4Z" fill="#1E293B" stroke="currentColor" strokeWidth="2" />
            <path d="M8 8H16L14 16H10L8 8Z" fill="currentColor" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="1.5" />
          </svg>
        </div>
      );
  }
}
