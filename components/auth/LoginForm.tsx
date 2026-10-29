'use client';
import { loginData } from '@/lib/types';
import { useForm } from 'react-hook-form';
import FormRow from '../ui/forms/FormRow';
import Link from 'next/link';
import Button from '../ui/buttons/Button';
import GoogleButton from '../ui/buttons/GoogleButton';
import { LoginFormValidator } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({ resolver: zodResolver(LoginFormValidator) });

  const submitLoginForm = (data: loginData) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <form
      className="mt-8 w-full flex flex-col  gap-5"
      onSubmit={handleSubmit(submitLoginForm)}
      noValidate
    >
      <FormRow
        register={register}
        name="email"
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email.."
        error={errors.email?.message as string}
      />
      <FormRow
        register={register}
        name="password"
        label="Password"
        id="password"
        type="password"
        placeholder="Enter your password.."
        error={errors.password?.message as string}
      />
      <div className="flex items-center justify-between mt-6 mb-6">
        <div className="flex items-center gap-1.5">
          <input
            type="checkbox"
            id="remember_for_30d"
            className="cursor-pointer"
          />
          <label
            htmlFor="remember_for_30d"
            className="font-medium text-[14px] text-(--gray-700) cursor-pointer"
          >
            Remember for 30 days
          </label>
        </div>
        <Link
          href="/forget-password"
          className="font-medium text-[14px] text-(--primary-600) transition-all duration-200 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Button
          className="hover:bg-(--primary-700) hover:-translate-y-0.5"
          type="submit"
        >
          Sign in{' '}
        </Button>
        <GoogleButton />
      </div>
      <div className="flex items-center gap-1 justify-center">
        <span className="text-[14px] font-normal text-(--gray-500)">
          Don’t have an account?
        </span>
        <Link
          href="/signup"
          className="font-medium text-[14px] text-(--primary-600) transition duration-200 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
