"use client";

import { useState } from "react";
import {
  X,
  Send,
  ShieldCheck,
  QrCode,
  Copy,
  Check,
  Download,
  Smartphone,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  RankData,
  StoreItemData,
  PetData,
  KHQR_CONFIG,
  getKhqrTelegramConfirmationUrl,
  getTelegramOrderUrl,
  TELEGRAM_USERNAME,
  TELEGRAM_LINK,
} from "@/data/store-data";
import { RankIcon, ItemIcon, PetIcon } from "./StoreIcons";
import { getAssetPath } from "@/lib/assets";

interface CheckoutModalProps {
  product: RankData | StoreItemData | PetData | null;
  onClose: () => void;
}

export default function CheckoutModal({ product, onClose }: CheckoutModalProps) {
  const [username, setUsername] = useState("");
  const [edition, setEdition] = useState<"JAVA" | "BEDROCK">("JAVA");
  const [paymentMethod, setPaymentMethod] = useState<"KHQR" | "TELEGRAM">("KHQR");
  const [copiedRemark, setCopiedRemark] = useState(false);
  const [qrImageSrc, setQrImageSrc] = useState(getAssetPath(KHQR_CONFIG.qrImagePath));

  if (!product) return null;

  const isRank = "commands" in product;
  const isPet = "effects" in product;
  const khrPrice = Math.round(product.price * KHQR_CONFIG.exchangeRateUsdToKhr);
  const transferMemo = `${product.name} - ${username.trim() || "IGN"}`;

  const telegramDirectUrl = getTelegramOrderUrl(product.name, product.price, username, edition);
  const khqrConfirmUrl = getKhqrTelegramConfirmationUrl(product.name, product.price, username, edition);

  const handleCopyRemark = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(transferMemo);
      setCopiedRemark(true);
      setTimeout(() => setCopiedRemark(false), 2200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      <div className="relative z-10 w-full max-w-lg max-h-[92vh] flex flex-col rounded-3xl border border-sky-500/40 bg-slate-900 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Modal Header */}
        <div className="shrink-0 flex items-center justify-between border-b border-slate-800 px-5 py-3.5 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/30">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/40">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white">Store Checkout</h3>
              <span className="text-[11px] text-emerald-400 font-medium">Fast & Secure In-Game Delivery</span>
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

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
          {/* Item Order Summary Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {isRank ? (
                <RankIcon type={product.iconType} imageUrl={(product as RankData).imageUrl} size="sm" />
              ) : isPet ? (
                <PetIcon type={product.iconType} size="sm" />
              ) : (
                <ItemIcon type={product.iconType} imageUrl={(product as StoreItemData).imageUrl} size="sm" />
              )}
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Selected Product</span>
                <h4 className="text-base font-black text-white">{product.name}</h4>
                <p className="text-xs text-slate-400">
                  {isRank
                    ? `${(product as RankData).duration} Rank`
                    : isPet
                    ? "Permanent Companion Pet"
                    : `Deliverable (${(product as StoreItemData).amount})`}
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-2xl font-black text-amber-400 font-mono">${product.price.toFixed(2)}</span>
              <span className="block text-[11px] text-emerald-400 font-medium">~{khrPrice.toLocaleString()} ៛</span>
            </div>
          </div>

          {/* Minecraft Delivery Credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Minecraft Username */}
            <div className="space-y-1.5 sm:col-span-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>Minecraft IGN</span>
                <span className="text-[10px] text-emerald-400 lowercase font-normal">*required</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Steve, Alex"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
              />
            </div>

            {/* Edition Selector */}
            <div className="space-y-1.5 sm:col-span-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Edition
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setEdition("JAVA")}
                  className={`rounded-xl border py-2 px-2 text-xs font-bold transition ${
                    edition === "JAVA"
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                      : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white"
                  }`}
                >
                  ☕ Java
                </button>
                <button
                  type="button"
                  onClick={() => setEdition("BEDROCK")}
                  className={`rounded-xl border py-2 px-2 text-xs font-bold transition ${
                    edition === "BEDROCK"
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                      : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white"
                  }`}
                >
                  📱 Bedrock
                </button>
              </div>
            </div>
          </div>

          {/* Payment Method Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Select Payment Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod("KHQR")}
                className={`flex items-center justify-center gap-2 rounded-xl border py-3 px-3 text-xs sm:text-sm font-black transition ${
                  paymentMethod === "KHQR"
                    ? "border-rose-500 bg-gradient-to-r from-rose-950/60 to-red-950/50 text-white shadow-lg shadow-rose-950/40"
                    : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <span className="flex h-5 items-center px-1.5 rounded bg-[#E1251B] text-white text-[11px] font-black tracking-tight">
                  KHQR
                </span>
                <span>Scan & Pay</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("TELEGRAM")}
                className={`flex items-center justify-center gap-2 rounded-xl border py-3 px-3 text-xs sm:text-sm font-bold transition ${
                  paymentMethod === "TELEGRAM"
                    ? "border-sky-500 bg-gradient-to-r from-sky-950/60 to-blue-950/50 text-sky-400 shadow-lg shadow-sky-950/40"
                    : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram Direct</span>
              </button>
            </div>
          </div>

          {/* TAB 1: KHQR (Bakong / ABA / All Banks) */}
          {paymentMethod === "KHQR" && (
            <div className="space-y-4 rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-950/30 via-slate-950 to-slate-950 p-4 sm:p-5">
              {/* KHQR Official Banner */}
              <div className="flex items-center justify-between border-b border-rose-900/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 rounded-md bg-[#E1251B] text-white font-black text-xs tracking-wider shadow">
                    KHQR
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white tracking-wide">Cambodia Universal QR</h5>
                    <p className="text-[10px] text-slate-400">Bakong · ABA · Wing · ACLEDA · All Banks</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 block">Receiver</span>
                  <span className="text-xs font-black text-rose-300 font-mono">{KHQR_CONFIG.merchantName}</span>
                </div>
              </div>

              {/* QR Code Container */}
              <div className="flex flex-col sm:flex-row items-center gap-4 py-1">
                {/* QR Display Card */}
                <div className="relative shrink-0 w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-white p-3 shadow-xl flex items-center justify-center border-4 border-rose-500/80">
                  <img
                    src={qrImageSrc}
                    alt="KHQR Payment QR Code"
                    className="w-full h-full object-contain"
                    onError={() => {
                      // Fallback to default generated QR if custom image not found
                      const fallback = getAssetPath("/images/khqr-default.svg");
                      if (qrImageSrc !== fallback) {
                        setQrImageSrc(fallback);
                      }
                    }}
                  />
                  {/* Central KHQR Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="px-2 py-0.5 rounded bg-[#E1251B] text-white text-[10px] font-black shadow-md border border-white">
                      KHQR
                    </div>
                  </div>
                </div>

                {/* Amount and Instructions */}
                <div className="w-full space-y-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Payment Total</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-amber-400 font-mono">${product.price.toFixed(2)}</span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">({khrPrice.toLocaleString()} ៛)</span>
                    </div>
                  </div>

                  {/* Transfer Note / Remark (Crucial) */}
                  <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-2.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                        Transfer Remark (Memo)
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyRemark}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 hover:text-sky-300 transition"
                      >
                        {copiedRemark ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="rounded-lg bg-slate-950 px-2 py-1.5 font-mono text-xs text-white border border-slate-800 select-all truncate">
                      {transferMemo}
                    </div>
                    <p className="text-[10px] text-amber-400/90">
                      *Please paste this remark in your bank app so admin can identify your payment!
                    </p>
                  </div>

                  {/* Download QR button */}
                  <a
                    href={qrImageSrc}
                    download="BEJENGMC-KHQR.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl border border-slate-700 bg-slate-900/60 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save / Enlarge QR Code</span>
                  </a>
                </div>
              </div>

              {/* Step Guide */}
              <div className="rounded-xl bg-slate-950/80 p-3 border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-white text-xs">
                  <Smartphone className="w-3.5 h-3.5 text-rose-400" />
                  <span>How to complete payment:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 text-slate-400 pl-1">
                  <li>Open <strong>ABA Mobile, Bakong, Wing, ACLEDA</strong> or any KHQR app.</li>
                  <li>Scan the QR code and paste your <strong>Remark ({transferMemo})</strong>.</li>
                  <li>Tap <strong>"I Have Paid"</strong> below to send your receipt to admin.</li>
                </ol>
              </div>

              {/* Action Button: Confirm & Send Receipt */}
              <a
                href={khqrConfirmUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 px-4 py-3.5 text-sm font-black text-slate-950 shadow-xl shadow-emerald-500/25 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-slate-950" />
                <span>I HAVE PAID — SEND RECEIPT TO ADMIN</span>
              </a>
            </div>
          )}

          {/* TAB 2: Direct Telegram Flow */}
          {paymentMethod === "TELEGRAM" && (
            <div className="space-y-4">
              <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-slate-950 to-blue-950/20 p-4 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> Direct Admin Purchase
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We accept payments via <strong>ABA Bank, Bakong (KHQR), Wing, Local Bank Transfers, and USDT / Crypto</strong>.
                </p>
                <p className="text-[11px] text-slate-400">
                  Clicking below will open Telegram chat with <strong className="text-sky-300 font-mono">@{TELEGRAM_USERNAME}</strong> with your order pre-filled!
                </p>
              </div>

              <a
                href={telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 px-4 py-4 text-sm font-black text-slate-950 shadow-xl shadow-sky-500/30 transition-all hover:brightness-110 active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 text-slate-950" />
                <span>OPEN TELEGRAM TO BUY (${product.price.toFixed(2)})</span>
              </a>
            </div>
          )}

          {/* Direct Telegram Footer Link */}
          <div className="text-center pt-1">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-sky-400 hover:underline font-mono"
            >
              Direct Link: {TELEGRAM_LINK} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
