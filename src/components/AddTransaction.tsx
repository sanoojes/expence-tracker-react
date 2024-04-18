const AddTransaction = () => {
    return (
        <form className="flex flex-col gap-2 p-4 rounded-xl bg-gray-50 border-2 border-gray-300">
            <h3 className="text-lg  uppercase font-bold leading-0">
                Add Transactions
            </h3>
            <hr className="h-px bg-gray-300 border-0" />
            <label className="text-base font-bold mt-2 tracking-wide">
                Text
            </label>
            <input
                type="text"
                placeholder="Enter text..."
                className="bg-gray-200 p-2 border-2 border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none"
                required
            />
            <label htmlFor="amt" className="text-base font-bold tracking-wide">
                Amount
                <br />
                (negative - expense, positive - income)
            </label>
            <input
                id="amt"
                type="number"
                placeholder="Enter Amount..."
                className="bg-gray-200 p-2 border-2 border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none"
                required
            />
            <input
                type="submit"
                value="Add Transaction"
                className="bg-gray-200 p-2 border-2 border-gray-300 rounded-lg focus:border-gray-400 focus:outline-none mt-2"
            />
        </form>
    );
};

export default AddTransaction;
