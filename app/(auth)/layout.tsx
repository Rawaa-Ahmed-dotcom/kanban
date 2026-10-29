import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex items-center">
      <div className="w-[90%] sm:w-[80%] mx-auto min-h-screen flex  justify-between ">
        <div className="md:flex items-center justify-center w-[40%] hidden ">
          <Image
            src="/logo.png"
            alt="Kanban Logo"
            width={250}
            height={362}
            loading="eager"
          />
        </div>
        <div className="w-full md:w-[50%] flex items-center  pb-20">
              {children}
            </div>
      </div>
    </main>
  );
};

export default AuthLayout;
