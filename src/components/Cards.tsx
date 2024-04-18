interface Props {
    name: string;
    price: string;
}

const Cards = ({ name, price }: Props) => {
    const getBtnColor = (price: string): string => {
        const property =
            "inline-flex items-center justify-center px-2 py-1 ms-3 font-bold text-xs rounded bg-gray-300";
        return price.includes("+", 0)
            ? `text-green-600 ${property}`
            : `text-red-600 ${property}`;
    };
    return (
        <div>
            <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ring-1 ring-gray-500 transition-colors">
                <button
                    type="button"
                    className="bg-red-500 rounded-md p-1 inline-flex items-center justify-center text-gray-100 hover:text-gray-200 hover:bg-red-600 focus:outline-none"
                >
                    <span className="sr-only">Close menu</span>
                    <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                <span className={getBtnColor(price)}>{price}</span>
            </a>
        </div>
    );
};

export default Cards;
