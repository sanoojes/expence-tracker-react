import { useContext, useState, FormEvent } from "react";
import { HistoryContext } from "../utils/ContextProvider";

const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amt, setAmt] = useState<number>(0);

  const { transaction, setTransaction } = useContext(HistoryContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!text || amt === 0) {
      alert("Please enter valid text and amount.");
      return;
    }

    // Clone the current transaction Map, add the new transaction, and update the state
    const updatedTransaction = new Map(transaction);
    updatedTransaction.set(text, amt);
    setTransaction(updatedTransaction);

    // Clear form fields
    setText("");
    setAmt(0);
  };

  return (
    <form
      className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-50 border-2 border-neutral-300"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg uppercase font-bold leading-0">
        Add Transactions
      </h3>
      <hr className="h-px bg-neutral-300 border-0" />
      <label className="text-base font-bold mt-2 tracking-wide">Text</label>
      <input
        type="text"
        value={text}
        placeholder="Enter text..."
        className="bg-neutral-200 p-2 border-2 border-neutral-300 rounded-lg focus:border-neutral-400 focus:outline-none"
        onChange={(e) => setText(e.target.value)}
        required
      />
      <label htmlFor="amt" className="text-base font-bold tracking-wide">
        Amount (negative - expense, positive - income)
      </label>
      <input
        id="amt"
        type="number"
        value={amt}
        placeholder="Enter amount..."
        className="bg-neutral-200 p-2 border-2 border-neutral-300 rounded-lg focus:border-neutral-400 focus:outline-none"
        onChange={(e) => setAmt(Number(e.target.value))}
        required
      />
      <button
        type="submit"
        className="bg-neutral-800 text-white p-2 mt-2 rounded-lg hover:bg-neutral-700 transition-colors"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
