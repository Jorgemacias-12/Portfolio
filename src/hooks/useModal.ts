import { useCallback, useEffect, useRef, useState } from "react";

export const useModal = (isOpen: boolean, onClose?: () => void) => {
  const [isModalMounted, setIsModalMounted] = useState<boolean>(isOpen);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback(() => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);

    setIsModalMounted(true);

    openTimeoutRef.current = setTimeout(() => {
      setIsModalVisible(true);

      dialogRef.current?.focus();
    }, 20);
  }, []);

  const closeModal = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);

    setIsModalVisible(false);

    closeTimeoutRef.current = setTimeout(() => {
      setIsModalMounted(false);

      onClose?.();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    isOpen ? openModal() : closeModal();
  }, [isOpen, openModal, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isModalVisible ? "hidden" : "unset";
  }, [isModalVisible]);

  useEffect(() => {
    if (!isModalMounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalMounted]);

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return {
    isModalMounted,
    isModalVisible,
    containerRef,
    dialogRef,
    openModal,
    closeModal,
  };
};
