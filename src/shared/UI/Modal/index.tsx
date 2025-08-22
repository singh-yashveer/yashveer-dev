"use client";

import type React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import Text from "../Text";
import { cn } from "@/shared/lib/utils";
import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  children: React.ReactNode;
  containerClasses?: string;
  heading?: ReactNode;
  disableOutsideClick?: boolean;
  hideBorder?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  children,
  width,
  height,
  onClose,
  containerClasses = "",
  heading,
  disableOutsideClick = false,
  hideBorder = false,
}) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (open) {
      // Store the current scroll position
      const scrollY = window.scrollY;

      // Apply styles to disable scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore scroll when modal closes
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  return (
    <Dialog modal={true} open={open} onOpenChange={disableOutsideClick ? undefined : () => onClose()}>
      <DialogContent
        showCloseButton={false}
        className={cn("p-0 sm:rounded-xl overflow-hidden", containerClasses)}
        style={{
          width: width || undefined,
          height: height || undefined,
          maxWidth: width || "calc(100% - 2rem)",
        }}
        aria-describedby={undefined}
      >
        <button
          onClick={onClose}
          className={cn("absolute top-4 right-4 text-[16px] z-[100] text-slate-300 duration-200 hover:text-slate-800 rounded-sm")}
          aria-label="Close modal"
        >
          <X className={cn("h-6 w-6")} />
        </button>
        {heading && (
          <DialogHeader className={"border-b-grey-40 py-[16px] px-[24px]" + (hideBorder ? "" : " border-b")}>
            <DialogTitle>
              {typeof Text !== "undefined" ? (
                <Text typography={"text-display-sm"} className="text-grey-130">
                  {heading}
                </Text>
              ) : (
                <h2 className="text-lg font-medium">{heading}</h2>
              )}
            </DialogTitle>
          </DialogHeader>
        )}
        <div className="max-h-[700px] text-lg overflow-scroll">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
