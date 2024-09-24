"use client";
import React, { useState, createContext, useContext, ReactNode } from "react";
import BookCallModal from "../components/Modal";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}


const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  
  // Ensure the context is not undefined before using it
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  
  return context;
};


interface ModalManagerProps {
  children: ReactNode;  
}

const ModalManager: React.FC<ModalManagerProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isModalOpen && <BookCallModal onClose={closeModal} isModalOpen={isModalOpen} />}
    </ModalContext.Provider>
  );
};

export default ModalManager;
