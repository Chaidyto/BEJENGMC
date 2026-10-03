export interface RankBenefit {
  title: string;
  isHighlight?: boolean;
}

export interface KitItem {
  slot: number; // 0 to 26 (3x9 inventory)
  name: string;
  count: number;
  icon: string;
  enchantments?: string[];
  lore?: string[];
}

export interface KitDefinition {
  id: string;
  name: string;
  badgeColor: string;
  description: string;
  items: KitItem[];
}

export interface RankData {
  id: string;
  name: string;
  tier: number;
  price: number; // e.g. 5.00
  duration: string; // "1 Month"
  landClaim: string; // "9 Chunks", "12 Chunks", etc.
  moneyBonus: string; // "+100,000", "+500,000", etc.
  kitName: string; // "VIP Kit", "ALL KITS", etc.
  extraPermissions: string[]; // ["/fly"], ["/fly", "/craft", "/ec", "/anvil"]
  badgeColor: string;
  glowColor: string;
  accentGradient: string;
  shortDesc: string;
  fullDesc: string;
  iconType: "vip" | "mvp" | "skor" | "ombil" | "bejeng" | "somlor" | string;
  imageUrl?: string;
  mainBenefits: string[];
  fullPermissions: {
    category: string;
    items: string[];
  }[];
  commands: string[];
  exclusivePerks: string[];
  kitId: string;
}

export interface StoreItemData {
  id: string;
  name: string;
  amount: string; // e.g. "1 DailyPass", "1 Key", "50M Money"
  price: number; // e.g. 1.00, 5.00
  duration?: string; // e.g. "1 Week" for DailyPass
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Mythic";
  badgeColor: string;
  glowColor: string;
  shortDesc: string;
  fullDesc: string;
  iconType: string;
  imageUrl?: string;
  minecraftLore: string[];
  deliveryInfo: string;
}

// Official Network Configuration
export const SERVER_IP = "bejengmc.lol";
export const BEDROCK_PORT = 62173;
export const DISCORD_LINK = "https://discord.gg/wY4ejbNVqB";

// Official Telegram link for direct purchases and admin support
export const TELEGRAM_USERNAME = "to_chaidy";
export const TELEGRAM_LINK = "https://t.me/to_chaidy";

export function getTelegramOrderUrl(productName: string, price: number, playerIgn?: string, edition: string = "JAVA") {
  const ignText = playerIgn && playerIgn.trim() ? `\n• Minecraft In-Game Name: ${playerIgn.trim()} (${edition})` : "";
  const text = `👋 Hello! I would like to purchase from the BEJENGMC Store:\n\n• Item/Rank: ${productName}\n• Price: $${price.toFixed(2)} USD${ignText}\n\nPlease send me payment info (ABA / Bakong / Wing / Bank / Crypto) so I can complete the purchase. Thank you!`;
  return `https://t.me/to_chaidy?text=${encodeURIComponent(text)}`;
}

