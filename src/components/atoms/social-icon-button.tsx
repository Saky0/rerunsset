"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { SafeImage } from "@/components/atoms/safe-image";

type Props = {
  href: string;
  ariaLabel: string;
  iconSrc?: string; // prefer image from /public/contact-icons
  icon?: ReactNode; // fallback react icon
  size?: number; // outer size in px
};

export function SocialIconButton({ href, ariaLabel, iconSrc, icon, size = 42 }: Props) {
  const inner = size - 4; // account for 2px gradient border (padding)
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex rounded-full p-[2px] bg-[linear-gradient(135deg,#60a5fa_0%,#a78bfa_50%,#22d3ee_100%)] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
      style={{ width: size, height: size }}
    >
      <span
        className="rounded-full bg-white dark:bg-neutral-950 grid place-items-center"
        style={{ width: inner, height: inner }}
      >
        {iconSrc ? (
          <SafeImage src={iconSrc} alt={ariaLabel} width={20} height={20} className="object-contain" />
        ) : (
          icon
        )}
      </span>
    </Link>
  );
}
