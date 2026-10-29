import { IoSearch } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 p-3 border border-(--gray-300) rounded-3xl bg-white transition-all duration-200 focus-within:-translate-y-0.5 focus-within:shadow-md focus-within:border-(--gray-500) group">
      <IoSearch
        size={24}
        className="text-(--gray-400) transition-colors duration-200 group-focus-within:text-(--gray-700)"
      />
      <input
        type="text"
        className="placeholder:text-(--gray-400) text-[16px] placeholder:text-[16px] font-normal outline-none bg-transparent p-1 flex-1 text-(--gray-600)"
        placeholder="Search product, supplier, order"
      />
    </div>
  );
};

export default SearchInput;
