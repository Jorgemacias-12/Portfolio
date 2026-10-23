import { useModal } from "@/hooks/useModal";
import clsx from "clsx";
import { X } from "lucide-react";
import type { DialogHTMLAttributes } from "react";
import { createPortal } from "react-dom";

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  shouldBeOpen?: boolean;
  title?: string;
}

export const Modal = ({ children, title, open }: Props) => {
  const {
    containerRef,
    dialogRef,
    isModalMounted,
    isModalVisible,
    closeModal,
  } = useModal(open!);

  if (!isModalMounted) return null;

  return createPortal(
    <section
      ref={containerRef}
      onClick={closeModal}
      className={clsx(
        "fixed inset-0 z-40 bg-black/75 backdrop-blur-md flex items-center justify-center transition-opacity duration-300",
        isModalVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <dialog
        ref={dialogRef}
        className={clsx(
          "z-50 relative m-0 flex max-h-[50dvh] h-full w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-col justify-between overflow-hidden rounded-md shadow-lg outline-none text-black dark:text-white",
          "border border-border bg-surface",
          isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
          "transition-all duration-300",
        )}
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center border-border border-b p-3">
          <h3 id="modal-title">{title}</h3>

          <button
            type="button"
            onClick={() => closeModal()}
            className="cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-200 rounded-md p-1"
          >
            <X size={18} />
          </button>
        </header>

        <main className="flex-1 p-2 overflow-y-auto">{children}</main>

        <footer className="border-t border-border p-4"></footer>
      </dialog>
    </section>,
    document.body,
  );
};
