"use client";

import type React from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import Text from "../Text";
import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  width?: string;
  height?: string;
  children: React.ReactNode;
  containerClasses?: string;
  crossButtonClasses?: string;
  crossIconClasses?: string;
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
  crossButtonClasses = "",
  crossIconClasses = "",
  heading,
  disableOutsideClick = true,
  hideBorder = false,
}) => {
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-black opacity-80 ${open ? "" : "hidden"}`} />
      <Dialog modal={false} open={open} onOpenChange={disableOutsideClick ? undefined : () => onClose()}>
        <DialogContent
          className={cn("p-0 sm:rounded-xl", containerClasses)}
          style={{
            width: width || undefined,
            height: height || undefined,
            maxWidth: width || "calc(100% - 2rem)",
          }}
          onInteractOutside={(e) => {
            if (disableOutsideClick) {
              e.preventDefault();
            }
          }}
          onClick={(e) => e.stopPropagation()}
          aria-describedby={undefined}
        >
          <button
            onClick={onClose}
            className={cn(
              "absolute top-4 right-4 text-[16px] z-[100] text-slate-300 duration-200 hover:text-slate-800 rounded-sm",
              crossButtonClasses
            )}
            aria-label="Close modal"
          >
            <X className={cn("h-6 w-6", crossIconClasses)} />
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
    </>
  );
};

export default Modal;
