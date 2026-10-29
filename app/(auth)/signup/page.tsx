import AuthCard from '@/components/auth/AuthCard';
import SignupForm from '@/components/auth/SignupForm';

const page = () => {
  return (
    <div className="flex flex-col items-center w-full">
        <AuthCard
          title="Create an account"
          subtitle="Start your 30-day free trial."
        >
          <SignupForm />
        </AuthCard>
      </div>
    
  );
};

export default page;
