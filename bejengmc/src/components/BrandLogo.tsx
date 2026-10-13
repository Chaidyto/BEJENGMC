"use client";

import { useState } from "react";
import { getAssetPath } from "@/lib/assets";

interface BrandLogoProps {
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export default function BrandLogo({
  alt = "BeJengMC Logo",
  className = "",
  width,
  height,
  style,
}: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? getAssetPath("/logos/logo.jpg") : getAssetPath("/logo.png")}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      onError={() => {
        if (!hasError) setHasError(true);
      }}
    />
  );
}
