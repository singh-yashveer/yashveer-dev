import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import SpinningLoader from "@/shared/UI/SpinningLoader";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "shadow bg-primary-70 text-white hover:bg-primary-80 focus-visible:ring-primary-30 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        danger: "shadow bg-red-80 text-white hover:bg-red-90 focus-visible:ring-red-30 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        "danger-secondary":
          "shadow bg-white border border-red-300 text-red-80 hover:bg-red-10 focus-visible:ring-red-30 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline:
          "shadow border border-neutral-200 bg-white text-grey-110 focus-visible:ring-grey-30 hover:bg-grey-20 hover:text-grey-130 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "shadow bg-white text-primary-70 hover:bg-primary-10 border border-primary-60 focus-visible:ring-primary-30 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        tertiary:
          "bg-white shadow text-grey-110 hover:bg-grey-20 hover:text-grey-130 border border-grey-60 focus-visible:ring-grey-50/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "bg-white text-grey-110 focus-visible:ring-0 focus-visible:bg-grey-30 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "shadow text-primary-70 hover:text-primary-80 p-0 underline-offset-4 hover:underline focus-visible:ring-0 focus:text-primary-100 dark:text-neutral-50",
        accept: "shadow text-white bg-green-60 hover:bg-green-70 disabled:bg-green-40 disabled:cursor-not-allowed disabled:text-neutral-30",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const iconClassMap: Record<NonNullable<ButtonComponentProps["variant"]>, string> = {
  primary: "text-white",
  danger: "text-white",
  "danger-secondary": "text-red-80",
  outline: "text-neutral-900 dark:text-neutral-50",
  secondary: "text-neutral-900 dark:text-neutral-50",
  tertiary: "text-grey-120 dark:text-neutral-50",
  ghost: "text-grey-110 dark:text-neutral-50",
  accept: "text-white",
  link: "text-primary-70 group-hover:text-primary-80 group-focus-visible:text-primary-100 dark:text-neutral-50",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
export interface ButtonComponentProps extends ButtonProps {
  iconOnly?: boolean;
  leadIcon?: React.ReactNode;
  trailIcon?: React.ReactNode;
  isLoading?: boolean;
  loaderColor?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonComponentProps>(
  ({ className, variant, size, asChild = false, iconOnly, leadIcon, trailIcon, isLoading, loaderColor = "white", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const resolvedSize = iconOnly ? "icon" : size;
    const iconClass = variant ? iconClassMap[variant] : "primary";

    const leadIconElement = leadIcon && (
      <span
        className={cn(
          "inline-flex items-center [&_svg]:size-4 transition-all",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
          iconOnly ? "" : "mr-1",
          iconClass
        )}
      >
        {leadIcon}
      </span>
    );

    const trailIconElement = trailIcon && (
      <span
        className={cn(
          "inline-flex items-center [&_svg]:size-4 transition-all",
          "group-hover:opacity-100 group-focus-visible:opacity-100",
          iconOnly ? "" : "ml-1",
          iconClass
        )}
      >
        {trailIcon}
      </span>
    );

    return (
      <>
        <Comp className={cn("group", buttonVariants({ variant, size: resolvedSize, className }))} ref={ref} {...props}>
          {leadIconElement}

          {isLoading ? <SpinningLoader color={loaderColor} /> : props.children}
          {trailIconElement}
        </Comp>
      </>
    );
  }
);

export { Button, buttonVariants };