// Full Minecraft Kit Item Definitions
export const KIT_DEFINITIONS: Record<string, KitDefinition> = {
  vip: {
    id: "vip",
    name: "VIP Kit",
    badgeColor: "text-blue-400 border-blue-500/40 bg-blue-500/10",
    description: "Standard issue Diamond starter gear with Protection II enchants and survival supplies.",
    items: [
      { slot: 0, name: "Diamond Helmet", count: 1, icon: "diamond_helmet", enchantments: ["Protection II", "Unbreaking II"], lore: ["Standard issue VIP armor."] },
      { slot: 1, name: "Diamond Chestplate", count: 1, icon: "diamond_chestplate", enchantments: ["Protection II", "Unbreaking II"] },
      { slot: 2, name: "Diamond Leggings", count: 1, icon: "diamond_leggings", enchantments: ["Protection II", "Unbreaking II"] },
      { slot: 3, name: "Diamond Boots", count: 1, icon: "diamond_boots", enchantments: ["Protection II", "Unbreaking II"] },
      { slot: 9, name: "Diamond Sword", count: 1, icon: "diamond_sword", enchantments: ["Sharpness III", "Unbreaking II"] },
      { slot: 10, name: "Diamond Pickaxe", count: 1, icon: "diamond_pickaxe", enchantments: ["Efficiency III", "Unbreaking II"] },
      { slot: 11, name: "Diamond Axe", count: 1, icon: "diamond_axe", enchantments: ["Efficiency III", "Unbreaking II"] },
      { slot: 18, name: "Golden Apple", count: 16, icon: "golden_apple", lore: ["Restores health and absorption."] },
      { slot: 19, name: "Cooked Beef", count: 64, icon: "cooked_beef" },
      { slot: 20, name: "Torches", count: 64, icon: "torch" },
      { slot: 21, name: "Oak Logs", count: 64, icon: "oak_log" },
      { slot: 22, name: "Iron Ingot", count: 32, icon: "iron_ingot" },
    ],
  },
  mvp: {
    id: "mvp",
    name: "MVP Kit",
    badgeColor: "text-red-400 border-red-500/40 bg-red-500/10",
    description: "Reinforced Diamond gear with Sharpness IV, infinity bow, and expansion items.",
    items: [
      { slot: 0, name: "Diamond Helmet", count: 1, icon: "diamond_helmet", enchantments: ["Protection III", "Unbreaking III"] },
      { slot: 1, name: "Diamond Chestplate", count: 1, icon: "diamond_chestplate", enchantments: ["Protection III", "Unbreaking III"] },
      { slot: 2, name: "Diamond Leggings", count: 1, icon: "diamond_leggings", enchantments: ["Protection III", "Unbreaking III"] },
      { slot: 3, name: "Diamond Boots", count: 1, icon: "diamond_boots", enchantments: ["Protection III", "Unbreaking III"] },
      { slot: 9, name: "Diamond Sword", count: 1, icon: "diamond_sword", enchantments: ["Sharpness IV", "Fire Aspect I", "Unbreaking III"] },
      { slot: 10, name: "Diamond Pickaxe", count: 1, icon: "diamond_pickaxe", enchantments: ["Efficiency IV", "Fortune II", "Unbreaking III"] },
      { slot: 11, name: "Diamond Axe", count: 1, icon: "diamond_axe", enchantments: ["Efficiency IV", "Unbreaking III"] },
      { slot: 12, name: "Power Bow", count: 1, icon: "bow", enchantments: ["Power IV", "Flame I", "Infinity"] },
      { slot: 13, name: "Arrow", count: 1, icon: "arrow" },
      { slot: 18, name: "Golden Apple", count: 32, icon: "golden_apple" },
      { slot: 19, name: "Cooked Beef", count: 64, icon: "cooked_beef" },
      { slot: 20, name: "Ender Pearl", count: 16, icon: "ender_pearl" },
      { slot: 21, name: "Bottle o' Enchanting", count: 32, icon: "bottle_o_enchanting" },
      { slot: 22, name: "Diamond Block", count: 4, icon: "diamond_block" },
    ],
  },
  skor: {
    id: "skor",
    name: "SKOR Kit",
    badgeColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    description: "Netherite battle set with Sharpness V, God Apples, and Totem of Undying.",
    items: [
      { slot: 0, name: "Netherite Helmet", count: 1, icon: "netherite_helmet", enchantments: ["Protection IV", "Unbreaking III"] },
      { slot: 1, name: "Netherite Chestplate", count: 1, icon: "netherite_chestplate", enchantments: ["Protection IV", "Unbreaking III"] },
      { slot: 2, name: "Netherite Leggings", count: 1, icon: "netherite_leggings", enchantments: ["Protection IV", "Unbreaking III"] },
      { slot: 3, name: "Netherite Boots", count: 1, icon: "netherite_boots", enchantments: ["Protection IV", "Unbreaking III", "Feather Falling IV"] },
      { slot: 9, name: "Netherite Sword", count: 1, icon: "netherite_sword", enchantments: ["Sharpness V", "Fire Aspect II", "Looting III", "Unbreaking III"] },
      { slot: 10, name: "Netherite Pickaxe", count: 1, icon: "netherite_pickaxe", enchantments: ["Efficiency V", "Fortune III", "Mending", "Unbreaking III"] },
      { slot: 11, name: "Netherite Axe", count: 1, icon: "netherite_axe", enchantments: ["Efficiency V", "Sharpness IV", "Unbreaking III"] },
      { slot: 12, name: "Netherite Shovel", count: 1, icon: "netherite_shovel", enchantments: ["Efficiency V", "Unbreaking III"] },
      { slot: 18, name: "Enchanted Golden Apple", count: 4, icon: "enchanted_golden_apple", lore: ["Ancient enchanted apple with max buffs."] },
      { slot: 19, name: "Golden Apple", count: 64, icon: "golden_apple" },
      { slot: 20, name: "Totem of Undying", count: 1, icon: "totem_of_undying", lore: ["Grants a second chance at life."] },
      { slot: 21, name: "Ender Pearl", count: 16, icon: "ender_pearl" },
      { slot: 22, name: "Bottle o' Enchanting", count: 64, icon: "bottle_o_enchanting" },
      { slot: 23, name: "Netherite Ingot", count: 4, icon: "netherite_ingot" },
    ],
  },
  ombil: {
    id: "ombil",
    name: "OMBIL Kit",
    badgeColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    description: "Supreme Netherite battle set with Thorns, multiple Totems, and 8 God Apples.",
    items: [
      { slot: 0, name: "Supreme Netherite Helmet", count: 1, icon: "netherite_helmet", enchantments: ["Protection IV", "Unbreaking III", "Mending", "Respiration III"] },
      { slot: 1, name: "Supreme Netherite Chestplate", count: 1, icon: "netherite_chestplate", enchantments: ["Protection IV", "Unbreaking III", "Mending", "Thorns II"] },
      { slot: 2, name: "Supreme Netherite Leggings", count: 1, icon: "netherite_leggings", enchantments: ["Protection IV", "Unbreaking III", "Mending"] },
      { slot: 3, name: "Supreme Netherite Boots", count: 1, icon: "netherite_boots", enchantments: ["Protection IV", "Unbreaking III", "Mending", "Soul Speed III"] },
      { slot: 9, name: "OMBIL God Blade", count: 1, icon: "netherite_sword", enchantments: ["Sharpness V", "Sweeping Edge III", "Fire Aspect II", "Looting III", "Mending"] },
      { slot: 10, name: "OMBIL God Pickaxe", count: 1, icon: "netherite_pickaxe", enchantments: ["Efficiency V", "Silk Touch", "Unbreaking III", "Mending"] },
      { slot: 11, name: "OMBIL God Axe", count: 1, icon: "netherite_axe", enchantments: ["Efficiency V", "Sharpness V", "Unbreaking III", "Mending"] },
      { slot: 12, name: "OMBIL God Shovel", count: 1, icon: "netherite_shovel", enchantments: ["Efficiency V", "Silk Touch", "Unbreaking III", "Mending"] },
      { slot: 18, name: "Enchanted Golden Apple", count: 8, icon: "enchanted_golden_apple" },
      { slot: 19, name: "Totem of Undying", count: 2, icon: "totem_of_undying" },
      { slot: 20, name: "Ender Pearl", count: 32, icon: "ender_pearl" },
      { slot: 21, name: "Wind Charge", count: 32, icon: "wind_charge", lore: ["1.21 Trial burst charge."] },
      { slot: 22, name: "Golden Carrot", count: 64, icon: "golden_carrot" },
      { slot: 23, name: "Bottle o' Enchanting", count: 128, icon: "bottle_o_enchanting" },
      { slot: 24, name: "Netherite Block", count: 2, icon: "netherite_block" },
    ],
  },
  bejeng: {
    id: "bejeng",
    name: "BEJENG Kit",
    badgeColor: "text-sky-300 border-sky-400/50 bg-sky-500/15",
    description: "Apex God gear with Protection V, Trial Mace, 4 Totems, and 16 God Apples.",
    items: [
      { slot: 0, name: "BEJENG Apex Helmet", count: 1, icon: "netherite_helmet", enchantments: ["Protection V", "Unbreaking IV", "Mending", "Aqua Affinity"] },
      { slot: 1, name: "BEJENG Apex Chestplate", count: 1, icon: "netherite_chestplate", enchantments: ["Protection V", "Unbreaking IV", "Mending", "Thorns III"] },
      { slot: 2, name: "BEJENG Apex Leggings", count: 1, icon: "netherite_leggings", enchantments: ["Protection V", "Unbreaking IV", "Mending", "Swift Sneak III"] },
      { slot: 3, name: "BEJENG Apex Boots", count: 1, icon: "netherite_boots", enchantments: ["Protection V", "Unbreaking IV", "Mending", "Feather Falling IV"] },
      { slot: 9, name: "BEJENG Apex God Blade", count: 1, icon: "netherite_sword", enchantments: ["Sharpness V", "Sweeping Edge III", "Fire Aspect II", "Looting III", "Mending"] },
      { slot: 10, name: "BEJENG Apex God Pickaxe", count: 1, icon: "netherite_pickaxe", enchantments: ["Efficiency V", "Fortune III", "Mending", "Unbreaking IV"] },
      { slot: 11, name: "BEJENG Apex God Axe", count: 1, icon: "netherite_axe", enchantments: ["Efficiency V", "Sharpness V", "Looting III", "Mending"] },
      { slot: 12, name: "BEJENG Trial Mace", count: 1, icon: "mace", enchantments: ["Density V", "Breach IV", "Unbreaking III"] },
      { slot: 18, name: "Enchanted Golden Apple", count: 16, icon: "enchanted_golden_apple" },
      { slot: 19, name: "Totem of Undying", count: 4, icon: "totem_of_undying" },
      { slot: 20, name: "Ender Pearl", count: 64, icon: "ender_pearl" },
      { slot: 21, name: "Golden Carrot", count: 64, icon: "golden_carrot" },
      { slot: 22, name: "Bottle o' Enchanting", count: 256, icon: "bottle_o_enchanting" },
      { slot: 23, name: "Netherite Block", count: 8, icon: "netherite_block" },
    ],
  },
};

