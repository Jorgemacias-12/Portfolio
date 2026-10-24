import { useModal } from '@/hooks/useModal';
import clsx from 'clsx';
import { X } from 'lucide-react';
import type { DialogHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
  title?: string;
}

export const Modal = ({ children, title, open }: Props) => {
  const { containerRef, dialogRef, isModalMounted, isModalVisible, closeModal } = useModal(open!);

  if (!isModalMounted) return null;

  return createPortal(
    <section
      ref={containerRef}
      onClick={closeModal}
      className={clsx(
        'fixed inset-0 z-40 flex items-center justify-center bg-black/75 backdrop-blur-md transition-opacity duration-300',
        isModalVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      <dialog
        ref={dialogRef}
        className={clsx(
          'relative z-50 m-0 flex h-full max-h-[50dvh] w-full max-w-sm flex-col justify-between overflow-hidden rounded-md text-black shadow-lg outline-none md:max-w-md lg:max-w-lg xl:max-w-xl dark:text-white',
          'border-border bg-surface border',
          isModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
          'transition-all duration-300'
        )}
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="border-border flex items-center justify-between border-b p-3">
          <h3 id="modal-title">{title}</h3>

          <button
            type="button"
            onClick={() => closeModal()}
            className="cursor-pointer rounded-md p-1 transition-colors duration-200 hover:bg-red-500 hover:text-white"
          >
            <X size={18} />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-2">{children}</main>

        <footer className="border-border border-t p-4"></footer>
      </dialog>
    </section>,
    document.body
  );
};
