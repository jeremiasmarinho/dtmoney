import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal(){
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />
     
      <GlobalStyle />
    </>
  );
};
