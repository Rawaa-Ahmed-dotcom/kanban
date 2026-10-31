import Avatar from '@/components/ui/navbar/Avatar';
import SearchInput from '@/components/ui/navbar/SearchInput';
import { MdNotificationsNone } from 'react-icons/md';
import BurgerIcon from './BurgerIcon';
import SearchModal from '../modals/SearchModal';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="p-7 px-8 flex items-center justify-between w-full bg-(--bg-card) ">
      <div className="flex items-center justify-start">
        <BurgerIcon />
      </div>
      <div className="w-[50%] hidden sm:block">
        <SearchInput />
      </div>

      <div className="flex justify-end items-center gap-2.5">
        <SearchModal />

        <Link
          href="/notifications"
          className="p-2 rounded-full hover:bg-black/5 active:scale-95 transition-all"
        >
          <MdNotificationsNone
            size={25}
            className="text-(--gray-600)  hover:text-(--gray-900) "
          />
        </Link>
        <ThemeToggle />
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
