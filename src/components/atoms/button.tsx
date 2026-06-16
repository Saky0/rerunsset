import { Button as UIButton } from "@/components/ui/button";
import { ComponentProps } from "react";

// A thin wrapper to render a link-styled button consistently
type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: ComponentProps<typeof UIButton>["variant"];
};

export function Button({ className = "", variant = "default", rel, target, ...props }: Props) {
  return (
    <UIButton asChild variant={variant} className={className}>
      <a
        rel={target === "_blank" && rel === undefined ? "noopener noreferrer" : rel}
        target={target}
        {...props}
      />
    </UIButton>
  );
}