// 6 Exact Ranks in Order: VIP -> MVP -> SKOR -> OMBIL -> BEJENG -> SOMLOR
export const STORE_RANKS: RankData[] = [
  {
    id: "vip",
    name: "VIP",
    tier: 1,
    price: 5.00,
    duration: "1 Month",
    landClaim: "9 Chunks",
    moneyBonus: "+100,000",
    kitName: "VIP Kit",
    extraPermissions: [],
    badgeColor: "text-blue-400 border-blue-500/40 bg-blue-500/10",
    glowColor: "hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    accentGradient: "from-blue-500/20 via-slate-900 to-slate-950",
    shortDesc: "Essential starter rank with 9 chunks land claim, +100,000 money bonus, and VIP kit.",
    fullDesc: "Step into the server with distinguished VIP status. Includes 9 chunks land claim to protect your base, an instant +100,000 money bonus, and full access to claim the VIP Kit every month.",
    iconType: "vip",
    kitId: "vip",
    mainBenefits: [
      "Duration: 1 Month",
      "Land Claim: 9 Chunks",
      "Money Bonus: +100,000",
      "Kit Included: VIP Kit",
      "Player can claim the VIP Kit",
    ],
    fullPermissions: [
      {
        category: "Rank Specifications",
        items: [
          "Duration: 1 Month",
          "Land Claim: 9 Chunks protection",
          "Money Bonus: +100,000 currency directly to /bal",
          "Kit: Full VIP Kit access (/kit vip)",
        ],
      },
      {
        category: "Privileges",
        items: [
          "Player can claim the VIP Kit",
          "Priority queue skip during peak server hours",
          "Blue [VIP] prefix in global chat",
        ],
      },
    ],
    commands: ["/kit vip", "/claim", "/bal"],
    exclusivePerks: ["9 Chunks Land Claim", "+100,000 Money", "VIP Kit Claim"],
  },
  {
    id: "mvp",
    name: "MVP",
    tier: 2,
    price: 7.50,
    duration: "1 Month",
    landClaim: "12 Chunks",
    moneyBonus: "+200,000",
    kitName: "MVP Kit",
    extraPermissions: [],
    badgeColor: "text-amber-400 border-red-500/40 bg-gradient-to-r from-red-500/10 to-amber-500/10",
    glowColor: "hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]",
    accentGradient: "from-red-500/20 via-slate-900 to-slate-950",
    shortDesc: "Upgraded rank with 12 chunks land claim, +200,000 money bonus, and MVP kit.",
    fullDesc: "Boost your gameplay with MVP. Expand your territory to 12 chunks, collect +200,000 server balance, and claim the powerful MVP Kit.",
    iconType: "mvp",
    kitId: "mvp",
    mainBenefits: [
      "Duration: 1 Month",
      "Land Claim: 12 Chunks",
      "Money Bonus: +200,000",
      "Kit Included: MVP Kit",
      "Player can claim the MVP Kit",
    ],
    fullPermissions: [
      {
        category: "Rank Specifications",
        items: [
          "Duration: 1 Month",
          "Land Claim: 12 Chunks protection",
          "Money Bonus: +200,000 currency directly to /bal",
          "Kit: Full MVP Kit access (/kit mvp)",
        ],
      },
      {
        category: "Privileges",
        items: [
          "Player can claim the MVP Kit",
          "Red & Gold [MVP] prefix in chat",
          "Priority queue bypass",
        ],
      },
    ],
    commands: ["/kit mvp", "/claim", "/bal"],
    exclusivePerks: ["12 Chunks Land Claim", "+200,000 Money", "MVP Kit Claim"],
  },
  {
    id: "skor",
    name: "SKOR",
    tier: 3,
    price: 10.00,
    duration: "1 Month",
    landClaim: "15 Chunks",
    moneyBonus: "+300,000",
    kitName: "SKOR Kit",
    extraPermissions: [],
    badgeColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    glowColor: "hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    accentGradient: "from-cyan-500/20 via-slate-900 to-slate-950",
    shortDesc: "Experienced rank with 15 chunks land claim, +300,000 money bonus, and SKOR kit.",
    fullDesc: "Dominate survival with SKOR. Unlock 15 protected chunks, a major +300,000 economy infusion, and access to claim the Netherite SKOR Kit.",
    iconType: "skor",
    kitId: "skor",
    mainBenefits: [
      "Duration: 1 Month",
      "Land Claim: 15 Chunks",
      "Money Bonus: +300,000",
      "Kit Included: SKOR Kit",
      "Player can claim the SKOR Kit",
    ],
    fullPermissions: [
      {
        category: "Rank Specifications",
        items: [
          "Duration: 1 Month",
          "Land Claim: 15 Chunks protection",
          "Money Bonus: +300,000 currency directly to /bal",
          "Kit: Full SKOR Kit access (/kit skor)",
        ],
      },
      {
        category: "Privileges",
        items: [
          "Player can claim the SKOR Kit",
          "Cyan [SKOR] prefix in chat",
          "Enhanced claim security",
        ],
      },
    ],
    commands: ["/kit skor", "/claim", "/bal"],
    exclusivePerks: ["15 Chunks Land Claim", "+300,000 Money", "SKOR Kit Claim"],
  },
  {
    id: "ombil",
    name: "OMBIL",
    tier: 4,
    price: 15.00,
    duration: "1 Month",
    landClaim: "20 Chunks",
    moneyBonus: "+400,000",
    kitName: "OMBIL Kit",
    extraPermissions: [],
    badgeColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    glowColor: "hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    accentGradient: "from-purple-500/20 via-slate-900 to-slate-950",
    shortDesc: "Noble rank with 20 chunks land claim, +400,000 money bonus, and OMBIL kit.",
    fullDesc: "Elevate your empire with OMBIL. Secure a massive 20 chunks territory, enjoy +400,000 money bonus, and claim the supreme OMBIL Kit.",
    iconType: "ombil",
    kitId: "ombil",
    mainBenefits: [
      "Duration: 1 Month",
      "Land Claim: 20 Chunks",
      "Money Bonus: +400,000",
      "Kit Included: OMBIL Kit",
      "Player can claim the OMBIL Kit",
    ],
    fullPermissions: [
      {
        category: "Rank Specifications",
        items: [
          "Duration: 1 Month",
          "Land Claim: 20 Chunks protection",
          "Money Bonus: +400,000 currency directly to /bal",
          "Kit: Full OMBIL Kit access (/kit ombil)",
        ],
      },
      {
        category: "Privileges",
        items: [
          "Player can claim the OMBIL Kit",
          "Purple [OMBIL] prefix in chat",
          "Priority queue bypass",
        ],
      },
    ],
    commands: ["/kit ombil", "/claim", "/bal"],
    exclusivePerks: ["20 Chunks Land Claim", "+400,000 Money", "OMBIL Kit Claim"],
  },
  {
    id: "bejeng",
    name: "BEJENG",
    tier: 5,
    price: 20.00,
    duration: "1 Month",
    landClaim: "48 Chunks",
    moneyBonus: "+500,000",
    kitName: "BEJENG Kit",
    extraPermissions: ["/fly"],
    badgeColor: "text-sky-300 border-sky-400/60 bg-sky-500/15",
    glowColor: "hover:border-sky-400/80 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]",
    accentGradient: "from-sky-500/25 via-slate-900 to-slate-950",
    shortDesc: "Diamond rank with 48 chunks, +500,000 money bonus, BEJENG kit, and /fly permission.",
    fullDesc: "Command the skies with the signature BEJENG rank. Unlocks creative flight (/fly), a huge 48 chunks claim area, +500,000 currency, and the Apex BEJENG Kit.",
    iconType: "bejeng",
    kitId: "bejeng",
    mainBenefits: [
      "Duration: 1 Month",
      "Land Claim: 48 Chunks",
      "Money Bonus: +500,000",
      "Kit Included: BEJENG Kit",
      "Player can claim the BEJENG Kit",
      "Permission: /fly",
    ],
    fullPermissions: [
      {
        category: "Rank Specifications",
        items: [
          "Duration: 1 Month",
          "Land Claim: 48 Chunks protection",
          "Money Bonus: +500,000 currency directly to /bal",
          "Kit: Full BEJENG Kit access (/kit bejeng)",
        ],
      },
      {
        category: "Exclusive Permissions",
        items: [
          "/fly (Fly anywhere in survival worlds)",
          "Player can claim the BEJENG Kit",
          "Diamond Blue [BEJENG] prefix in chat",
        ],
      },
    ],
    commands: ["/fly", "/kit bejeng", "/claim", "/bal"],
    exclusivePerks: ["/fly Permission", "48 Chunks Land Claim", "+500,000 Money", "BEJENG Kit Claim"],
  },
  {
    id: "somlor",
    name: "SOMLOR",
    tier: 6,
    price: 25.00,
    duration: "1 Month",
    landClaim: "64 Chunks",
    moneyBonus: "+1,000,000",
    kitName: "ALL KITS (5 Kits)",
    extraPermissions: ["/fly", "/craft", "/ec", "/anvil"],
    badgeColor: "text-amber-300 border-amber-400/70 bg-gradient-to-r from-amber-500/20 to-purple-600/20",
    glowColor: "hover:border-amber-400/90 hover:shadow-[0_0_40px_rgba(245,158,11,0.45)] ring-1 ring-amber-400/30",
    accentGradient: "from-amber-500/25 via-purple-900/30 to-slate-950",
    shortDesc: "Supreme highest tier rank: 64 chunks, +1,000,000 money, ALL KITS, /fly, /craft, /ec, /anvil.",
    fullDesc: "The ultimate supreme rank on BeJengMC. Gives you access to ALL 5 RANK KITS (VIP + MVP + SKOR + OMBIL + BEJENG), 64 chunks territory, +1,000,000 money bonus, and full god permissions (/fly, /craft, /ec, /anvil).",
    iconType: "somlor",
    kitId: "somlor",
    mainBenefits: [
      "Duration: 1 Month",
      "Land Claim: 64 Chunks",
      "Money Bonus: +1,000,000",
      "Kit Included: ALL KITS (VIP + MVP + SKOR + OMBIL + BEJENG)",
      "Player can claim VIP, MVP, SKOR, OMBIL, and BEJENG Kits",
      "Permissions: /fly, /craft, /ec, /anvil",
    ],
    fullPermissions: [
      {
        category: "Rank Specifications",
        items: [
          "Duration: 1 Month",
          "Land Claim: 64 Chunks protection (Maximum Server Territory)",
          "Money Bonus: +1,000,000 currency directly to /bal",
          "Kit: ALL 5 RANK KITS INCLUDED",
        ],
      },
      {
        category: "All Kits Access",
        items: [
          "Player can claim VIP Kit",
          "Player can claim MVP Kit",
          "Player can claim SKOR Kit",
          "Player can claim OMBIL Kit",
          "Player can claim BEJENG Kit",
        ],
      },
      {
        category: "Exclusive God Permissions",
        items: [
          "/fly (Creative Flight in survival)",
          "/craft (Virtual Crafting Table anywhere)",
          "/ec (Virtual Ender Chest anywhere)",
          "/anvil (Virtual Anvil anywhere without XP penalty)",
          "Supreme Gold & Royal Purple [SOMLOR] prefix in chat",
          "Highest priority server queue skip",
        ],
      },
    ],
    commands: ["/fly", "/craft", "/ec", "/anvil", "/kit vip", "/kit mvp", "/kit skor", "/kit ombil", "/kit bejeng"],
    exclusivePerks: ["ALL KITS Access", "/fly, /craft, /ec, /anvil", "64 Chunks Claim", "+1,000,000 Money"],
  },
];

