import { useContext } from "react";
import { HistoryContext } from "../utils/ContextProvider";
import Cards from "./Cards";

const TransactionList = () => {
  // Access the context value
  const { transaction, setTransaction } = useContext(HistoryContext);

  const handleClose = (key: string) => {
    // Clone the current transaction Map, add the new transaction, and update the state
    const updatedTransaction = new Map(transaction);
    updatedTransaction.delete(key);
    setTransaction(updatedTransaction);
  };

  // Function to convert Map entries to array of JSX elements
  const renderTransactionList = () => {
    const entries = Array.from(transaction.entries()); // Convert Map entries to array
    return entries.map(([key, value], index) => (
      <Cards
        name={key}
        price={`${value.toFixed(2)} $`}
        key={index}
        onClick={() => handleClose(key)}
      /> // Display key (string) and value (number)
    ));
  };

  return (
    <div className="flex flex-col p-4 rounded-lg bg-neutral-50 gap-4 border-2 border-neutral-300">
      <h3 className="text-lg uppercase font-bold leading-tight">History</h3>
      <hr className="h-px bg-neutral-300 border-0" />
      {renderTransactionList()}
    </div>
  );
};

export default TransactionList;
