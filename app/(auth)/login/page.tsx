import AuthCard from '@/components/auth/AuthCard';
import LoginForm from '@/components/auth/LoginForm';

const Loginpage = () => {
  return (
    <div className="flex flex-col items-center w-full">
        <AuthCard
          title="Log in to your account"
          subtitle="Welcome back! Please enter your details."
        >
          <LoginForm />
        </AuthCard>
      </div>
   
  );
};

export default Loginpage;
