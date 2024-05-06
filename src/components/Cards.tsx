interface Props {
  name: string;
  price: string;
  onClick(): void;
}

const Cards = ({ name, price, onClick }: Props) => {
  const getBtnColor = (price: string): string => {
    const property =
      "inline-flex items-center justify-center px-2 py-1 ms-3 font-bold text-xs rounded bg-neutral-300";
    return price.includes("-", 0)
      ? `text-red-600 ${property}`
      : `text-green-600 ${property}`;
  };
  return (
    <div>
      <a className="flex items-center p-3 text-base font-bold text-neutral-900 rounded-lg bg-neutral-50 hover:bg-neutral-100 group hover:shadow ring-1 ring-neutral-500 transition-colors">
        <button
          type="button"
          className="h-8 w-8 bg-red-500 rounded-md p-1 inline-flex items-center justify-center text-neutral-100 hover:text-neutral-200 hover:bg-red-600 focus:outline-none"
          onClick={onClick}
        >
          X
        </button>
        <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
        <span className={getBtnColor(price)}>{price}</span>
      </a>
    </div>
  );
};

export default Cards;
