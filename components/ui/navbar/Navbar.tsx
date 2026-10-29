import Avatar from '@/components/ui/navbar/Avatar';
import SearchInput from '@/components/ui/navbar/SearchInput';
import { MdNotificationsNone } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="p-7 flex items-center justify-between w-full bg-white ">
      <div className="w-[50%]">
        <SearchInput />
      </div>
      <div className="flex justify-end items-center gap-2.5">
        <MdNotificationsNone
          size={25}
          className="text-(--gray-600) cursor-pointer hover:text-(--gray-900) hover:animate-bell "
        />
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
