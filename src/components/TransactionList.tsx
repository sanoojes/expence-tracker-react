import Cards from "./Cards";

const TransactionList = () => {
    return (
        <div className="flex flex-col p-4 rounded-lg bg-gray-50 gap-4 border-2 border-gray-300">
            <h3 className="text-lg  uppercase font-bold leading-0">History</h3>
            <hr className="h-px bg-gray-300 border-0" />
            <Cards name="Salary" price="+$10000.00" />
            <Cards name="Car" price="-$1000.00" />
        </div>
    );
};

export default TransactionList;
