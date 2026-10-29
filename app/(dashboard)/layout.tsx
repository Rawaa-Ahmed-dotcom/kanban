import Sidebar from '@/components/ui/sidebar/Sidebar';
import Navbar from "@/components/ui/navbar/Navbar";

const layout = ({children} : {children : React.ReactNode} ) => {
  return (
    <main className="flex! h-screen overflow-x-hidden">
      <div className="w-[18%] h-full border border-(--gray-50) bg-white ">
        <Sidebar />
      </div>
      <div className = "w-[82%] ">
        <Navbar/>
        {children}
        </div>
    </main>
  );
};

export default layout;
