import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";

const App = () => {
    return (
        <div className="flex flex-col p-4 gap-4 justify-center">
            <Header />
            <Balance />
            <TransactionList />
            <AddTransaction />
        </div>
    );
};

export default App;
