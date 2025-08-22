"use client";

import { Zap } from "lucide-react";
import TooltipWrapper from "../Tooltip";

const FooterZap = () => {
  return (
    <TooltipWrapper content="Think Lightning. Deliver Lightning!" sideOffset={4}>
      <Zap
        size={18}
        className={
          "transition-all duration-300 ease-in-out cursor-pointer text-zinc-400 hover:scale-125 hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-bounce"
        }
      />
    </TooltipWrapper>
  );
};

export default FooterZap;
