import Sidebar from '@/components/ui/sidebar/Sidebar';
import Navbar from '@/components/ui/navbar/Navbar';
import { SidebarProvider } from '@/context/SidebarContext';
import SidebarDrawer from '@/components/ui/sidebar/SidebarDrawer';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      
      <main className="flex! h-screen overflow-x-hidden w-full">
        <SidebarDrawer><Sidebar/></SidebarDrawer>
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
