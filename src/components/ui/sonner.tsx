"use client";

import { Toaster as SonnerToaster, toast } from "sonner";

export { toast };

export function Toaster() {
  return (
    <SonnerToaster
      theme="dark"
      position="bottom-right"
      closeButton
      duration={4200}
      toastOptions={{
        classNames: {
          toast: "voxora-toast",
          title: "voxora-toast-title",
          description: "voxora-toast-description",
          closeButton: "voxora-toast-close",
        },
      }}
    />
  );
}
