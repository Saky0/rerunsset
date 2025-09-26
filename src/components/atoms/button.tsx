import Link from "next/link";
import { Button as UIButton } from "@/components/ui/button";
import { ComponentProps } from "react";

// A thin wrapper to render a link-styled button consistently
type Props = ComponentProps<typeof Link> & { variant?: ComponentProps<typeof UIButton>["variant"] };

export function Button({ className = "", variant = "default", ...props }: Props) {
  return (
    <UIButton asChild variant={variant} className={className}>
      <Link {...props} />
    </UIButton>
  );
}