// Exact Server Item Store Items
export const STORE_ITEMS: StoreItemData[] = [
  {
    id: "dailypass",
    name: "DailyPass",
    amount: "1 DailyPass",
    price: 5.00,
    duration: "1 Week",
    rarity: "Epic",
    badgeColor: "text-amber-400 border-amber-500/40 bg-amber-500/10",
    glowColor: "hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]",
    shortDesc: "7-Day premium server pass unlocking daily rewards, extra streak coin bonuses, and crate tokens.",
    fullDesc: "Activate 7 days of daily premium rewards on the BeJengMC network. Claim daily currency bundles, keys, and streak bonuses every 24 hours.",
    iconType: "dailypass",
    imageUrl: "/images/dailypass.svg",
    minecraftLore: [
      "§6§lBeJengMC DailyPass",
      "§7Duration: §f1 Week (7 Days)",
      "§7Quantity: §f1 DailyPass",
      "§eDaily Coin & Key Deliveries",
      "§aStreak Multiplier Boost",
      "§6§oActive membership ticket",
    ],
    deliveryInfo: "Activated directly on your player profile upon login (/dailypass).",
  },
  {
    id: "op-key",
    name: "OP Key",
    amount: "1 Key",
    price: 1.00,
    rarity: "Mythic",
    badgeColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    glowColor: "hover:border-purple-400/70 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
    shortDesc: "Overpowered Mythic Crate Key usable at spawn to roll for high-tier netherite, gear, and rank vouchers.",
    fullDesc: "Unlock the Supreme OP Vault at spawn. Gives you a roll at game-changing items including God gear, Netherite blocks, Spawners, and rank upgrade vouchers.",
    iconType: "op_key",
    imageUrl: "/images/op_key.svg",
    minecraftLore: [
      "§d§lOverpowered Crate Key",
      "§7Quantity: §f1 Key",
      "§5Usable at: §fSpawn OP Vault (/crates)",
      "§aGuaranteed Mythic reward pool",
      "§e§oContains ancient realm treasures",
    ],
    deliveryInfo: "Instantly credited to your virtual crate key pouch (/keys).",
  },
  {
    id: "bejeng-kit-item",
    name: "BEJENG Kit",
    amount: "1 Kit",
    price: 2.50,
    rarity: "Mythic",
    badgeColor: "text-sky-300 border-sky-400/60 bg-sky-500/15",
    glowColor: "hover:border-sky-400/70 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]",
    shortDesc: "Standalone BEJENG Kit package with supreme netherite gear, god weapons, totems, and enchanted apples.",
    fullDesc: "Purchase the standalone BEJENG Kit without needing the rank! Includes Protection V Netherite Armor, God Blade, 16 God Apples, 4 Totems, and 256 XP bottles.",
    iconType: "bejeng_kit",
    imageUrl: "/images/kit_bejeng.svg",
    minecraftLore: [
      "§b§lBEJENG Standalone Kit",
      "§7Quantity: §f1 Kit Package",
      "§3Full Protection V Netherite Gear",
      "§bBEJENG God Blade & God Pickaxe",
      "§e16x Enchanted Golden Apples & 4x Totems",
      "§5§oThe ultimate warrior package",
    ],
    deliveryInfo: "Delivered straight to your inventory or mailbox (/mail).",
  },
  {
    id: "ombil-kit-item",
    name: "OMBIL Kit",
    amount: "1 Kit",
    price: 1.50,
    rarity: "Legendary",
    badgeColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    glowColor: "hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]",
    shortDesc: "Standalone OMBIL Kit package with enchanted Netherite armor set, God Pickaxe, and battle essentials.",
    fullDesc: "One-time purchase of the OMBIL Kit. Packed with full Protection IV Netherite armor, OMBIL Greatsword, Silk Touch Pickaxe, 8 God Apples, and 2 Totems.",
    iconType: "ombil_kit",
    imageUrl: "/images/kit_ombil.svg",
    minecraftLore: [
      "§5§lOMBIL Standalone Kit",
      "§7Quantity: §f1 Kit Package",
      "§dFull Protection IV Netherite Armor",
      "§dOMBIL Greatsword & Silk Touch Pick",
      "§e8x God Apples & 2x Totems of Undying",
      "§5§oForged in the purple nether void",
    ],
    deliveryInfo: "Delivered straight to your in-game inventory.",
  },
  {
    id: "mace-op",
    name: "Mace OP",
    amount: "1 Mace",
    price: 4.00,
    rarity: "Mythic",
    badgeColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    glowColor: "hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]",
    shortDesc: "God-tier 1.21.11 Mace with Density V, Breach IV, Wind Burst III, Fire Aspect II, and Mending.",
    fullDesc: "The ultimate 1.21 God Weapon. Crafted with an authentic Heavy Core and Breeze Rod, pre-enchanted with max Density V, Breach IV, Unbreaking III, Wind Burst III, Fire Aspect II, and Mending for devastating smash attacks.",
    iconType: "mace_op",
    imageUrl: "/images/mace_op.svg",
    minecraftLore: [
      "§b§lOverpowered Heavy Mace",
      "§7Quantity: §f1 Mace Weapon",
      "§9Density V",
      "§9Breach IV",
      "§9Unbreaking III",
      "§9Wind Burst III",
      "§9Fire Aspect II",
      "§9Mending",
      "§bSmash Attack Damage: §fExtreme",
      "§3§oCrushes enemies with trial chamber force",
    ],
    deliveryInfo: "Safe delivery placed directly into your hand or Ender Chest.",
  },
  {
    id: "server-money",
    name: "Money",
    amount: "50M Money",
    price: 1.00,
    rarity: "Common",
    badgeColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    glowColor: "hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    shortDesc: "50,000,000 In-Game Server Balance added directly to your /bal economy account.",
    fullDesc: "Instant wealth boost. Instantly deposits $50,000,000 in-game currency into your balance to purchase land, trade with other players, or buy top shop items.",
    iconType: "money",
    imageUrl: "/images/money.svg",
    minecraftLore: [
      "§a§lServer Currency Bundle",
      "§7Amount: §f50,000,000 ($50M) Money",
      "§2Credited to: §f/bal",
      "§aTrade, buy shop items, or expand claims",
      "§6§oInstant economy deposit",
    ],
    deliveryInfo: "Instantly credited to your balance (/bal) by server admin.",
  },
  {
    id: "wolf-spawner",
    name: "Wolf Spawner",
    amount: "500 Wolf Spawners",
    price: 5.00,
    rarity: "Legendary",
    badgeColor: "text-orange-400 border-orange-500/40 bg-orange-500/10",
    glowColor: "hover:border-orange-400/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]",
    shortDesc: "Bulk pack of 500 Wolf Spawner blocks for automated mob farming, XP grind, and loot production.",
    fullDesc: "Massive farming upgrade! Contains 500 placeable Wolf Spawners designed for high-efficiency mob grinding setups, rapid XP gathering, and army creation.",
    iconType: "wolf_spawner",
    imageUrl: "/images/wolf_spawner.svg",
    minecraftLore: [
      "§6§lBulk Wolf Spawner Pack",
      "§7Amount: §f500 Spawners",
      "§cMob: §fWolf / Pack Hunter",
      "§eHigh XP & Bone Drop Rate",
      "§7Stackable: §fYes (Compatible with /spawners)",
      "§4§oContains glowing soul fire embers",
    ],
    deliveryInfo: "Delivered as stackable crate blocks directly to your claim.",
  },
];
