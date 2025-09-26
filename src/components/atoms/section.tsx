import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export function Section({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<'section'>>) {
  return (
    <section className={cn(
      "w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-14", className
    )} {...props}>
      {children}
    </section>
  );
}

export function SectionHeading({ children, className, ...props }: PropsWithChildren<ComponentPropsWithoutRef<'h2'>>) {
  return (
    <div className={cn("text-center mb-16 animate-fade-in", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", className)} {...props}>
        {children}
      </h2>
    </div>

  );
}
