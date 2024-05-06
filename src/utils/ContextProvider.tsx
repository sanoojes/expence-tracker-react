import { ReactNode, createContext, useState } from "react";

// Define the shape of the state including a Map.
interface HistoryState {
  transaction: Map<string, number>;
}

// Extends HistoryState to include the setter function.
interface HistoryContextType extends HistoryState {
  setTransaction: (transaction: Map<string, number>) => void;
}

// Provide a default state with an initialized Map.
const defaultState: HistoryContextType = {
  transaction: new Map<string, number>(),
  setTransaction: () => {},
};

// Create the context with the default state.
const HistoryContext = createContext<HistoryContextType>(defaultState);

interface HistoryProviderProps {
  children: ReactNode;
}

const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  // State management for transactions
  const [transaction, setTransaction] = useState<Map<string, number>>(
    new Map<string, number>()
  );

  // Handler to update the transaction state
  const handleSetTransaction = (newTransaction: Map<string, number>) => {
    setTransaction(new Map(newTransaction));
  };

  // Context value to be passed to consumers
  const contextValue: HistoryContextType = {
    transaction,
    setTransaction: handleSetTransaction,
  };

  return (
    <HistoryContext.Provider value={contextValue}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryContext, HistoryProvider };
