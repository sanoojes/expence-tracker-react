const IncomeExpenses = () => {
    return (
        <div className="flex flex-row bg-gray-50 rounded-lg justify-center border-2 border-gray-300">
            <div className="flex p-4 flex-col justify-center items-center border-r-2 border-gray-300 w-full">
                <p className="text-l uppercase font-bold">Income</p>
                <p className="text-base text-green-600 font-bold">+$00.00</p>
            </div>
            <div className="flex p-4 flex-col justify-center items-center w-full">
                <p className="text-l uppercase font-bold">expense</p>
                <p className="text-base text-red-600 font-bold">-$00.00</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
