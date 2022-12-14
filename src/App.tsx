import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";

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
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}

      />
     
      <GlobalStyle />
    </TransactionsProvider>
  );
};
