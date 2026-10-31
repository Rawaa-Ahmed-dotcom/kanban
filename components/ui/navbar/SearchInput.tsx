import { IoSearch } from 'react-icons/io5';

interface SearchInputProps {
  autoFocus?: boolean;
}

const SearchInput = ({ autoFocus = false }: SearchInputProps) => {
  return (
    <div className="flex items-center gap-3 px-3.5 py-2.5 border border-(--gray-100) rounded-xl bg-(--bg-main, #f9fafb)  focus-within:border-(--primary-500) focus-within:ring-3 focus-within:ring-(--primary-100) transition-all duration-150 group">
      <IoSearch
        size={20}
        className="text-(--gray-400) shrink-0 group-focus-within:text-(--primary-500) transition-colors"
      />
      <input
        type="text"
        autoFocus={autoFocus}
        className="w-full bg-transparent text-[15px] text-(--gray-900) placeholder:text-(--gray-400) outline-none font-normal"
        placeholder="Search product, supplier, order..."
      />
    </div>
  );
};

export default SearchInput;