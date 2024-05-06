import { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../utils/ContextProvider";

const Balance = () => {
  const [balance, setBalance] = useState<string>("0.00");
  const [income, setIncome] = useState<string>("0.00");
  const [expense, setExpense] = useState<string>("0.00");
  const { transaction, setTransaction } = useContext(HistoryContext);

  useEffect(() => {
    const getInitialHistory = () => {
      try {
        const historyData = localStorage.getItem("history");
        if (historyData) {
          const parsedData = JSON.parse(historyData);
          console.log("Loaded from localStorage:", parsedData);
          const savedHistory = new Map<string, number>(parsedData);
          setTransaction(savedHistory);
        } else {
          console.log("No history found in localStorage.");
        }
      } catch (error) {
        console.error(
          "Failed to load and parse history from localStorage:",
          error
        );
      }
    };

    getInitialHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect for saving transaction to localStorage and calculating balances
  useEffect(() => {
    // Calculate and update balance, income, and expense based on transactions
    if (transaction && transaction.size > 0) {
      localStorage.setItem(
        "history",
        JSON.stringify(Array.from(transaction.entries()))
      );
    }

    const calculateBalance = () => {
      let total = 0;
      let totalPositive = 0;
      let totalNegative = 0;

      for (const amount of transaction.values()) {
        total += amount;
        if (amount > 0) {
          totalPositive += amount;
        } else {
          totalNegative += amount;
        }
      }

      setBalance(total.toFixed(2));
      setExpense(totalNegative.toFixed(2));
      setIncome(totalPositive.toFixed(2));
    };

    calculateBalance();
  }, [transaction]); // Dependency on transaction state

  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl bg-neutral-50 border-2 border-neutral-300">
      <h3 className="text-base uppercase font-bold tracking-wide">
        Your Balance
      </h3>
      <hr className="h-px bg-neutral-300 border-0"></hr>
      <p className="text-3xl font-bold">{balance} $</p>
      <div className="flex flex-row bg-neutral-50 rounded-lg justify-center border-2 border-neutral-300">
        <div className="flex p-4 flex-col justify-center items-center border-r-2 border-neutral-300 w-full">
          <p className="text-l font-bold">Total Income</p>
          <p className="text-base text-green-600 font-bold">{`${
            income === "0.00" ? "" : "+"
          }${income} $`}</p>
        </div>
        <div className="flex p-4 flex-col justify-center items-center w-full">
          <p className="text-l font-bold">Total Expense</p>
          <p className="text-base text-red-600 font-bold">{`${expense} $`}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
