"use client";

import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

interface TooltipWrapperProps {
  children: React.ReactNode;
  content: React.ReactNode;
  delayDuration?: number;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  triggerClassName?: string;
  contentClassName?: string;
}

export default function TooltipWrapper({
  children,
  content,
  delayDuration = 300,
  side = "top",
  sideOffset = 4,
  triggerClassName = "",
  contentClassName = "",
}: TooltipWrapperProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger asChild className={triggerClassName}>
          <span className="cursor-pointer">{children}</span>
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset} className={contentClassName}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
