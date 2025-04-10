'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AccountInfo } from '@/app/utils/zodSchemas';

type FormData = z.infer<typeof AccountInfo>;

export default function AccountSetupStep({
  onNext,
  onBack,
  defaultValues
}: {
  onNext: (data: FormData) => void;
  onBack: () => void;
  defaultValues: FormData;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(AccountInfo),
    defaultValues
  });

  const password = watch('password');

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-sky-600 mb-6 text-center">
          Step 3: Account Setup
        </h2>

        <form onSubmit={handleSubmit(onNext)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              {...register('username')}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              {...register('password')}
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
              {...register('confirmPassword')}
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Re-type Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex justify-center items-center pt-4">
            
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}