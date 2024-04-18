import IncomeExpenses from "./IncomeExpenses";

const Balance = () => {
    return (
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-gray-50 border-2 border-gray-300">
            <h3 className="text-base uppercase font-bold tracking-wide">
                Your Balance
            </h3>
            <hr className="h-px bg-gray-300 border-0"></hr>
            <p className="text-3xl font-bold">$0.00</p>
            <IncomeExpenses />
        </div>
    );
};

export default Balance;
