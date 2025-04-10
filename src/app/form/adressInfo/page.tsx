"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddressInfo } from "@/app/utils/zodSchemas";

type FormData = z.infer<typeof AddressInfo>;

export default function AddressInfoStep({
  onNext,
  onBack,
  currentStepIndex,
  isFirstStep,
  defaultValues,
}: {
  onNext: (data: FormData) => void;
  onBack: () => void;
  defaultValues: FormData;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(AddressInfo),
    defaultValues,
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-sky-600 mb-6 text-center">
          Step 2: Address Details
        </h2>

        <form onSubmit={handleSubmit(onNext)} className="space-y-5">
          {/* Street Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Street Address
            </label>
            <input
              {...register("street")}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="123 Main St"
            />
            {errors.street && (
              <p className="text-red-500 text-sm mt-1">
                {errors.street.message}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">City</label>
            <input
              {...register("city")}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Your City"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Zip Code
            </label>
            <input
              {...register("zip")}
              type="text"
              inputMode="numeric"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="e.g. 12345"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
            )}
          </div>

          <div className="flex justify-center items-center pt-4">
            
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition w-full"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
