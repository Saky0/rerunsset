"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & { fallbackSrc?: string };

export function SafeImage({ src, alt, fallbackSrc = "/placeholder.svg", onError, ...rest }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      {...rest}
      src={current}
      alt={alt || "Safe Image"}
      onError={(e) => {
        setCurrent(fallbackSrc);
        onError?.(e);
      }}
    />
  );
}
