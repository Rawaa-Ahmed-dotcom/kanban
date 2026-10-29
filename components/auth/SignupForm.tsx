'use client';

import { SignupFormValidator } from '@/lib/schemas';
import { signupData } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormRow from '../ui/forms/FormRow';
import Button from '../ui/buttons/Button';
import GoogleButton from '../ui/buttons/GoogleButton';
import Link from 'next/link';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupData>({
    resolver: zodResolver(SignupFormValidator),
  });

  const submitSignupForm = (data: signupData) => {
    console.log(data);
  };
  return (
    <form
      className="mt-8 w-full flex flex-col  gap-5"
      onSubmit={handleSubmit(submitSignupForm)}
      noValidate
    >
      <FormRow
        register={register}
        name="username"
        label="Name"
        id="username"
        type="text"
        placeholder="Enter your Name.."
        error={errors.username?.message as string}
      />
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

      <div className="flex flex-col gap-4">
        <Button
          className="hover:bg-(--primary-700) hover:-translate-y-0.5"
          type="submit"
        >
          Get started{' '}
        </Button>
        <GoogleButton content="Sign up with Google" />
      </div>
      <div className="flex items-center gap-1 justify-center">
        <span className="text-[14px] font-normal text-(--gray-500)">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="font-medium text-[14px] text-(--primary-600) transition duration-200 hover:underline"
        >
          Log in
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
