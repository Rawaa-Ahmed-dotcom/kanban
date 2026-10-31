import { sidebarItems, sidebarItemsBottom } from '@/lib/utils';
import Brand from '../navbar/Brand';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="flex flex-col p-9 h-full ">
      <Brand />
      <div className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col gap-6">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              title={item.title}
              icon={<item.icon size={24} />}
              href={item.href}
              key={index}
            />
          ))}
        </ul>
        <ul className="flex flex-col gap-6">
          {sidebarItemsBottom.map((item, index) => (
            <SidebarItem
              title={item.title}
              icon={<item.icon size={24} />}
              href={item.href}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
