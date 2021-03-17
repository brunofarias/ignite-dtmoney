import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isTransactionModal, setIsTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsTransactionModal(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
      <GlobalStyle />
    </>
  );
}